import { defineStore } from "pinia";

export const useDietStore = defineStore("dietStore", {
  state: () => ({
    diet: JSON.parse(localStorage.getItem("diet")),
    viewingRecipe: JSON.parse(localStorage.getItem("viewingRecipe")),
    viewingDay: 0,
    weekDiet: JSON.parse(localStorage.getItem("weekDiet")),
  }),

  actions: {
    getDiet() {
      return this.diet;
    },

    setDiet(diet) {
      this.diet = diet;
    },
  },
});
