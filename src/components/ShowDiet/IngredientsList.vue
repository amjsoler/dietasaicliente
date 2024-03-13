<template>
  <ul>
    <li class="list-inside list-disc" v-for="ingredient in ingredients" :key="ingredient">{{ `${ingredient.nombre} (${ingredient.cantidad} ${ingredient.unidad})`}}</li>
  </ul>
</template>

<script>
export default {
  name: 'IngredientsList',
  props: {
    ingredients: {
      type: Array,
      required: true
    }
  },
  mounted() {
    console.log(this.ingredients)
  }
}
</script>