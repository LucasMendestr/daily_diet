import { Title, Container, SubTitle } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
    subTitle: string;
    color: string;
}

export function InfoCardSub({ title, subTitle, color, ...rest }: Props) {
  return (
    <Container color={color}>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
    </Container>
  )
}