<template>
  <day-of-week v-for="(dailyDiet, key) in useDietStore().diet.diet" :dailyDiet="dailyDiet" :day="key" :key="dailyDiet" />
</template>

<script>
import { useDietStore } from "../storage/diet.js";
import DayOfWeek from "@/components/ShowDiet/DayOfWeek.vue";

export default {
  name: 'MyGeneratedDiet',
  components: { DayOfWeek },
  methods: { useDietStore },

}
</script>