import styled from "styled-components";

import theme from "styles/theme";

export const CardContainer = styled.div`
  width: 180px;
  border-radius: ${theme.spacing.sm};
  margin: 12px;
  background-color: ${theme.colors.white};
  box-shadow: 3px 5px ${theme.colors.main};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media ${theme.mediaQueries.mobile} {
    flex-direction: row;
    width: 100%;
    height: 200px;
  }
`;

export const ImgCont = styled.div`
  background-color: ${theme.colors.black};
  overflow: hidden;
  object-fit: cover;
  width: 180px;
  height: 200px;
  display: flex;
  justify-content: center;
  & :only-child {
    object-fit: cover;
  }
`;

export const InfoCont = styled.div`
  margin: 4px;
  width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const Title = styled.p`
  color: ${theme.colors.main};
  font-weight: bold;
`;
