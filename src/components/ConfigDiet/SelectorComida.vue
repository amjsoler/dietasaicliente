<template>
  <article @click="toggleSelected" class="capitalize text-lg cursor-pointer flex flex-row gap-x-4 items-center px-4 py-2 border-2 rounded-lg border-primary-100">
    <custom-check :checked="checked" />
    {{ literal }}
  </article>
</template>

<script>
import {useConfigDietStore} from "@/storage/configDiet.js";
import CustomCheck from "@/components/CustomCheck.vue";

export default {
  name: 'SelectorComida',
  components: {CustomCheck},

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
