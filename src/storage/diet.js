import {defineStore} from "pinia";

export const useDietStore = defineStore("diet", {
    state: () => ({
        diet: {}
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