<template>
  <ul class="flex flex-row flex-wrap gap-x-4 gap-y-2" v-if="selectedIngredients.length">
    <li class="bg-green-300 px-4 py-2 rounded-lg " @click="removeSelectIngredient(ingredient)" v-for="ingredient in selectedIngredients" v-bind:key="ingredient">
      {{ options.find(option => option.code === ingredient).name }} <span class="text-red-500">❌</span>
    </li>
  </ul>
  <p v-else>
    No hay ningún ingrediente exluido
  </p>
  <input type="text" v-model="search" placeholder="Busca el ingrediente">

  <section>
    <ul class="h-40 overflow-y-scroll">
      <li @click="selectIngredient(option.code)" v-for="option in options" v-bind:key="option.code">
        <p v-if="option.name.toLowerCase().includes(search.toLowerCase()) && !selectedIngredients.includes(option.code)">
          {{ option.name }}
        </p>
      </li>
    </ul>
  </section>
</template>
<script>

import {useConfigDietStore} from "@/storage/configDiet.js";

export default {
  name: 'ExcludeIngredient',

  data () {
    return {
      //TODO: Leer esto del servicio
      options: [
        {name: 'Manzana', code: 'manzana'},
        {name: 'Chocolate', code: 'chocolate'},
        {name: 'Pescado', code: 'pescado'},
        {name: 'Marisco', code: 'marisco'},
        {name: "Jamón", code: "jamon"},
        {name: "Cerdo", code: "cerdo"},
        {name: "Pollo", code: "pollo"},
        {name: "Ternera", code: "ternera"},
        {name: "Cordero", code: "cordero"},
        {name: "Conejo", code: "conejo"},
        {name: "Pavo", code: "pavo"},
        {name: "Pato", code: "pato"},
        {name: "Ganso", code: "ganso"},
      ],

      selectedIngredients: useConfigDietStore().getIngredientsExcluded(),

      search: ""
    }
  },
  methods: {
    selectIngredient(ingredientCode) {
      useConfigDietStore().addIngredientExcluded(ingredientCode)
    },

    removeSelectIngredient(ingredientCode){
      useConfigDietStore().removeIngredientExcluded(ingredientCode)
    }
  }
}
</script>