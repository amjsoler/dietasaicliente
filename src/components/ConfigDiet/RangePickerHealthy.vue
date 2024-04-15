<template>
  <div class="relative flex justify-center">
    <input
      type="range"
      min="0"
      max="2"
      v-model="configDietStore.Healthyness"
      class="w-full md:w-3/4 h-4 cursor-pointer"
    />
  </div>
  <p>Incluír recetas <b>{{getRecipeTypeSelected}}</b></p>
</template>

<script lang="ts" setup>
import { useConfigDietStore } from "@/storage/configDiet.js";
import {computed} from "vue";

const configDietStore = useConfigDietStore()

const getRecipeTypeSelected = computed(() => {
  switch (configDietStore.Healthyness) {
    case "1":
      return "saludables y equilibradas"
    case "2":
      return "saludables"
    default:
      return "de todo tipo"
  }
})
</script>

<style scoped>
/*********** Baseline, reset styles ***********/
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
}

/* Removes default focus */
input[type="range"]:focus {
  outline: none;
}

/******** Chrome, Safari, Opera and Edge Chromium styles ********/
/* slider track */
input[type="range"]::-webkit-slider-runnable-track {
  background-color: rgb(156 163 175 / 0.2);
  border-radius: 0.5rem;
  height: 0.25rem;
}

/* slider thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  height: 12px;
  width: 32px;
  margin-top: -4px; /* Centers thumb on the track */
  border-radius: 5px;
  background-color: #09c865;
  box-shadow: lightgray 0px 1px 3px;
}

/*********** Firefox styles ***********/
/* slider track */
input[type="range"]::-moz-range-track {
  background-color: rgb(156 163 175 / 0.6);
  border-radius: 0.5rem;
  height: 0.25rem;
}

/* slider thumb */
input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  height: 12px;
  width: 32px;
  margin-top: -4px; /* Centers thumb on the track */
  border-radius: 5px;
  background-color: #09c865;
  box-shadow: lightgray 0px 1px 3px;
}
</style>
