<template>
  <ul class="flex flex-row flex-wrap justify-center items-center gap-x-4 gap-y-2">
    <li @click="allergy.selected = !allergy.selected"
        class="cursor-pointer flex items-center px-4 py-2 rounded-lg border-2 border-primary-100"
        v-for="(allergy) in configDietStore.Allergies"
        :key="allergy.code">
      <custom-check :checked="allergy.selected"></custom-check>
      <label class="ms-2">
        {{ allergy.literal }} {{ allergy.name }}
      </label>
    </li>
  </ul>
</template>

<script lang="ts" setup>

import {useConfigDietStore} from "@/storage/configDiet.js";
import CustomCheck from "@/components/CustomCheck.vue";

const configDietStore = useConfigDietStore()
</script>