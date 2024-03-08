<template>
  <div class="space-y-6">
    <header>
      <h2 class="text-2xl text-center font-semibold mb-3">Personaliza tu dieta</h2>
      <p class="mb-2">Contesta unas cuantas preguntas para que podamos hacer una dieta totalmente a tu medida</p>
    </header>

    <section class="space-y-2">
      <h3 class="font-semibold text-xl">¿Cuantas comidas quieres hacer al día?</h3>
      <div class="flex flex-row flex-wrap gap-x-4 gap-y-2 justify-between mx-3">
        <selector-comida literal="desayuno">Desayuno</selector-comida>
        <selector-comida literal="almuerzo">Almuerzo</selector-comida>
        <selector-comida literal="comida">Comida</selector-comida>
        <selector-comida literal="merienda">Merienda</selector-comida>
        <selector-comida literal="cena">Cena</selector-comida>
      </div>
    </section>

    <h3> ¿Como de saludables quieres las recetas?</h3>
    <range-picker-healthy class="w-3/4 mx-auto" />

    <h3>Vas justo de tiempo?</h3>
    <max-time-selector />

    <h3>¿No eres muy cocinillas? Ajusta la dificultad</h3>
    <div class="flex flex-row flex-wrap gap-x-4 gap-y-2 justify-between mx-3">
      <difficulty-selector />
    </div>

    <h3>¿Alguna alergia?</h3>
    <allergies-selector />

    <h3>¿Alguna restricción alimentaria?</h3>
    <food-restriction />

    <h3>¿Odias algún alimento?¿Lo excluimos de la dieta?</h3>
    <exclude-ingredient />

    <p class="flex justify-center">
      <button @click="navigateNextPage" class=" text-5xl">➡️</button>
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

/**
 * Cantidad de saludable (poco, normal, mucho) ✅
 * Excluír algún alimento ✅
 * Eres fan de algún alimento
 * Restricciones alimentarias (Vegetariano, vegano, dieta receta sin gluten, sin lácteos) ✅
 * Alergias (cacahuete, frutos secos, mariscos, pescados, leche, huevo, trigo, soja) ✅
 * Dificultad (fácil, medio, difícil) ✅
 * Frecuencia de comida (desayuno, almuerzo, comida, merienda, cena) ✅
 * Tiempo de preparación máximo (en mins.) ✅
 *
 */
export default {
  name: 'ConfigDiet',
  components: {
    ExcludeIngredient,
    FoodRestriction,
    AllergiesSelector, DifficultySelector, MaxTimeSelector, RangePickerHealthy, SelectorComida},
  methods: {
    navigateNextPage() {
      this.$router.push({name: 'ConfigMacros'})
    }
  }
}
</script>