import styled from "styled-components";

import Theme from "styles/theme";
import { shadowSearch } from "styles/animations";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${Theme.mediaQueries.miniDesktop} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const Title = styled.h3`
  color: ${Theme.colors.main};
`;

export const SearchContainer = styled.section`
  width: 400px;
  display: flex;
  justify-content: center;
  @media ${Theme.mediaQueries.mobile} {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  margin-right: 8px;
  outline: none;
  padding: 8px;
  color: ${Theme.colors.black};
  border-radius: 4px;
  box-shadow: 3px 5px ${Theme.colors.main};

  :focus {
    ${shadowSearch()}
  }
`;
