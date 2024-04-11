<template>
  <ul class="flex flex-row flex-wrap justify-center items-center gap-x-4 gap-y-2">
    <li @click="restriction.selected = !restriction.selected"
        class=" cursor-pointer w-40 border-2 border-primary-100 flex justify-center items-center h-10 rounded-lg"
        v-for="(restriction) in configDietStore.FoodRestrictions"
        :key="restriction.code">
      <custom-check :checked="restriction.selected" />
      <label class="ms-2">
        {{ restriction.name }}
      </label>
    </li>
  </ul>
</template>

<script lang="ts" setup>

import {useConfigDietStore} from "@/storage/configDiet.js";
import CustomCheck from "@/components/CustomCheck.vue";

const configDietStore = useConfigDietStore()

</script>