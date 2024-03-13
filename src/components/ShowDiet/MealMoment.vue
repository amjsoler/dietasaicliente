<template>
  <h1 class="text-2xl font-bold capitalize">
    {{ mealName }}
  </h1>
  <show-recipe v-for="recipe in mealMoment" :recipe="recipe" :key="recipe.id" />
</template>

<script>
import ShowRecipe from "@/components/ShowDiet/ShowRecipe.vue";

export default {
  name: 'MealMoment',
  components: { ShowRecipe },
  props: {
    mealMoment: {
      type: Object,
      required: true
    },
    mealName: {
      type: String,
      required: true
    }
  }
}
</script>