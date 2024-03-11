<template>
  <input id="small-range" v-model="actualTime" @input="updateMaxTime" type="range" min="10" step="5" max="120" class="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700">

  <p>
    Tiempo de preparación máximo: {{actualTime}} minutos
  </p>
</template>

<script>
import {useConfigDietStore} from "@/storage/configDiet.js";

export default {
  name: 'MaxTimeSelector',

  data() {
    return {
      actualTime: useConfigDietStore().getMaxTime() ? useConfigDietStore().getMaxTime() : 30
    }
  },

  methods: {
    updateMaxTime() {
      useConfigDietStore().setMaxTime(this.actualTime)
    }
  }
}
</script>