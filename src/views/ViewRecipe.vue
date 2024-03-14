<template>
  <section class="space-y-6">
    <typography-variant variant="h2">
      {{ recipe.name }}
    </typography-variant>

    <ul class="flex flex-row flex-wrap space-y-2 gap-x-4">
      <li class="text-lg flex-grow">
        <div class="flex flex-col">
          <div class="flex flex-row justify-around">
            <span class="font-semibold">
              {{ `🔥 ${recipe.kcal} kcal ` }}
            </span>
            <span>
              {{
                ["🍔 Poco saludable", "⚖️ Equilibrada", "💚 Saludable"].at(
                  recipe.healthyness,
                )
              }}
            </span>
          </div>
          <span class="text-sm">
            {{
              `(proteínas: ${recipe.protein} g, hidratos: ${recipe.carbs} g, grasas: ${recipe.fat} g)`
            }}
          </span>
        </div>
      </li>
      <li class="text-lg">🕢 {{ recipe.preparation_time }} mins.</li>
      <li class="text-lg flex-grow">
        {{
          ["🐣 Receta fácil", "🍳 Dificultad media", "🧑‍🍳 Receta gourmet"].at(
            recipe.difficulty,
          )
        }}
      </li>
      <li class="text-lg flex-grow">
        Restricciones alimentarias:
        <span class="font-semibold">{{ recipe.food_restrictions }}</span>
      </li>
      <li class="text-lg flex-grow">
        Alérgenos:
        {{ recipe.allergens.length === 0 ? "No tiene" : recipe.allergens }}
      </li>
    </ul>

    <ingredients-list :ingredients="recipe.ingredients" />

    <preparation-steps :steps="recipe.steps" />
  </section>
</template>

<script>
import { useDietStore } from "../storage/diet.js";
import IngredientsList from "@/components/ShowDiet/IngredientsList.vue";
import PreparationSteps from "@/components/ShowDiet/PreparationSteps.vue";
import TypographyVariant from "@/components/TypographyVariant.vue";

export default {
  name: "ViewRecipe",
  components: { TypographyVariant, PreparationSteps, IngredientsList },
  methods: { useDietStore },

  computed: {
    recipe() {
      return this.useDietStore().viewingRecipe;
    },
  },
};
</script>
