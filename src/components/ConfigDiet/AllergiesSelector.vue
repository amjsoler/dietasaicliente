<template>
  <ul class="flex flex-row flex-wrap justify-center items-center gap-x-4 gap-y-2">
    <li @click="toggleAllergy(option.code)" class="w-40 flex justify-center items-center h-10 rounded-lg" v-for="(option) in options" v-bind:key="option.code" :class="{'bg-green-200': selected.includes(option.code)}">
      <label>
        {{ option.literal }} {{ option.name }}
      </label>
    </li>
  </ul>
</template>

<script>

import {useConfigDietStore} from "@/storage/configDiet.js";

export default {
  data () {
    return {
      options: [
        {name: '🥜', literal:'Cacahuete', code: 'cacahuete'},
        {name: '🌰', literal: 'Frutos secos', code: 'frutossecos'},
        {name: '🦀', literal: 'Mariscos', code: 'mariscos'},
        { name: '🐟', literal: 'Pescados', code: 'pescados' },
        { name: '🥛', literal: 'Leche', code: 'leche' },
        { name: '🥚', literal: 'Huevo', code: 'huevos' },
        { name: '🌾', literal: 'Trigo', code: 'trigo' },
        { name: '🫛', literal: 'Soja', code: 'soja' }
      ],

      selected: useConfigDietStore().getAllergies() ? useConfigDietStore().getAllergies() : []
    }
  },
  methods: {
    toggleAllergy(allergyCode){
      if(this.selected.includes(allergyCode)){
        useConfigDietStore().removeAllergy(allergyCode)
      } else {
        useConfigDietStore().addAllergy(allergyCode)
      }
    }
  }
}
</script>