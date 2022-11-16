import { Navbar } from "components";
import React from "react";
import { Container } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Navbar />
      <>{children}</>
    </Container>
  );
};

export default Layout;
