export class InvalidPathParam extends Error {
  constructor(route: string, param: string) {
    const msg = `Invalid path param '${param}' for route '${route}'`;
    super(msg);
    this.name = "InvalidPathParam";
    this.stack = (<InvalidPathParam>new Error()).stack;
    Object.setPrototypeOf(this, InvalidPathParam.prototype);
  }
}

const validatePathParamsInRoute = (route: string, pathParams: string[]) => {
  pathParams.forEach((param) => {
    if (!route.includes(`{${param}}`)) {
      throw new InvalidPathParam(route, param);
    }
  });
};

const urlFormat = <T extends string>(str: string, args?: Record<T, string>) => {
  if (!args) return str;
  const data = Object.entries(args).filter((a) => a[1] !== undefined);
  let newStr = str;
  let firstQueryParamsLoop = true;
  data.forEach((d) => {
    if (newStr.includes(`{${d[0]}`)) {
      newStr = newStr.replace(`{${d[0]}}`, `${d[1]}`);
    } else {
      if (firstQueryParamsLoop) newStr += "?";
      else newStr += "&";
      newStr += `${d[0]}=${d[1]}`;
      firstQueryParamsLoop = false;
    }
  });
  return newStr;
};

class Url<
  PathT extends string = never,
  QueryT extends string = never,
  OptionalT extends string = "",
> {
  route;

  pathParams: PathT[] = [];

  requiredQueryParams;

  optionalQueryParams;

  defaultValues = {};

  constructor({
    route,
    pathParams = [],
    requiredQueryParams = [],
    optionalQueryParams = [],
    defaultValues = {},
  }: {
    route: string;
    pathParams?: PathT[];
    requiredQueryParams?: QueryT[];
    optionalQueryParams?: OptionalT[];
    defaultValues?: Partial<Record<OptionalT, string | undefined>>;
  }) {
    validatePathParamsInRoute(route, pathParams);
    this.route = route;
    this.pathParams = pathParams;
    this.requiredQueryParams = requiredQueryParams;
    this.optionalQueryParams = optionalQueryParams;
    this.defaultValues = defaultValues;
  }

  getUrl = (
    args?: Record<PathT, string> &
      Record<QueryT, string> &
      Partial<Record<OptionalT, string | undefined>>,
  ): string => urlFormat(this.route, { ...this.defaultValues, ...args });

  in = <
    PathParams extends string = never,
    RequiredQueryParams extends string = never,
    OptionalQueryParams extends string = never,
  >({
    route,
    pathParams,
    requiredQueryParams,
    optionalQueryParams,
  }: {
    route: string;
    pathParams?: PathParams[];
    requiredQueryParams?: RequiredQueryParams[];
    optionalQueryParams?: OptionalQueryParams[];
  }) => {
    const thisPathParams: (PathT | PathParams)[] = [...this.pathParams];
    const thisRequiredQueryParams: (QueryT | RequiredQueryParams)[] = [
      ...this.requiredQueryParams,
    ];
    const thisOptionalQueryParams: (OptionalT | OptionalQueryParams)[] = [
      ...this.optionalQueryParams,
    ];
    return new Url<
      PathT | PathParams,
      QueryT | RequiredQueryParams,
      OptionalT | OptionalQueryParams
    >({
      route: this.route.concat(...route),
      pathParams: pathParams
        ? thisPathParams.concat(...pathParams)
        : this.pathParams,
      requiredQueryParams: requiredQueryParams
        ? thisRequiredQueryParams.concat(...requiredQueryParams)
        : this.requiredQueryParams,
      optionalQueryParams: optionalQueryParams
        ? thisOptionalQueryParams.concat(...optionalQueryParams)
        : this.optionalQueryParams,
      defaultValues: this.defaultValues,
    });
  };

  setDefaultValues = (
    defaultValues: Partial<Record<OptionalT, string | undefined>>,
  ) => {
    this.defaultValues = { ...this.defaultValues, ...defaultValues };
    return this;
  };
}

export default Url;
