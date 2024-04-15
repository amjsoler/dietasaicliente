<template>
  <div class="relative space-y-6">
    <div class="flex justify-center">
      <input
        id="labels-range-input"
        type="range"
        :data-value="configDietStore.Difficulty"
        v-model="configDietStore.Difficulty"
        min="0"
        max="2"
        class="w-full md:w-3/4 h-2 appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
    <typography-variant variant="p">
      <span v-if="configDietStore.Difficulty == 0"> Recetas fáciles </span>

      <span v-else-if="configDietStore.Difficulty == 1"> Recetas normales </span>

      <span v-else> Recetas gourmet </span>
    </typography-variant>
  </div>
</template>
<script lang="ts" setup>
import { useConfigDietStore } from "@/storage/configDiet.js";
import TypographyVariant from "@/components/TypographyVariant.vue";

const configDietStore = useConfigDietStore()
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
