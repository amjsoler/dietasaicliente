<template>
  <section class="w-full md:w-3/4 mx-auto">
    <select v-model="configDietStore.dietObjective.selected">
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

<style scoped>
select {
  appearance: none;
  border-radius: 10px;
  background-color: #fceade;
  border-color: #ff903d;
  width: 100%;
  height: 50px;
  color: #c75400;
  font-size: 1.1rem;
  font-weight: bold;
}
</style>
