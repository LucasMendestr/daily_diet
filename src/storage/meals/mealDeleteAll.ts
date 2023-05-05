import AsyncStorage from '@react-native-async-storage/async-storage';

export async function mealDeleteAll() {
    try {
      // Apagar todos os dados armazenados no AsyncStorage
      await AsyncStorage.clear();
    } catch (error) {
      throw error;
    }
  }