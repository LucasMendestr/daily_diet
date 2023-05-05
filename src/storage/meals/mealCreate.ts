import AsyncStorage from '@react-native-async-storage/async-storage';

import { MealDay, MealItem } from 'src/@types/meals';
import { mealsGetAll } from './mealsGetAll';
import { MEALS_COLLECTION } from '@storage/storageConfig';


export async function mealCreate(date: string, newMealItem: MealItem) {
  try {
    const storedMeals = await mealsGetAll();
    let maxIndex = 0;
    storedMeals.forEach((mealDay: MealDay) => {
      mealDay.meals.forEach((meal: MealItem) => {
        if (meal.index && meal.index > maxIndex) {
          maxIndex = meal.index;
        }
      });
    });
    newMealItem.index = maxIndex + 1;    
    const mealDayIndex = storedMeals.findIndex((mealDay) => mealDay.day === date);
    if (mealDayIndex >= 0) {
      const meals = storedMeals[mealDayIndex].meals;
      meals.push(newMealItem);
    } else {
      const newMealDayObj = { day: date, meals: [newMealItem] };
      storedMeals.push(newMealDayObj);
    }
    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storedMeals));
  } catch (error) {
    throw error;
  }
}