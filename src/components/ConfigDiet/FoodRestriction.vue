<template>
  <ul class="flex flex-row flex-wrap justify-center items-center gap-x-4 gap-y-2">
    <li @click="toggleFoodRestrictions(option.code)" class="w-40 flex justify-center items-center h-10 rounded-lg" v-for="(option) in foodRestrictions" v-bind:key="option.code" :class="{'bg-green-200': selectedFoodRestrictions.includes(option.code)}">
      <label>
        {{ option.name }}
      </label>
    </li>
  </ul>
</template>

<script>

import {useConfigDietStore} from "@/storage/configDiet.js";

export default {
  name: 'FoodRestriction',

  data() {
    return {
      foodRestrictions: [
        { name: 'Recetas vegetariana', code: "vegetariana" },
        { name: 'Recetas Vegana', code: "vegana" },
        { name: 'Recetas sin gluten', code: "gluten" },
        { name: 'Recetas sin lácteos', code: "lacteos" }
      ],

      selectedFoodRestrictions: useConfigDietStore().getFoodRestrictions() ? useConfigDietStore().getFoodRestrictions() : []
    }
  },

  methods: {
    toggleFoodRestrictions(foodRestrictionCode){
      if(this.selectedFoodRestrictions.includes(foodRestrictionCode)){
        useConfigDietStore().removeFoodRestriction(foodRestrictionCode)
      } else {
        useConfigDietStore().addFoodRestriction(foodRestrictionCode)
      }
    }
  }
}
</script>