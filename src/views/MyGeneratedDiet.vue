<template>
  <section>
    <day-of-week
      v-for="(dailyDiet, key) in useDietStore().diet"
      :dailyDiet="dailyDiet"
      :day="key"
      :key="dailyDiet"
    />
  </section>
</template>

<script setup>
import DayOfWeek from "@/components/ShowDiet/DayOfWeek.vue";
import { useDietStore } from "@/storage/diet.js";
</script>
