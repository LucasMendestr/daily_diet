import { ArrowIcon, Container, HeaderA, Percent, SubTitle, } from "./styles";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
    isGoodDietS: boolean;
}

export function Stats() {
    const route = useRoute();
    const { isGoodDietS } = route.params as RouteParams;
    const isGoodDiet = isGoodDietS;

    return (
        <Container isGoodDiet={isGoodDiet}>
            <HeaderA>
                <ArrowIcon isGoodDiet/>
                <Percent>98</Percent>
                <SubTitle>das refeições dentro da dieta</SubTitle>
            </HeaderA>
        </Container>
    )
}