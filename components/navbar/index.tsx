import Link from "next/link";
import React, { useState } from "react";
import {
  DrawerButtonContainer,
  Container,
  LinksContainer,
  StyledLink,
  Title,
  DrawerContent,
  DrawerContainer,
} from "./styles";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Link href="/">
        <Title>Universo Rick & Morty</Title>
      </Link>
      <LinksContainer>
        <LinksItems />
      </LinksContainer>
      <DrawerContainer>
        <DrawerButtonContainer onClick={() => setIsOpen((prev) => !prev)}>
          <IoMdMenu />
        </DrawerButtonContainer>
        <DrawerContent isOpen={isOpen}>
          <LinksItems />
        </DrawerContent>
      </DrawerContainer>
    </Container>
  );
};

const LinksItems = () => (
  <>
    <Link href="/characters" passHref>
      <StyledLink>Personajes</StyledLink>
    </Link>
    <Link href="/episodes">
      <StyledLink>Episodios</StyledLink>
    </Link>
    <Link href="/locations">
      <StyledLink>Locaciones</StyledLink>
    </Link>
  </>
);

export default Navbar;
