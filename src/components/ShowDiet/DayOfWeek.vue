<template>
  <section class="space-y-4" v-if="viewingActualDay === day">
    <div class="flex flex-row justify-around items-center px-8">
      <span>
        <span
          @click="dietStore.viewingDay--"
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
          @click="dietStore.viewingDay++"
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

<script setup>
import MealMoment from "@/components/ShowDiet/MealMoment.vue";
import TypographyVariant from "@/components/TypographyVariant.vue";
import { useDietStore } from "@/storage/diet.js";
import { computed, ref } from "vue";


defineProps({
  dailyDiet: {
    type: Object,
    required: true,
  },

  day: {
    type: String,
    required: true,
  },
})

const dietStore = useDietStore()
const arrDays = ref([
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
  "domingo",
])

const viewingActualDay = computed(() => {
  return arrDays.value.at(useDietStore().viewingDay);
})
</script>
