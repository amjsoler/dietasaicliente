<template>
  <div class="space-y-8">
    <header class="space-y-2">
      <typography-variant class="text-center" variant="h2">Personaliza tu dieta</typography-variant>
    </header>

    <section class="space-y-2">
      <typography-variant variant="h3">
        ¿Cuantas comidas quieres hacer al día?
      </typography-variant>
      <div class="flex flex-col md:flex-row flex-wrap gap-x-4 gap-y-2">
        <selector-comida literal="desayuno">Desayuno</selector-comida>
        <selector-comida literal="almuerzo">Almuerzo</selector-comida>
        <selector-comida literal="comida">Comida</selector-comida>
        <selector-comida literal="merienda">Merienda</selector-comida>
        <selector-comida literal="cena">Cena</selector-comida>
      </div>
    </section>
    <section class="space-y-6">
      <typography-variant variant="h3">
        ¿Recetas saludables?
      </typography-variant>
      <range-picker-healthy />
    </section>

    <section class="space-y-6">
      <typography-variant variant="h3">
        ¿Vas justo de tiempo?
      </typography-variant>
      <max-time-selector />
    </section>

    <section class="space-y-6">
      <typography-variant variant="h3">
        ¿Limitamos la dificultad de las recetas?
      </typography-variant>
      <difficulty-selector />
    </section>

    <section class="space-y-6">
      <typography-variant variant="h3"> ¿Alguna alergia? </typography-variant>
      <allergies-selector />
    </section>

    <section class="space-y-6">
      <typography-variant variant="h3">
        ¿Restricciones alimentarias?
      </typography-variant>
      <food-restriction />
    </section>

    <section class="space-y-6">
      <typography-variant variant="h3">
        ¿Algún alimento que no te guste?
      </typography-variant>
      <exclude-ingredient />
    </section>

    <p class="flex justify-center items-center">
      <button @click="router.push({name:'ConfigMacros'})" class="text-xl font-bold bg-primary-500 text-white px-4 py-2 rounded-full ">Siguiente</button>
    </p>
  </div>
</template>

<script setup>
import SelectorComida from "@/components/ConfigDiet/SelectorComida.vue";
import TypographyVariant from "@/components/TypographyVariant.vue";
import RangePickerHealthy from "@/components/ConfigDiet/RangePickerHealthy.vue";
import MaxTimeSelector from "@/components/ConfigDiet/MaxTimeSeletor.vue";
import DifficultySelector from "@/components/ConfigDiet/DifficultySelector.vue";
import AllergiesSelector from "@/components/ConfigDiet/AllergiesSelector.vue";
import FoodRestriction from "@/components/ConfigDiet/FoodRestriction.vue";
import ExcludeIngredient from "@/components/ConfigDiet/ExcludeIngredient.vue";
import router from "@/router/index.js";
</script>
