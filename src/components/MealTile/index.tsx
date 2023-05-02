import { Title, TileTypeStyleProps, Container, Hour, Divider, Circle } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    hour: string;
    title: string;
    isGoodDiet: boolean;
}

export function MealTile({ hour, title, isGoodDiet, ...rest }: Props) {
  return (
    <Container>
        <Hour>{hour}</Hour>
        <Divider/>
        <Title>{title}</Title>
        <Circle isGoodDiet={isGoodDiet}/>
    </Container>
  )
}