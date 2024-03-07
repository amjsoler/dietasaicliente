<template>
  <div>
    <h2 class="text-2xl text-center">Personaliza tu dieta</h2>
    <p>Contesta unas cuantas preguntas para que te podamos personalizar la dieta lo máximo posible</p>
    <small>Si tienes dudas en cualquier apartado, puedes consultar el icono ℹ que encontrarás en los campos</small>

    <h3 class="font-semibold text-xl">¿Cuantas comidas quieres hacer al día?</h3>
    <div class="flex flex-row flex-wrap gap-x-4 gap-y-2 justify-between mx-3">
      <selector-comida>Desayuno</selector-comida>
      <selector-comida>Almuerzo</selector-comida>
      <selector-comida>Comida</selector-comida>
      <selector-comida>Merienda</selector-comida>
      <selector-comida>Cena</selector-comida>
    </div>

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
  </div>
</template>

<script>
import SelectorComida from "@/components/SelectorComida.vue";
import RangePickerHealthy from "@/components/RangePickerHealthy.vue";
import MaxTimeSelector from "@/components/MaxTimeSeletor.vue";
import DifficultySelector from "@/components/DifficultySelector.vue";
import AllergiesSelector from "@/components/AllergiesSelector.vue";

/**
 * Cantidad de saludable (poco, normal, mucho) ✅
 * Excluír algún alimento
 * Eres fan de algún alimento
 * Restricciones alimentarias (Vegetariano, vegano, dieta receta sin gluten, sin lácteos)
 * Alergias (cacahuete, frutos secos, mariscos, pescados, leche, huevo, trigo, soja) ✅
 * Preferencias de cocina (rápidas, para llevar, gourmet, saludable)
 * Dificultad (fácil, medio, difícil) ✅
 * Frecuencia de comida (desayuno, almuerzo, comida, merienda, cena) ✅
 * Tiempo de preparación máximo (en mins.) ✅
 *
 */
export default {
  name: 'ConfigDiet',
  components: {AllergiesSelector, DifficultySelector, MaxTimeSelector, RangePickerHealthy, SelectorComida}
}
</script>