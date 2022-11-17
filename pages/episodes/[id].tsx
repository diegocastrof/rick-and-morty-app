import { GetServerSideProps } from "next";
import React from "react";
import Image from "next/image";
import AppService from "services/appService";
import { Episode } from "services/types/app";
import {
  Button,
  ImageContainer,
  InformationContainer,
  Layout,
  Title,
} from "components/layout/showStyles";
import { InformationBlock } from "components";
import NoImage from "public/no-image.png";
import { useRouter } from "next/router";

interface Props {
  episode: Episode;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const episodeId = context.params?.id as string;
  const res = await AppService.getEpisode(parseInt(episodeId));
  return { props: { episode: res.data } };
};

const EpisodeShow = ({ episode }: Props) => {
  const router = useRouter();
  return (
    <Layout>
      <Title>{episode?.name}</Title>
      <ImageContainer>
        <Image alt="placeholder-image" src={NoImage} fill />
      </ImageContainer>
      <InformationContainer>
        <InformationBlock
          title="Fecha de transmisión"
          text={episode.air_date}
        />
      </InformationContainer>
      <Button onClick={() => router.back()}>Volver</Button>
    </Layout>
  );
};

export default EpisodeShow;
