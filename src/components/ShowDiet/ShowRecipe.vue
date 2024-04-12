<template>
  <article
    @click="navigateToViewRecipe"
    class="px-4 py-2 rounded-lg shadow-md space-y-2 bg-primary-500/30 cursor-pointer"
  >
    <typography-variant variant="h4" class="capitalize">
      {{ recipe.name }}
    </typography-variant>
    <div class="flex flex-col">
      <div class="flex flex-row justify-around">
        <span class="font-semibold">
          {{ `🔥 ${recipe.kcal} kcal ` }}
        </span>
        <span> 🕢 {{ recipe.preparation_time }} </span>
        <span>
          {{
            ["🍔 Poco saludable", "⚖️ Equilibrada", "💚 Saludable"].at(
              recipe.healthyness,
            )
          }}
        </span>
      </div>
      <span class="text-sm text-center">
        {{
          `(proteínas: ${recipe.protein} g, hidratos: ${recipe.carbs} g, grasas: ${recipe.fat} g)`
        }}
      </span>
    </div>
  </article>
</template>

<script setup>
import { useDietStore } from "@/storage/diet.js";
import TypographyVariant from "@/components/TypographyVariant.vue";
import router from "@/router/index.js";

const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
})

const dietStore = useDietStore()

const navigateToViewRecipe = () => {
  dietStore.viewingRecipe = props.recipe
  router.push({ name: "ViewRecipe" })
}
</script>
