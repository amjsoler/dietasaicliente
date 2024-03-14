import { defineStore } from "pinia";

export const useConfigDietStore = defineStore("configDiet", {
  state: () => ({
    MealsIncluded: localStorage.getItem("configDiet")
      ? JSON.parse(localStorage.getItem("configDiet")).MealsIncluded
      : ["desayuno", "almuerzo", "comida", "merienda", "cena"],
    Healthyness: localStorage.getItem("configDiet")
      ? JSON.parse(localStorage.getItem("configDiet")).Healthyness
      : 1,
    MaxTime: localStorage.getItem("configDiet")
      ? JSON.parse(localStorage.getItem("configDiet")).MaxTime
      : 30,
    Difficulty: localStorage.getItem("configDiet")
      ? JSON.parse(localStorage.getItem("configDiet")).Difficulty
      : 1,
    Allergies: localStorage.getItem("configDiet")
      ? JSON.parse(localStorage.getItem("configDiet")).Allergies
      : [],
    FoodRestrictions: localStorage.getItem("configDiet")
      ? JSON.parse(localStorage.getItem("configDiet")).FoodRestrictions
      : [],
    IngredientsExcluded: localStorage.getItem("configDiet")
      ? JSON.parse(localStorage.getItem("configDiet")).IngredientsExcluded
      : [],
    gender: localStorage.getItem("configDiet")
      ? JSON.parse(localStorage.getItem("configDiet")).gender
      : "female",
    height: localStorage.getItem("configDiet")
      ? JSON.parse(localStorage.getItem("configDiet")).height
      : 130,
    width: localStorage.getItem("configDiet")
      ? JSON.parse(localStorage.getItem("configDiet")).width
      : 50,
    age: localStorage.getItem("configDiet")
      ? JSON.parse(localStorage.getItem("configDiet")).age
      : 20,
    weeklyActivity: localStorage.getItem("configDiet")
      ? JSON.parse(localStorage.getItem("configDiet")).weeklyActivity
      : 1.55,
    dietObjective: localStorage.getItem("configDiet")
      ? JSON.parse(localStorage.getItem("configDiet")).dietObjective
      : 0,
    kcal: localStorage.getItem("configDiet")
      ? JSON.parse(localStorage.getItem("configDiet")).kcal
      : 0,
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

/*
{
    "nombre": "Ensalada de quinoa y aguacate",
    "ingredientes": [
      { "nombre": "Quinoa cocida", "cantidad": 1, "unidad": "taza" },
      { "nombre": "Aguacate en cubos", "cantidad": 1, "unidad": "unidad" },
      { "nombre": "Tomate en trozos", "cantidad": 1, "unidad": "unidad" },
      { "nombre": "Cebolla roja picada", "cantidad": 0.5, "unidad": "taza" },
      { "nombre": "Cilantro fresco picado", "cantidad": 2, "unidad": "cucharadas" },
      { "nombre": "Jugo de limón", "cantidad": 2, "unidad": "cucharadas" },
      { "nombre": "Aceite de oliva", "cantidad": 1, "unidad": "cucharada" },
      { "nombre": "Sal", "cantidad": 0.5, "unidad": "cucharadita" },
      { "nombre": "Pimienta", "cantidad": 0.25, "unidad": "cucharadita" }
    ],
    "pasos": ["Cocina la quinoa...", "Corta el aguacate...", "..."],
    "kcal": 300,
    "proteinas": 8,
    "hidratos": 25,
    "grasas": 18,
    "saludable": 2,
    "tiempo_preparacion_minutos": 15,
    "dificultad": 1,
    "alergenos": [cacahuete, frutossecos, mariscos, pescados, leche, huevos, trigo, soja],
    "restricciones_alimentarias": ["vegetariana", "vegana", "glutenfree", "lacteosfree"],
    "momento_del_dia": [desayuno, "almuerzo", "comida", merienda, cena]
  },
 */
