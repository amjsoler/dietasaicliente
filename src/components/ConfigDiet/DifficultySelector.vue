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
  height: 0.5rem;
}

/* slider thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  height: 32px;
  width: 32px;
  margin-top: -12px; /* Centers thumb on the track */
}

input[data-value="0"]::-webkit-slider-thumb {
  background: #fceade url("/icons/polluelo.png") no-repeat center center;
  background-size: contain;
}

input[data-value="1"]::-webkit-slider-thumb {
  background: #fceade url("/icons/sarten.png") no-repeat center;
  background-size: contain;
}

input[data-value="2"]::-webkit-slider-thumb {
  background: #fceade url("/icons/cocinero.png") no-repeat center;
  background-size: contain;
}

input[type="range"]:focus::-webkit-slider-thumb {
  outline: 3px solid #ff7b00;
  outline-offset: 0.125rem;
}

/*********** Firefox styles ***********/
/* slider track */
input[type="range"]::-moz-range-track {
  background-color: rgb(156 163 175 / 0.6);
  border-radius: 0.5rem;
  height: 0.5rem;
}

/* slider thumb */
input[type="range"]::-moz-range-thumb {
  border: none; /*Removes extra border that FF applies*/
  border-radius: 0.5rem;
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  height: 32px;
  width: 32px;
  margin-top: -12px; /* Centers thumb on the track */
}

input[type="range"]:focus::-moz-range-thumb {
  outline: 3px solid #ff7b00;
  outline-offset: 0.125rem;
}
</style>
