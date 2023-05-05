import { useNavigation, useRoute } from "@react-navigation/native";
import { ButtonView, Container, Image, SubTitle, Title, } from "./styles";
import { Button } from "@components/Button";

import man from '@assets/manBad.png'
import woman from '@assets/womanGood.png'

type RouteParams = {
    isGoodDiet: boolean;
}

export function ConfirmationView() {
    const route = useRoute();
    const { isGoodDiet } = route.params as RouteParams;
    const navigation = useNavigation();
    
    function handleHome() {
        navigation.navigate('home');
    }

    return (
        <Container>
            <Title isGoodDiet = {isGoodDiet}>
                {isGoodDiet ? "Continue Assim" : "Que Pena"}
            </Title>
            <SubTitle>
                {isGoodDiet ? 
                "Você continua dentro da dieta. Muito bem!" :
                "Você saiu da dieta dessa vez, mas continue se esforçando e não desita"
                }
            </SubTitle>
            <Image source={isGoodDiet ? woman : man}/>
            <ButtonView>
                <Button title="Ir para a página inicial" onPress={handleHome}/>
            </ButtonView>
        </Container>
    )
}