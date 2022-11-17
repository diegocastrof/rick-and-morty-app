import { GetServerSideProps } from "next";
import React from "react";
import Image from "next/image";
import AppService from "services/appService";
import { Location } from "services/types/app";
import {
  Button,
  ImageContainer,
  InformationContainer,
  Layout,
  Title,
} from "components/layout/showStyles";
import { FavoriteButtons, InformationBlock, Navbar } from "components";
import NoImage from "public/no-image.png";
import { useRouter } from "next/router";
import { Favorite } from "context/types";
import useFavorite from "hooks/useFavorite";
import { AiFillHeart } from "react-icons/ai";

interface Props {
  location: Location;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const locationId = context.params?.id as string;
  const res = await AppService.getLocation(parseInt(locationId));
  return { props: { location: res.data } };
};

const LocationShow = ({ location }: Props) => {
  const router = useRouter();
  const { findIsFavorite } = useFavorite();

  const favoriteData: Favorite = {
    id: `location-${location.id}`,
    name: location.name,
    link: `locations/${location.id}`,
  };

  const isFavorite = findIsFavorite(favoriteData.id);

  return (
    <Layout>
      <Navbar />
      <Title>
        {location?.name}
        {isFavorite && <AiFillHeart color="red" />}
      </Title>
      <ImageContainer>
        <Image alt="background-image" src={NoImage} fill />
      </ImageContainer>
      <FavoriteButtons isFavorite={isFavorite} favoriteData={favoriteData} />
      <InformationContainer>
        <InformationBlock title="Dimensión" text={location.dimension} />
        <InformationBlock title="Tipo" text={location.type} />
      </InformationContainer>
      <Button onClick={() => router.back()}>Volver</Button>
    </Layout>
  );
};

export default LocationShow;
