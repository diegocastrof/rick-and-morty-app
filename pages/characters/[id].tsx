import { GetServerSideProps } from "next";
import React from "react";
import Image from "next/image";
import AppService from "services/appService";
import { Character } from "services/types/app";
import {
  ImageContainer,
  InformationContainer,
  Layout,
  Title,
  Button,
} from "components/layout/showStyles";
import { FavoriteButtons, InformationBlock, Navbar } from "components";
import { useRouter } from "next/router";
import { Favorite } from "context/types";
import useFavorite from "hooks/useFavorite";
import { AiFillHeart } from "react-icons/ai";

interface Props {
  character: Character;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const characterId = context.params?.id as string;
  const res = await AppService.getCharacter(parseInt(characterId));
  return { props: { character: res.data } };
};

const CharacterShow = ({ character }: Props) => {
  const router = useRouter();
  const { findIsFavorite } = useFavorite();

  const favoriteData: Favorite = {
    id: `character-${character.id}`,
    name: character.name,
    imageSrc: character.image,
    link: `characters/${character.id}`,
  };

  const isFavorite = findIsFavorite(favoriteData.id);

  return (
    <Layout>
      <Navbar />
      <Title>
        {character?.name}
        {isFavorite && <AiFillHeart color="red" />}
      </Title>
      <ImageContainer>
        <Image alt="character-image" src={character.image} fill />
      </ImageContainer>
      <FavoriteButtons isFavorite={isFavorite} favoriteData={favoriteData} />
      <InformationContainer>
        <InformationBlock title="Especie" text={character.species} />
        <InformationBlock title="Status" text={character.status} />
        <InformationBlock title="Género" text={character.gender} />
      </InformationContainer>
      <Button onClick={() => router.back()}>Volver</Button>
    </Layout>
  );
};

export default CharacterShow;
