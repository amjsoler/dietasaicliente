<template>
  <div class="relative flex justify-center">
    <input
      id="default-range"
      v-model="configDietStore.width"
      type="range"
      min="20"
      max="120"
      class="w-full md:w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
    />
    <span class="text-sm absolute right-0 -top-12"> {{ configDietStore.width }}Kg </span>
  </div>
</template>

<script setup>
import { useConfigDietStore } from "@/storage/configDiet.js";

const configDietStore = useConfigDietStore()


</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #ff903d;
  cursor: pointer;
  border-radius: 50%;
}
</style>
