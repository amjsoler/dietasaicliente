<template>
  <div class="space-y-8">
    <header class="space-y-2">
      <typography-variant variant="h2">Personaliza tu dieta</typography-variant>
      <typography-variant variant="p">
        A continuación, podrás personalizar la dieta tanto como quieras
      </typography-variant>
    </header>

    <section class="space-y-2">
      <typography-variant variant="h3">
        ¿Cuantas comidas quieres hacer al día?
      </typography-variant>
      <div class="flex flex-col gap-y-2">
        <selector-comida literal="desayuno">Desayuno</selector-comida>
        <selector-comida literal="almuerzo">Almuerzo</selector-comida>
        <selector-comida literal="comida">Comida</selector-comida>
        <selector-comida literal="merienda">Merienda</selector-comida>
        <selector-comida literal="cena">Cena</selector-comida>
      </div>
    </section>

    <section class="space-y-6">
      <typography-variant variant="h3">
        Recetas saludables?
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
        ¿Restringimos la dificultad de las recetas?
      </typography-variant>
      <difficulty-selector />
    </section>

    <section class="space-y-6">
      <typography-variant variant="h3"> ¿Alguna alergia? </typography-variant>
      <allergies-selector />
    </section>

    <section class="space-y-6">
      <typography-variant variant="h3">
        ¿Tienes alguna restricción alimentaria?
      </typography-variant>
      <food-restriction />
    </section>

    <section class="space-y-6">
      <typography-variant variant="h3">
        ¿Algún alimento que no te guste?
      </typography-variant>
      <exclude-ingredient />
    </section>

    <p class="flex justify-center">
      <button @click="navigateNextPage" class="text-4xl">➡️</button>
    </p>
  </div>
</template>

<script>
import SelectorComida from "@/components/ConfigDiet/SelectorComida.vue";
import RangePickerHealthy from "@/components/ConfigDiet/RangePickerHealthy.vue";
import MaxTimeSelector from "@/components/ConfigDiet/MaxTimeSeletor.vue";
import DifficultySelector from "@/components/ConfigDiet/DifficultySelector.vue";
import AllergiesSelector from "@/components/ConfigDiet/AllergiesSelector.vue";
import FoodRestriction from "@/components/ConfigDiet/FoodRestriction.vue";
import ExcludeIngredient from "@/components/ConfigDiet/ExcludeIngredient.vue";
import TypographyVariant from "@/components/TypographyVariant.vue";
import router from "@/router/index.js";

/**
 * Cantidad de saludable (poco, normal, mucho) ✅
 * Excluír algún alimento ✅
 * Eres fan de algún alimento ❌
 * Restricciones alimentarias (Vegetariano, vegano, dieta receta sin gluten, sin lácteos) ✅
 * Alergias (cacahuete, frutos secos, mariscos, pescados, leche, huevo, trigo, soja) ✅
 * Dificultad (fácil, medio, difícil) ✅
 * Frecuencia de comida (desayuno, almuerzo, comida, merienda, cena) ✅
 * Tiempo de preparación máximo (en mins.) ✅
 *
 */
export default {
  name: "ConfigDiet",
  components: {
    TypographyVariant,
    ExcludeIngredient,
    FoodRestriction,
    AllergiesSelector,
    DifficultySelector,
    MaxTimeSelector,
    RangePickerHealthy,
    SelectorComida,
  },
  methods: {
    router() {
      return router;
    },
    navigateNextPage() {
      this.$router.push({ name: "ConfigMacros" });
    },
  },
};
</script>
