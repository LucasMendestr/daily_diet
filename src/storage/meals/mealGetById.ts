import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '@storage/storageConfig';
import { MealDay, MealItem } from 'src/@types/meals';

export async function mealGetById(id: number): Promise<MealItem | null> {
  try {
    const storageData = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: MealDay[] = storageData ? JSON.parse(storageData) : [];
    let mealI: MealItem | null = null;

    meals.forEach((meal) => {
      if (!meal || !meal.meals) {
        return;
      }

      const mealItem = meal.meals.find((m) => m.index === id);
      if (mealItem) {
        mealI = mealItem;
      }
    });

    return mealI;
  } catch (error) {
    throw error;
  }
}
