import {defineStore} from "pinia";

export const useConfigDietStore = defineStore("configDiet", {
    state: () => ({
        MealsIncluded: [],
        Healthyness: "",
        MaxTime: 0,
        Difficulty: "",
        Allergies: [],
        FoodRestrictions: [],
        IngredientsExcluded: [],
    }),
    actions: {
        addMeal(meal) {
            this.MealsIncluded.push(meal);
        },

        removeMeal(meal) {
            this.MealsIncluded = this.MealsIncluded.filter((m) => m !== meal);
        }
    }
})