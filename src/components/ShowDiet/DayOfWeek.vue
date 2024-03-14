<template>
  <section class="space-y-4" v-if="viewingActualDay === day">
    <div class="flex flex-row justify-around items-center px-8">
      <span>
        <span
          @click="navigateToLeftDayCallback"
          class="text-xl cursor-pointer"
          v-show="day !== 'lunes'"
          >⬅️</span
        >
      </span>
      <typography-variant variant="h2" class="capitalize flex-grow text-center">
        {{ day }}
      </typography-variant>
      <span>
        <span
          @click="navigateToRightDayCallback"
          class="text-xl cursor-pointer"
          v-if="day !== 'domingo'"
          >➡️
        </span>
      </span>
    </div>
    <meal-moment
      v-for="(mealMoment, key) in dailyDiet"
      :mealMoment="mealMoment"
      :mealName="key"
      :key="mealMoment"
    />
  </section>
</template>

<script>
import MealMoment from "@/components/ShowDiet/MealMoment.vue";
import TypographyVariant from "@/components/TypographyVariant.vue";
import { useDietStore } from "@/storage/diet.js";

export default {
  name: "DayOfWeek",
  components: { TypographyVariant, MealMoment },
  props: {
    dailyDiet: {
      type: Object,
      required: true,
    },

    day: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      arrDays: [
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes",
        "sábado",
        "domingo",
      ],
    };
  },

  computed: {
    viewingActualDay() {
      return this.arrDays.at(useDietStore().viewingDay);
    },
  },

  methods: {
    useDietStore,
    navigateToLeftDayCallback() {
      useDietStore().viewingDay = useDietStore().viewingDay - 1;
    },

    navigateToRightDayCallback() {
      useDietStore().viewingDay = useDietStore().viewingDay + 1;
    },
  },
};
</script>
