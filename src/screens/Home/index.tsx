import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react';

import { Header } from "@components/Header";
import { Container, TileHeader, Title } from "./styles";
import { StatsCard } from "@components/StatsCard";
import { Button } from "@components/Button";
import { SectionList } from "react-native";
import { MealTile } from "@components/MealTile";
import { MealItem, MealDay } from 'src/@types/meals';

import { mealsGetAll } from '@storage/meals/mealsGetAll';

export function Home() {
  const [isGoodDiet, setIsGoodDiet] = useState(false);
  const navigation = useNavigation();
  const [meals, setMeals] = useState<MealDay[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalTrue, setTotalTrue] = useState<number>(0);
  const [totalFalse, setTotalFalse] = useState<number>(0);
  const [bestSequence, setBestSequence] = useState<number>(0);
  const [currentSequence, setCurrentSequence] = useState<number>(0);

  const formattedMeals = meals.map((mealDay, index) => ({
    day: mealDay.day,
    data: mealDay.meals,
    index,
  }));

  function handleStats() {
    navigation.navigate('stats', { isGoodDiet: isGoodDiet, 
      totalTrue: totalTrue,
      totalFalse: totalFalse,
      bestSequence: bestSequence,});
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

  async function calculateAll() {
    let totalItems = 0
    let totalTrue = 0;
    let totalFalse = 0;
    let bestSequence = 0;
    let currentSequence =0;

    meals.forEach((mealDay: MealDay) => {
      mealDay.meals.forEach((meal: MealItem) => {
        totalItems++;

        if (meal.isGoodDiet) {
          totalTrue++;
          currentSequence++;
          if (currentSequence > bestSequence){
            bestSequence = currentSequence;
          }
        } else {
          totalFalse++;
          currentSequence = 0;
        }
      });
    });
    if (totalTrue <= totalFalse ) {
      setIsGoodDiet(false);
    } else {
      setIsGoodDiet(true);
    }
    if (totalTrue <= totalFalse ) {
      setIsGoodDiet(false);
    } else {
      setIsGoodDiet(true);
    }
    setTotalItems(totalItems);
    setTotalTrue(totalTrue);
    setTotalFalse(totalFalse);
    setBestSequence(bestSequence);
    setCurrentSequence(currentSequence);
  }

  useEffect(() => {
    fetchMeals();
    calculateAll();
  }, [meals]);
  
  return (
    <Container>
      <Header />
      <StatsCard 
        isGoodDiet={isGoodDiet}
        onPress={handleStats} 
        percent={(totalTrue/totalItems).toLocaleString('pt-BR', { style: 'percent' }) }/>
      <Title>Refeições</Title>
      <Button title="Nova Refeição" iconP="Plus" onPress={handleNewMeal} />
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
    </Container>
  )
}