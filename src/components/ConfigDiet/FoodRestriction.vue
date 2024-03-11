<template>
  <ul class="flex flex-row flex-wrap justify-center items-center gap-x-4 gap-y-2">
    <li @click="toggleFoodRestrictions(option.code)" class=" cursor-pointer w-40 border-2 border-primary-100 flex justify-center items-center h-10 rounded-lg" v-for="(option) in foodRestrictions" v-bind:key="option.code">
      <custom-check :checked="selectedFoodRestrictions.includes(option.code)" />
      <label class="ms-2">
        {{ option.name }}
      </label>
    </li>
  </ul>
</template>

<script>

import {useConfigDietStore} from "@/storage/configDiet.js";
import CustomCheck from "@/components/CustomCheck.vue";

export default {
  name: 'FoodRestriction',
  components: {CustomCheck},

  data() {
    return {
      foodRestrictions: [
        { name: 'Vegetarianas', code: "vegetariana" },
        { name: 'Veganas', code: "vegana" },
        { name: 'Sin gluten', code: "gluten" },
        { name: 'Sin lácteos', code: "lacteos" }
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