<template>
  <button @click="navigateToViewRecipe">{{ recipe.name }}</button>

</template>

<script>
  import { useDietStore } from "@/storage/diet.js";

  export default {
    name: 'ShowRecipe',
    props: {
      recipe: {
        type: Object,
        required: true
      }
    },

    methods: {
      navigateToViewRecipe() {
        useDietStore().viewingRecipe = this.recipe;
        this.$router.push({ name: 'ViewRecipe'});
      }
    }
  }
</script>