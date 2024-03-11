<template>
  <div class="relative w-full">
    <input id="labels-range-input" type="range" @input="setDifficulty" v-model="difficulty" min="0" max="2" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
    <span class="text-xl absolute start-0 -bottom-6">🐣</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -ms-2 -bottom-6">🍳</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">🧑‍🍳</span>
  </div>
</template>
<script>
import {useConfigDietStore} from "@/storage/configDiet.js";

export default {
  name: 'DifficultySelector',

  data() {
    return {
      difficulty: useConfigDietStore().getDifficulty() ? useConfigDietStore().getDifficulty() : 1
    }
  },

  methods: {
    setDifficulty() {
      useConfigDietStore().setDifficulty(this.difficulty)
    },
  }
}
</script>