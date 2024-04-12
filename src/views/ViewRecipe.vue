<template>
  <section class="space-y-6">
    <typography-variant variant="h2">
      {{ dietStore.viewingRecipe.name }}
    </typography-variant>

    <ul class="flex flex-row flex-wrap space-y-2 gap-x-4">
      <li class="text-lg flex-grow">
        <div class="flex flex-col">
          <div class="flex flex-row justify-around">
            <span class="font-semibold">
              {{ `🔥 ${dietStore.viewingRecipe.kcal} kcal ` }}
            </span>
            <span>
              {{
                ["🍔 Poco saludable", "⚖️ Equilibrada", "💚 Saludable"].at(
                  dietStore.viewingRecipe.healthyness,
                )
              }}
            </span>
          </div>
          <div class="flex flex-row justify-center">
            <span class="text-sm">
            {{
                `(proteínas: ${dietStore.viewingRecipe.protein} g, hidratos: ${dietStore.viewingRecipe.carbs} g, grasas: ${dietStore.viewingRecipe.fat} g)`
              }}
          </span>
          </div>
        </div>
      </li>
      <li class="flex-grow">
        <div class="flex flex-row justify-around">
          <span class="text-lg">🕢 {{ dietStore.viewingRecipe.preparation_time }} mins.</span>
          <span class="text-lg">
            {{
              ["🐣 Receta fácil", "🍳 Dificultad media", "🧑‍🍳 Receta gourmet"].at(
                dietStore.viewingRecipe.difficulty,
              )
            }}
          </span>
        </div>
      </li>
      <li class="text-lg flex-grow">
        Restricciones alimentarias:
        <span v-if="foodRestrictions.length === 0">Ninguna</span>
        <span v-else v-for="restriction in foodRestrictions"
              :key="restriction" class="font-semibold"
        >
          {{ restriction }}
          <span v-if="foodRestrictions.indexOf(restriction) !== foodRestrictions.length - 1">, </span>
        </span>
      </li>
      <li class="text-lg flex-grow">
        Alérgenos:
        <span v-if="allergens.length === 0">Ninguno</span>
        <span v-else v-for="allergen in allergens"
              :key="allergen"
        >
          {{ dietStore.viewingRecipe.allergens.length === 0 ? "No tiene" : dietStore.viewingRecipe.allergens }}
          <span v-if="allergens.indexOf(allergen) !== allergens.length - 1">, </span>
        </span>
      </li>
    </ul>

    <ingredients-list :ingredients="ingredients" />

    <preparation-steps :steps="steps" />
  </section>
</template>

<script setup>
import IngredientsList from "@/components/ShowDiet/IngredientsList.vue";
import PreparationSteps from "@/components/ShowDiet/PreparationSteps.vue";
import TypographyVariant from "@/components/TypographyVariant.vue";
import { useDietStore } from "@/storage/diet.js";

const dietStore = useDietStore()
const foodRestrictions = JSON.parse(dietStore.viewingRecipe.food_restrictions)
const allergens = JSON.parse(dietStore.viewingRecipe.allergens)
const ingredients = JSON.parse(dietStore.viewingRecipe.ingredients)
const steps = JSON.parse(dietStore.viewingRecipe.steps)
</script>
