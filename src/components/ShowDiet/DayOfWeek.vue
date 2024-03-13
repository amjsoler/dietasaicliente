<template>
  <h1 class="text-3xl capitalize font-bold">
    {{ day }}
  </h1>
  <meal-moment v-for="(mealMoment, key) in dailyDiet" :mealMoment="mealMoment" :mealName="key" :key="mealMoment" />
</template>

<script>
import MealMoment from "@/components/ShowDiet/MealMoment.vue";

export default {
  name: 'DayOfWeek',
  components: { MealMoment },
  props: {
    dailyDiet: {
      type: Object,
      required: true
    },

    day: {
      type: String,
      required: true
    }
  }
}
</script>