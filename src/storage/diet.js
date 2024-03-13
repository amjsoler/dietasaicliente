import {defineStore} from "pinia";

export const useDietStore = defineStore("diet", {
    state: () => ({
        diet: JSON.parse(localStorage.getItem("diet")),
        viewingRecipe: JSON.parse(localStorage.getItem("viewingRecipe"))
    }),

    actions: {
        getDiet() {
            return this.diet
        },

        setDiet(diet) {
            this.diet = diet
        }
    }
})