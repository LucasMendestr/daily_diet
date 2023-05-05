import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";
import { useEffect, useState } from "react";

import { Button } from "@components/Button";
import { MealItem } from 'src/@types/meals';
import { mealsGetAll } from "@storage/meals/mealsGetAll";

import { ArrowIcon, 
    Body, 
    ButtonIcon, 
    ButtonView, 
    Circle, 
    Container, 
    HeaderA,
    MCard,
    MCardText,
    SubTitleA,
    SubTitleB,
    TitleA,
    TitleB, 
} from "./styles";
import { mealDeleteById } from "@storage/meals/mealDelete";


type RouteParams = {
    mealId: number;
}

export function MealView() {
    const route = useRoute();
    const { mealId } = route.params as RouteParams;
    const navigation = useNavigation();
    const [mealItem, setMealItem] = useState<MealItem>();
    
    function handleHome() {
        navigation.navigate('home');
    }
    
    function handleEdit() {
        navigation.navigate('newMeal', {mealId});
    }
    
    function handleDelete() {
    Alert.alert(
        "Deletar",
        "Deseja realmente excluir o registro da refeição?",
        [
            {
            text: "Cancelar",
            onPress: () => {
                return;
            },
            },
            {
            text: "Excluir",
            onPress: () => {
                mealDeleteById(mealId);
                navigation.navigate('home');
            },
            },
        ],
    );
    }

    async function loadMealItem() {
        try {
            const mealDays = await mealsGetAll();
            const mealItem = mealDays
                .flatMap((mealDay) => mealDay.meals)
                .find((meal) => meal.index === mealId);
            setMealItem(mealItem);
        } catch (error) {
            Alert.alert('Error', 'Failed to load meal item');
        }
    }

    useEffect(() => {
        loadMealItem();
      }, [mealId]);

    return (
        <Container isGoodDiet={mealItem ? mealItem.isGoodDiet : false}>
            <HeaderA>
                <ButtonIcon onPress={handleHome}>
                    <ArrowIcon/>
                </ButtonIcon>
                <TitleA>Refeição</TitleA>
            </HeaderA>
            <Body>
                <TitleA>{mealItem ? mealItem.title : 'deu ruim'}</TitleA>
                <SubTitleA>{mealItem ? mealItem.description : 'deu ruim'}</SubTitleA>                
                <TitleB>Data e hora</TitleB>
                <SubTitleB>{`${mealItem ? mealItem.day : 'deu ruim'} às ${mealItem ? mealItem.hour : 'deu ruim'}`}</SubTitleB>
                <MCard>
                    <Circle isGoodDiet={mealItem ? mealItem.isGoodDiet : false}/>
                    <MCardText>{mealItem ? mealItem.isGoodDiet ? "dentro da dieta" : "fora da dieta" : "dentro"}</MCardText>
                </MCard>
                <ButtonView>
                    <Button title={"Editar refeição"} iconP="Pencil" onPress={handleEdit}/>
                    <Button title={"Excluir refeição"} iconP="Trash" onPress={handleDelete}/>
                </ButtonView>
            </Body>
        </Container>
    )
    
}