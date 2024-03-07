<template>
  <label for="small-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small range</label>
  <input id="small-range" v-model="selected" type="range" min="10" step="5" max="120" class="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700">

  <p>
    Incluír recetas con un tiempo de preparación máximo de {{selected}} minutos
  </p>
</template>

<script>
export default {
  name: 'MaxTimeSelector',

  data() {
    return {
      selected: 30,
    }
  },
}
</script>