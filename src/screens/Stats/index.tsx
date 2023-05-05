import { InfoCard } from "@components/InfoCard";
import { ArrowIcon, 
    Body, 
    BodyRow, 
    ButtonIcon, 
    Container, 
    HeaderA, 
    Percent, 
    SubTitle, 
    Title, } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { InfoCardSub } from "@components/InfoCardSub";

type RouteParams = {
    isGoodDietS: boolean;
}

export function Stats() {
    const route = useRoute();
    const { isGoodDietS } = route.params as RouteParams;
    const isGoodDiet = isGoodDietS;
    const navigation = useNavigation();
    function handleHome() {
    navigation.navigate('home');
  }

    return (
        <Container isGoodDiet={isGoodDiet}>
            <HeaderA>
                <ButtonIcon onPress={handleHome}>
                    <ArrowIcon isGoodDiet/>
                </ButtonIcon>
                <Percent>98%</Percent>
                <SubTitle>das refeições dentro da dieta</SubTitle>
            </HeaderA>
            <Body>
                <Title>Estatísticas gerais</Title>
                <InfoCard 
                    title={"22"} 
                    subTitle={"melhor sequência de pratos dentro da dieta"} 
                />
                <InfoCard 
                    title={"109"} 
                    subTitle={"refeições registradas"} 
                />
                <BodyRow>
                    <InfoCardSub 
                        title={"90"} 
                        subTitle={"refeições dentro da dieta"} 
                        color={"GREEN"} 
                    />
                    <InfoCardSub 
                        title={"10"} 
                        subTitle={"refeições fora da dieta"} 
                        color={"RED"} 
                    />
                </BodyRow>                
            </Body>
        </Container>
    )
    
}