import AsyncStorage from '@react-native-async-storage/async-storage';

import { MealDay, MealItem } from 'src/@types/meals';
import { mealsGetAll } from './mealsGetAll';
import { MEALS_COLLECTION } from '@storage/storageConfig';


export async function mealCreate(date: string, newMealItem: MealItem) {
  try {
    // Buscar todas as refeições armazenadas
    const storedMeals = await mealsGetAll();

    // Encontrar o maior índice de mealItem atual
    let maxIndex = 0;
    storedMeals.forEach((mealDay: MealDay) => {
      mealDay.meals.forEach((meal: MealItem) => {
        if (meal.index && meal.index > maxIndex) {
          maxIndex = meal.index;
        }
      });
    });

    // Atribuir o novo índice ao novo MealItem
    newMealItem.index = maxIndex + 1;    

    // Procurar pelo dia da nova refeição
    const mealDayIndex = storedMeals.findIndex((mealDay) => mealDay.day === date);

    if (mealDayIndex >= 0) {
      // Se o dia já estiver presente, adicionar a nova refeição ao array correspondente
      const meals = storedMeals[mealDayIndex].meals;
      meals.push(newMealItem);
    } else {
      // Caso contrário, criar um novo objeto MealDay com o dia e a nova refeição
      const newMealDayObj = { day: date, meals: [newMealItem] };
      storedMeals.push(newMealDayObj);
    }

    // Armazenar a lista de refeições atualizada no AsyncStorage
    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storedMeals));
  } catch (error) {
    throw error;
  }
}


export async function mealDeleteAll() {
  try {
    // Apagar todos os dados armazenados no AsyncStorage
    await AsyncStorage.clear();
  } catch (error) {
    throw error;
  }
}