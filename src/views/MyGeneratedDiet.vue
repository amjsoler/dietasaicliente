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

<script>
import DayOfWeek from "@/components/ShowDiet/DayOfWeek.vue";
import { useDietStore } from "@/storage/diet.js";

export default {
  name: "MyGeneratedDiet",
  methods: { useDietStore },
  components: { DayOfWeek },
};
</script>
