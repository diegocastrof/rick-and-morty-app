import { FC } from "react";
import Image from "next/image";
import { CardContainer, ImgCont, InfoCont, Title } from "./style";
import NoImage from "public/no-image.png";

interface Props {
  name: string;
  image?: string;
}

const Card: FC<Props> = ({ name, image }) => {
  return (
    <CardContainer>
      <ImgCont>
        <Image
          src={image ?? NoImage}
          alt="card-image"
          width={180}
          height={200}
          layout="fixed"
        />
      </ImgCont>
      <InfoCont>
        <Title>{name}</Title>
      </InfoCont>
    </CardContainer>
  );
};

export default Card;
