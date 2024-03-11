<template>
  <div class="relative flex justify-center">
    <input type="range" min="0" max="2" :data-value="healthyness" @input="updateHealthyness" :value="healthyness" class="w-[100%] h-4 cursor-pointer">
  </div>
</template>

<script>
import {useConfigDietStore} from "@/storage/configDiet.js";

export default {
  name: 'RangePickerHealthy',

  data() {
    return {
      healthyness: useConfigDietStore().getHealthyness()
    }
  },

  methods: {
    updateHealthyness(event) {
      this.healthyness = event.target.value;
      useConfigDietStore().setHealthyness(this.healthyness);
    }
  }
}
</script>

<style scoped>
/*********** Baseline, reset styles ***********/
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 25rem;
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
  background: #FFF url('/icons/hamburguesa.png') no-repeat center center;
  background-size: contain;
}

input[data-value="1"]::-webkit-slider-thumb {
  background: #FFF url('/icons/balanza.png') no-repeat center;
  background-size: contain;
}

input[data-value="2"]::-webkit-slider-thumb {
  background: #FFF url('/icons/corazon.png') no-repeat center;
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

input[type="range"]:focus::-moz-range-thumb{
  outline: 3px solid #ff7b00;
  outline-offset: 0.125rem;
}
</style>