<template>
  <section class="space-y-2">
    <typography-variant variant="h3" class="capitalize">
      {{ mealName }}
    </typography-variant>
    <show-recipe
      v-for="recipe in mealMoment"
      :recipe="recipe"
      :key="recipe.id"
    />
  </section>
</template>

<script>
import ShowRecipe from "@/components/ShowDiet/ShowRecipe.vue";
import TypographyVariant from "@/components/TypographyVariant.vue";

export default {
  name: "MealMoment",
  components: { TypographyVariant, ShowRecipe },
  props: {
    mealMoment: {
      type: Object,
      required: true,
    },
    mealName: {
      type: String,
      required: true,
    },
  },
};
</script>
