<template>
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" class="sr-only peer" @input="toggleSelected" :checked="checked">
    <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500">
    </div>
    <span class="ms-2 font-medium text-gray-800">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import {useConfigDietStore} from "@/storage/configDiet.js";

export default {
  name: 'SelectorComida',

  props: ["literal"],

  data() {
    return {
      checked: useConfigDietStore().MealsIncluded.some(meal => meal === this.literal),
    }
  },

  methods: {
    toggleSelected() {
      if(this.checked) {
        useConfigDietStore().removeMeal(this.literal)
      } else {
        useConfigDietStore().addMeal(this.literal)
      }

      this.checked = !this.checked
    }
  }
}
</script>

<style scoped>
  div.selected {
    transition: all 0.2s ease-in-out;
  }

  div:not(.selected) {
    transition: all 0.2s ease-in-out;
  }

  span.opacity-0 {
    transition: all 0.1s ease-in-out;
  }

  span:not(.opacity-0) {
    transition: all 0.1s ease-in-out;
    transition-delay: .2s;
  }
  </style>
