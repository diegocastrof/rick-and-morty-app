import axios from "axios";

import interceptors from "./interceptors";

const client = axios.create();

client.interceptors.request.use(interceptors.request);

export default client;
