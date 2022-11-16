import { Layout } from "components";
import Image from "next/image";
import bgImage from "public/rick-and-morty-bg.jpeg";
import styled from "styled-components";

export default function Home() {
  return (
    <Layout>
      <ImageContainer>
        <Image
          alt="background-image"
          src={bgImage}
          style={{ width: "60%", height: "auto", borderRadius: "25px" }}
        />
      </ImageContainer>
    </Layout>
  );
}

const ImageContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
