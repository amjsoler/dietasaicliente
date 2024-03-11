<template>
  <div class="relative mb-6 flex justify-center">
    <input type="range" min="0" max="2" @input="updateHealthyness" :value="healthyness" class="w-[90%] h-4 bg-gray-300 rounded-lg appearance-none cursor-pointer">
    <span class="text-3xl absolute start-0 -bottom-10">🍔</span>
    <span class="text-3xl absolute start-1/2 -ml-4 -bottom-10">⚖️</span>
    <span class="text-3xl absolute end-0 -bottom-10">💚</span>
  </div>
</template>

<script>
import {useConfigDietStore} from "@/storage/configDiet.js";

export default {
  name: 'RangePickerHealthy',

  data() {
    return {
      healthyness: useConfigDietStore().getHealthyness() ? useConfigDietStore().getHealthyness() : 1
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