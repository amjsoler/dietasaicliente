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
    weeklyActivity: 1.55,
    dietObjective: 0,
    kcal: 0,
}),
  getters: {
    checkIfMealIsIncluded: (state) => {
      return (meal) => state.MealsIncluded.some((auxMeal) => auxMeal === meal)
    },
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

    setAge(age) {
      this.age = age;
    },

    getWidth() {
      return this.width;
    },

    setWidth(width) {
      this.width = width;
    },

    getHeight() {
      return this.height;
    },

    setHeight(height) {
      this.height = height;
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

    addFoodRestriction(foodRestriction) {
      this.FoodRestrictions.push(foodRestriction);
    },

    removeFoodRestriction(foodRestriction) {
      this.FoodRestrictions.splice(
        this.FoodRestrictions.indexOf(foodRestriction),
        1,
      );
    },

    addAllergy(allergy) {
      this.Allergies.push(allergy);
    },

    removeAllergy(allergy) {
      this.Allergies.splice(this.Allergies.indexOf(allergy), 1);
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
