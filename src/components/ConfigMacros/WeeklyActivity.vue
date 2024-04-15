<template>
  <section class="w-full md:w-3/4 mx-auto">
    <select v-model="configDietStore.weeklyActivity.selected" class="bg-gray-200 rounded-full px-8 py-2 w-full">
      <option
        class="border-2 border-primary-400 rounded-full"
        v-for="activity in configDietStore.weeklyActivity.availableActivities"
        :key="activity.name"
        :value="activity.multiplier"
      >
        {{ activity.name }}
      </option>
    </select>
  </section>
</template>

<script setup>
import { useConfigDietStore } from "@/storage/configDiet.js";

const configDietStore = useConfigDietStore()
</script>

<style scoped>
select {
}
</style>
