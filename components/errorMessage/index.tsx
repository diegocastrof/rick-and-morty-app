import React, { Dispatch, FC, SetStateAction } from "react";
import { Container, Text, Button } from "./styles";

interface IErrorMessage {
  errorMessage: string;
}

const ErrorMessage: FC<IErrorMessage> = ({ errorMessage }) => {
  return (
    <Container>
      <Text>{errorMessage}</Text>
    </Container>
  );
};

export default ErrorMessage;
