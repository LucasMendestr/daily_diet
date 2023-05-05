import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '@storage/storageConfig';
import { MealDay, MealItem } from 'src/@types/meals';

export async function mealDeleteById(id: number): Promise<void> {
    try {
      const storageData = await AsyncStorage.getItem(MEALS_COLLECTION);
      let meals: MealDay[] = storageData ? JSON.parse(storageData) : [];
  
      meals = meals.map((meal) => {
        if (!meal || !meal.meals) {
          return meal;
        }
  
        meal.meals = meal.meals.filter((m) => m.index !== id);
        return meal;
      });
  
      await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(meals));
    } catch (error) {
      throw error;
    }
  }
  
  
  
  
  
  
  
