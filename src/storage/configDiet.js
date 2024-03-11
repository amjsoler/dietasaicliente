import {defineStore} from "pinia";

export const useConfigDietStore = defineStore("configDiet", {
    state: () => ({
        MealsIncluded: ["desayuno", "almuerzo", "comida", "merienda", "cena"],
        Healthyness: 1,
        MaxTime: 30,
        Difficulty: 1,
        Allergies: [],
        FoodRestrictions: [],
        IngredientsExcluded: [],
        gender: "female",
        height: 130,
        width: 50,
        age: 30
    }),
    actions: {
        getAge() {
            return this.age
        },

        setAge(age) {
            this.age = age
        },

        getWidth() {
            return this.width
        },

        setWidth(width) {
            this.width = width
        },

        getHeight() {
            return this.height
        },

        setHeight(height) {
            this.height = height
        },

        getGender() {
            return this.gender
        },

        toggleGender() {
            if(this.gender === "female")
                this.gender = "male"
            else{
                this.gender = "female"
            }
        },

        getIngredientsExcluded() {
            return this.IngredientsExcluded;
        },

        addIngredientExcluded(ingredient) {
            this.IngredientsExcluded.push(ingredient);
        },

        removeIngredientExcluded(ingredient) {
            this.IngredientsExcluded.splice(this.IngredientsExcluded.indexOf(ingredient), 1);
        },

        getFoodRestrictions() {
            return this.FoodRestrictions;
        },

        addFoodRestriction(foodRestriction) {
            this.FoodRestrictions.push(foodRestriction);
        },

        removeFoodRestriction(foodRestriction) {
            this.FoodRestrictions.splice(this.FoodRestrictions.indexOf(foodRestriction), 1);
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
        }
    }
})