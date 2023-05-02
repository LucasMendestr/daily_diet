import { ArrowButton, ArrowIcon, Container, FirsRow, PerctText, Title, CardTypeStyleProps } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  isGoodDiet: CardTypeStyleProps;
}


export function StatsCard({ isGoodDiet, ...rest }: Props) {
  return (
    <Container isGoodDiet={isGoodDiet} {...rest}>
            <FirsRow>
                <PerctText>98%</PerctText>
                <ArrowButton >
                    <ArrowIcon isGoodDiet={isGoodDiet}/>
                </ArrowButton>
            </FirsRow>
            <Title>das refeições dentro da dieta</Title>
    </Container>
  )
}