import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ConfirmationView } from '@screens/ConfirmationView';
import { Home } from '@screens/Home';
import { MealView } from '@screens/MealView';
import { NewMeal } from '@screens/NewMeal';
import { Stats } from '@screens/Stats';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen 
        name="home"
        component={Home}
      />
      <Screen 
        name="stats"
        component={Stats}
      />
      <Screen 
        name="newMeal"
        component={NewMeal}
      />
      <Screen 
        name="confirmationView"
        component={ConfirmationView}
      />
      <Screen
        name="mealView"
        component={MealView}
      />      
    </Navigator>
  );
}