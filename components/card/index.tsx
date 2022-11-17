import { FC } from "react";
import Image from "next/image";
import { CardContainer, ImgCont, InfoCont, Title } from "./style";
import NoImage from "public/no-image.png";
import Link from "next/link";

interface Props {
  name: string;
  link: string;
  image?: string;
}

const Card: FC<Props> = ({ name, image, link }) => {
  return (
    <Link href={link}>
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
    </Link>
  );
};

export default Card;
