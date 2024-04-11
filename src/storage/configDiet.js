import { defineStore } from "pinia";

export const useConfigDietStore = defineStore("configDiet", {
  state: () => ({

    MealsIncluded: [
      "desayuno",
      "almuerzo",
      "comida",
      "merienda",
      "cena",
    ],
    Healthyness: 1,
    MaxTime: 30,
    Difficulty: 1,
    Allergies:  [
      {name: '🥜', literal:'Cacahuete', code: 'cacahuete', selected: false},
      {name: '🌰', literal: 'Frutos secos', code: 'frutossecos', selected: false},
      {name: '🦀', literal: 'Mariscos', code: 'mariscos', selected: false},
      { name: '🐟', literal: 'Pescados', code: 'pescados', selected: false },
      { name: '🥛', literal: 'Leche', code: 'leche', selected: false },
      { name: '🥚', literal: 'Huevo', code: 'huevos', selected: false },
      { name: '🌾', literal: 'Trigo', code: 'trigo', selected: false },
      { name: '🫛', literal: 'Soja', code: 'soja', selected: false }
    ],
    FoodRestrictions: [
      { name: 'Vegetarianas', code: "vegetariana", selected:false },
      { name: 'Veganas', code: "vegana", selected:false },
      { name: 'Sin gluten', code: "gluten", selected:false },
      { name: 'Sin lácteos', code: "lacteos", selected:false }
    ],
    IngredientsExcluded: [],
    gender: "female",
    height: 130,
    width: 50,
    age: 20,
    weeklyActivity: {
      selected: 1.55,
      availableActivities: [
        { name: "Sedentario", multiplier: 1.2 },
        { name: "Levemente Activo", multiplier: 1.375 },
        { name: "Moderadamente activo", multiplier: 1.55 },
        { name: "Muy Activo", multiplier: 1.725 },
        { name: "Extremadamente activo", multiplier: 1.9 },
      ]
    },
    dietObjective: {
      selected: 0,
      availableOptions: [
        { name: "Bajar de peso", value: -350 },
        { name: "Mantenerse", value: 0 },
        { name: "Subir de peso", value: 350 },
      ]
    },
    kcal: 0,
}),
  getters: {
    checkIfMealIsIncluded: (state) => {
      return (meal) => state.MealsIncluded.some((auxMeal) => auxMeal === meal)
    },

    checkIfIngredientIsExcluded: (state) => {
      return (ingredient) => state.IngredientsExcluded.some((auxIngredient) => auxIngredient.toLowerCase() === ingredient.toLowerCase())
    }
  },

  actions: {
    toggleMeal(meal) {
        if (this.MealsIncluded.includes(meal)) {
            this.removeMeal(meal);
        } else {
            this.addMeal(meal);
        }
    },

    getDietObjective() {
      return this.dietObjective;
    },

    setDietObjective(dietObjective) {
      this.dietObjective = dietObjective;
    },

    getWeeklyActivity() {
      return this.weeklyActivity;
    },

    setWeeklyActivity(weeklyActivity) {
      this.weeklyActivity = weeklyActivity;
    },

    getAge() {
      return this.age;
    },

    getWidth() {
      return this.width;
    },

    getHeight() {
      return this.height;
    },

    getGender() {
      return this.gender;
    },

    toggleGender() {
      if (this.gender === "female") this.gender = "male";
      else {
        this.gender = "female";
      }
    },

    getIngredientsExcluded() {
      return this.IngredientsExcluded;
    },

    addIngredientExcluded(ingredient) {
      this.IngredientsExcluded.push(ingredient);
    },

    removeIngredientExcluded(ingredient) {
      this.IngredientsExcluded.splice(
        this.IngredientsExcluded.indexOf(ingredient),
        1,
      );
    },

    getFoodRestrictions() {
      return this.FoodRestrictions;
    },

    getAllergies() {
      return this.Allergies;
    },

    addMeal(meal) {
      this.MealsIncluded.push(meal);
    },

    removeMeal(meal) {
      this.MealsIncluded = this.MealsIncluded.filter((m) => m !== meal);
    },

    getHealthyness() {
      return this.Healthyness;
    },


    getMaxTime() {
      return this.MaxTime;
    },

    getDifficulty() {
      return this.Difficulty;
    },
  },
});
