<template>
  <h1 class="text-2xl">{{recipe.name}}</h1>

  <ingredients-list :ingredients="recipe.ingredients" />

  <ul>
    <li class="text-lg">⏱{{recipe.preparation_time}} mins</li>
    <li class="text-lg">⏱{{recipe.healthyness}}</li>
    <li class="text-lg">⏱{{recipe.foodRestrictions}}</li>
    <li class="text-lg">⏱{{recipe.allergens}}</li>
    <li class="text-lg">{{ `🔥 ${recipe.kcal} kcal (prot: ${recipe.protein} g, carbs: ${recipe.carbs} g, grasas: ${recipe.fat} g)` }}</li>
    <li class="text-lg">⏱{{recipe.preparation_time}} mins</li>
  </ul>

  <preparation-steps :steps="recipe.steps" />
</template>

<script>
import { useDietStore } from "../storage/diet.js";
import IngredientsList from "@/components/ShowDiet/IngredientsList.vue";
import PreparationSteps from "@/components/ShowDiet/PreparationSteps.vue";

export default {
  name: 'ViewRecipe',
  components: { PreparationSteps, IngredientsList },
  methods: { useDietStore },

  computed: {
    recipe() {
      return this.useDietStore().viewingRecipe
    }
  }
}
</script>