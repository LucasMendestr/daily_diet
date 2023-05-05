import { useNavigation } from "@react-navigation/native";
import { Title, Container, Hour, Divider, Circle } from "./styles";
import { Alert, TouchableOpacityProps } from "react-native";
import { MealItem } from 'src/@types/meals';
import { useEffect, useState } from "react";
import { mealsGetAll } from "@storage/meals/mealsGetAll";

type Props = TouchableOpacityProps & {
    mealId: number;
}

export function MealTile({ mealId, ...rest }: Props) {
  const navigation = useNavigation();  
  const [mealItem, setMealItem] = useState<MealItem>();
  
  function handleCard() {
    navigation.navigate('mealView', { mealId });
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
    <Container onPress={handleCard}>
        <Hour>{ mealItem ? mealItem.hour : 0}</Hour>
        <Divider/>
        <Title>{mealItem ? mealItem.title : `deu ruim`}</Title>
        <Circle isGoodDiet={mealItem ? mealItem.isGoodDiet : false}/>
    </Container>
  )
}