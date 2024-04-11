<template>
  <div class="relative flex justify-center">
    <input
      type="range"
      min="50"
      max="220"
      v-model="configDietStore.height"
      class="w-full md:w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
    />
    <span class="text-sm absolute right-0 -top-12"> {{ configDietStore.height }}cm </span>
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
