import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useState, useCallback } from 'react';

import { Header } from "@components/Header";
import { Container, TileHeader, Title } from "./styles";
import { StatsCard } from "@components/StatsCard";
import { Button } from "@components/Button";
import { SectionList } from "react-native";
import { MealTile } from "@components/MealTile";
import { MealItem, MealDay } from 'src/@types/meals';

import { mealsGetAll } from '@storage/meals/mealsGetAll';
import { mealDeleteAll } from '@storage/meals/mealCreate';


export function Home() {
  const [isGoodDiet, setIsGoodDiet] = useState(false);
  const navigation = useNavigation();
  const [meals, setMeals] = useState<MealDay[]>([]);

  const formattedMeals = meals.map((mealDay, index) => ({
    day: mealDay.day,
    data: mealDay.meals,
    index,
  }));

  function handleStats() {
    navigation.navigate('stats', { isGoodDiet });
  }

  async function teste() {
    mealDeleteAll();
  }

  function handleNewMeal() {
    navigation.navigate('newMeal', {});
  }


  async function fetchMeals() {
    try {
      const data = await mealsGetAll();
      setMeals(data);
    } catch (error) {
    }
  }

useFocusEffect(useCallback(() => {
  fetchMeals()
},[]))

  return (
    <Container>
      <Header />
      <StatsCard 
        isGoodDiet={isGoodDiet} 
        onPress={handleStats}
      />
      <Title>Refeições</Title>
      <Button title="Nova Refeição" iconP="Plus"  onPress={handleNewMeal} />
      <SectionList
        sections={formattedMeals}
        keyExtractor={(item) => item.index ? item.index.toString() : "" }
        renderItem={({item}) => (
        <MealTile mealId={item.index ?? 1} />
        )}
        renderSectionHeader={({section: {day}}) => (
        <TileHeader>{day}</TileHeader>
        )}
      />
      <Button title="deleta " iconP="Trash"  onPress={teste} />
    </Container>

  )
}