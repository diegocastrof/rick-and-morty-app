import styled from "styled-components";
import theme from "styles/theme";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: ${theme.spacing.md};

  @media ${theme.mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${theme.mediaQueries.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
