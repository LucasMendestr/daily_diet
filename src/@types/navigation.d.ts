export declare global {
    namespace ReactNavigation {
      interface RootParamList {
        home: undefined;
        stats: { isGoodDiet: boolean; };
        newMeal: { mealId?: number};
        confirmationView: { isGoodDiet: boolean; };
        mealView: { mealId: number; };
      }
    }
  }