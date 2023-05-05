export type MealItem = {
    index? : number;
    hour: string;
    title: string;
    day: string;
    isGoodDiet: boolean;
    description: string;
  };
  
  export type MealDay = {
    day: string;
    meals: MealItem[];
  };