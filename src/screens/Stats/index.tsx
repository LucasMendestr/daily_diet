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
    isGoodDiet: boolean;
    totalTrue: number;
    totalFalse: number; 
    bestSequence: number
}

export function Stats() {
    const route = useRoute();
    const { isGoodDiet, totalTrue, totalFalse, bestSequence } = route.params as RouteParams;
    const navigation = useNavigation();

    function handleHome() {
        navigation.navigate('home');
    }

    return (
        <Container isGoodDiet={isGoodDiet}>
            <HeaderA>
                <ButtonIcon onPress={handleHome}>
                    <ArrowIcon isGoodDiet={isGoodDiet}/>
                </ButtonIcon>
                <Percent>{(totalTrue/(totalTrue+totalFalse)).toLocaleString('pt-BR', { style: 'percent' })}</Percent>
                <SubTitle>das refeições dentro da dieta</SubTitle>
            </HeaderA>
            <Body>
                <Title>Estatísticas gerais</Title>
                <InfoCard 
                    title={bestSequence.toString()}
                    subTitle={"melhor sequência de pratos dentro da dieta"} 
                />
                <InfoCard 
                    title={(totalTrue+totalFalse).toString()} 
                    subTitle={"refeições registradas"} 
                />
                <BodyRow>
                    <InfoCardSub 
                        title={totalTrue.toString()} 
                        subTitle={"refeições dentro da dieta"} 
                        color={"GREEN"} 
                    />
                    <InfoCardSub 
                        title={totalFalse.toString()} 
                        subTitle={"refeições fora da dieta"} 
                        color={"RED"} 
                    />
                </BodyRow>                
            </Body>
        </Container>
    )
    
}