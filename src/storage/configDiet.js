import { defineStore } from "pinia";

export const useConfigDietStore = defineStore("configDiet", {
  state: () => ({
    MealsIncluded: localStorage.getItem("configDiet") ?? [
      "desayuno",
      "almuerzo",
      "comida",
      "merienda",
      "cena",
    ],
    Healthyness: localStorage.getItem("configDiet") ?? 1,
    MaxTime: localStorage.getItem("configDiet") ?? 30,
    Difficulty: localStorage.getItem("configDiet") ?? 1,
    Allergies: localStorage.getItem("configDiet") ?? [],
    FoodRestrictions: localStorage.getItem("configDiet") ?? [],
    IngredientsExcluded: localStorage.getItem("configDiet") ?? [],
    gender: localStorage.getItem("configDiet") ?? "female",
    height: localStorage.getItem("configDiet") ?? 130,
    width: localStorage.getItem("configDiet") ?? 50,
    age: localStorage.getItem("configDiet") ?? 20,
    weeklyActivity: localStorage.getItem("configDiet") ?? 1.55,
    dietObjective: localStorage.getItem("configDiet") ?? 0,
    kcal: localStorage.getItem("configDiet") ?? 0,
  }),
  actions: {
    restart() {
      useConfigDietStore().$state = null;
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

    setHealthyness(healthyness) {
      this.Healthyness = healthyness;
    },

    getMaxTime() {
      return this.MaxTime;
    },

    setMaxTime(maxTime) {
      this.MaxTime = maxTime;
    },

    getDifficulty() {
      return this.Difficulty;
    },

    setDifficulty(difficulty) {
      this.Difficulty = difficulty;
    },
  },
});
