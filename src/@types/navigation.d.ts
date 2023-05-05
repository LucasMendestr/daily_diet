export declare global {
    namespace ReactNavigation {
      interface RootParamList {
        home: undefined;
        stats: { isGoodDiet: boolean;
          totalTrue: number;
          totalFalse: number;
          bestSequence: number; };
        newMeal: { mealId?: number};
        confirmationView: { isGoodDiet: boolean };
        mealView: { mealId: number; };
      }
    }
  }