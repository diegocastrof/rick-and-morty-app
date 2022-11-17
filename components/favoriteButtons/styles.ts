import styled from "styled-components";
import theme from "styles/theme";

export const LinkButton = styled.button`
  font-size: ${theme.fonts.p};
  color: ${(props) => (props.disabled ? "grey" : theme.colors.main)};
  background-color: transparent;
  border: none;
  outline: none;
  text-decoration: ${(props) => (props.disabled ? "none" : "underline")};
  pointer-events: ${(props) => (props.disabled ? "none" : null)};
`;
