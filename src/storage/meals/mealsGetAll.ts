import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '@storage/storageConfig';
import { MealDay, MealItem } from 'src/@types/meals';

export async function mealsGetAll() {
  try {
    const storageData = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: MealDay[] = storageData ? JSON.parse(storageData) : [];
    // Agrupar as refeições pelo dia
    const mealsByDay: {[key: string]: MealItem[]} = {};
    meals.forEach((meal) => {
      if (!meal || !meal.day || !meal.meals) {
        return; // pular refeições inválidas
      }
    
      meal.meals.forEach((m) => {
        if (!m || !m.hour || !m.index) {
          return; // pular refeições inválidas
        }
    
        const day = m.day;
        mealsByDay[day] = mealsByDay[day] || [];
        mealsByDay[day].push(m);
      });
    });
    
    // Converter o objeto de refeições agrupadas em um array de objetos MealDay
    const mealDays: MealDay[] = [];
    for (const day in mealsByDay) {
      mealDays.push({
        day: day,
        meals: mealsByDay[day],
      });
    }
    console.log(`meals: ${JSON.stringify(meals)}`);
    return mealDays;
  } catch (error) {
    throw error;
  }
}