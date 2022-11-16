import styled from "styled-components";

import theme from "styles/theme";

export const PaginationContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.xxl} 0;
`;

export const LinkButton = styled.button`
  font-size: ${theme.fonts.p};
  color: ${(props) => (props.disabled ? "grey" : theme.colors.main)};
  background-color: transparent;
  border: none;
  outline: none;
  text-decoration: ${(props) => (props.disabled ? "none" : "underline")};
  pointer-events: ${(props) => (props.disabled ? "none" : null)};
`;

export const Text = styled.h3`
  font-weight: bold;
  color: ${theme.colors.black};
`;
