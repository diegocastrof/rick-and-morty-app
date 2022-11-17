import { Text } from "./styles";

interface InformationBlock {
  title: string;
  text: string;
}

const InformationBlock = ({ title, text }: InformationBlock) => (
  <Text>
    <strong>{title}: </strong>
    {text}
  </Text>
);

export default InformationBlock;
