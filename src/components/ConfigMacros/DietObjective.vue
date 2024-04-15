<template>
  <section class="w-full md:w-3/4 mx-auto">
    <select v-model="configDietStore.dietObjective.selected" class="bg-gray-200 rounded-full px-8 py-2 w-full">
      <option
        class="border-2 border-primary-400 rounded-lg"
        v-for="objective in configDietStore.dietObjective.availableOptions"
        :key="objective.value"
        :value="objective.value"
      >
        {{ objective.name }}
      </option>
    </select>
  </section>
</template>

<script setup>
import { useConfigDietStore } from "@/storage/configDiet.js";

const configDietStore = useConfigDietStore()
</script>