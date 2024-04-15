<template>
  <section v-if="configDietStore.IngredientsExcluded.length" class="space-y-2">
    <typography-variant variant="p">
      Ingredientes excluidos
    </typography-variant>
    <transition-group
      class="flex flex-row flex-wrap gap-x-4 gap-y-2"
      tag="ul"
      name="list"
    >
      <li
          class="cursor-pointer border-2 border-gray-200 px-4 py-2 rounded-full"
          @click="removeSelectIngredient(ingredient)"
          v-for="ingredient in configDietStore.IngredientsExcluded"
          v-bind:key="ingredient"
      >
        {{
          ingredient
        }}
        <span class="text-xs ms-2">❌</span>
      </li>
    </transition-group>
  </section>
  <p v-else>No hay ingredientes excluidos</p>

  <input
    type="text"
    v-model="search"
    id="input-search-ingredient"
    class="w-3/4 inset-0 block mx-auto border-2 border-gray-200 rounded-full h-10 px-6 py-2"
    placeholder="Busca un ingrediente"
  />

  <section>
    <transition-group
      class="h-48 overflow-y-scroll flex flex-row flex-wrap gap-x-4 gap-y-2"
      tag="ul"
      name="list"
    >
      <li
          class="hidden has-[span]:block cursor-pointer"
          @click="selectIngredient(ingredient.name)"
          v-for="ingredient in availableIngredients"
          :key="ingredient.id"
      >
      <span
          v-if="
            ingredient.name.toLowerCase().includes(search.toLowerCase()) &&
            !configDietStore.checkIfIngredientIsExcluded(ingredient.name.toLowerCase())
          "
          class="flex flex-row items-center justify-center border-2 border-gray-200 rounded-full px-4 py-2"
      >
        {{ ingredient.name }}
      </span>
      </li>
    </transition-group>
  </section>
</template>

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>

<script setup>
import { useConfigDietStore } from "@/storage/configDiet.js";
import TypographyVariant from "@/components/TypographyVariant.vue";
import axios from "axios";
import {onBeforeMount, ref} from "vue";

  const configDietStore = useConfigDietStore()
  const availableIngredients = ref([])
  const search = ref("")

onBeforeMount(() => {
  axios
    .get(import.meta.env.VITE_SERVICE_BASE_URL + "ingredients")
    .then((response) => {
      availableIngredients.value = response.data;
    })
    .catch(() => {
      console.log("No se han podido leer los ingredientes disponibles del servidor")
    });
})

  const selectIngredient = (ingredient) => {
    configDietStore.addIngredientExcluded(ingredient);
    search.value = "";
    document.getElementById("input-search-ingredient")?.focus();
}

  const removeSelectIngredient = (ingredientCode) => {
    configDietStore.removeIngredientExcluded(ingredientCode);
}
</script>
