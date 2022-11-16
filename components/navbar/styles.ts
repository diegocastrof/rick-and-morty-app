import styled, { css } from "styled-components";

import theme from "styles/theme";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.md} 0;
`;

export const Title = styled.h1`
  color: ${theme.colors.main};
  @media ${theme.mediaQueries.tablet} {
    font-size: ${theme.fonts.h2};
  }
`;

export const LinksContainer = styled.section`
  display: flex;
  align-items: center;
  @media ${theme.mediaQueries.tablet} {
    display: none;
  }
`;

export const StyledLink = styled.p`
  color: ${theme.colors.main};
  font-size: ${theme.fonts.h3};
  padding: 0 ${theme.spacing.md};
`;

export const DrawerContainer = styled.div`
  position: relative;
  display: none;
  @media ${theme.mediaQueries.tablet} {
    display: block;
  }
`;

export const DrawerButtonContainer = styled.button`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  background-color: ${theme.colors.pink};
  border-radius: 5px;
  outline: none;
  border-color: ${theme.colors.main};
  cursor: pointer;
  display: none;
  @media ${theme.mediaQueries.tablet} {
    display: block;
  }
`;

interface DrawerContentProps {
  isOpen: boolean;
}

export const DrawerContent = styled.section<DrawerContentProps>`
  position: absolute;
  border-radius: 10px;
  padding: ${(props) => (props.isOpen ? theme.spacing.sm : 0)};
  top: 30px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  max-height: ${(props) => (props.isOpen ? "100px" : "0px")};
  transition: 300ms;
  overflow: hidden;
  background-color: ${(props) => (props.isOpen ? "black" : "transparent")};
`;
