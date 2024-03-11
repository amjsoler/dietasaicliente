<template>
  <div class="relative">
    <input id="default-range" v-model="width" type="range" min="20" max="120" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
    <span class="text-sm absolute right-0 -top-12">
    {{ width }}Kg
  </span>
  </div>
</template>

<script>
import {useConfigDietStore} from "@/storage/configDiet.js";

export default {
  name: 'WeightSelector',

  data() {
    return {
      width: useConfigDietStore().getWidth()
    }
  }
}
</script>

<style scoped>
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #ff903d;
  cursor: pointer;
  border-radius: 50%;
}
</style>
