<template>
  <ul class="flex flex-row flex-wrap justify-center items-center gap-x-4 gap-y-2">
    <li @click="toggleAllergy(option.code)" class="cursor-pointer flex items-center px-4 py-2 rounded-lg border-2 border-primary-100" v-for="(option) in options" v-bind:key="option.code">
      <custom-check :checked="selected.includes(option.code)"></custom-check>
      <label class="ms-2">
        {{ option.literal }} {{ option.name }}
      </label>
    </li>
  </ul>
</template>

<script>

import {useConfigDietStore} from "@/storage/configDiet.js";
import CustomCheck from "@/components/CustomCheck.vue";

export default {
  components: {CustomCheck},
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