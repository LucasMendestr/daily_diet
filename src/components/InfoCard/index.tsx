import { Title, Container, SubTitle } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
    subTitle: string;
}

export function InfoCard({ title, subTitle, ...rest }: Props) {
  return (
    <Container>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
    </Container>
  )
}