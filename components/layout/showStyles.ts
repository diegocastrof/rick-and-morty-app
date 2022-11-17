import styled from "styled-components";
import theme from "styles/theme";

export const Layout = styled.section`
  width: 100%;
  margin-top: ${theme.spacing.xl};
  padding: 0 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${theme.colors.main};
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
`;

export const InformationContainer = styled.section`
  padding: ${theme.spacing.lg} 0;
`;

export const Text = styled.p`
  color: ${theme.colors.black};
  margin-bottom: ${theme.spacing.md};
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  overflow: hidden;
  object-fit: cover;
`;

export const Button = styled.button`
  background-color: ${theme.colors.main};
  border-radius: 100rem;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  color: ${theme.colors.white};
  border-color: ${theme.colors.pink};
  outline: none;
`;
