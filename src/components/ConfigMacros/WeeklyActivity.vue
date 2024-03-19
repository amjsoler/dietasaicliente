<template>
  <section class="w-full md:w-3/4 mx-auto">
    <select @change="changeSelect" v-model="selectedWeeklyActivity">
      <option
        class="border-2 border-primary-400 rounded-lg"
        v-for="activity in weeklyActivityLiterals"
        :key="activity.name"
        :value="activity.multiplier"
      >
        {{ activity.name }}
      </option>
    </select>
  </section>
</template>

<script>
import { useConfigDietStore } from "@/storage/configDiet.js";

export default {
  name: "WeeklyActivity",

  data() {
    return {
      weeklyActivityLiterals: [
        { name: "Sedentario", multiplier: 1.2 },
        { name: "Levemente Activo", multiplier: 1.375 },
        { name: "Moderadamente activo", multiplier: 1.55 },
        { name: "Muy Activo", multiplier: 1.725 },
        { name: "Extremadamente activo", multiplier: 1.9 },
      ],

      selectedWeeklyActivity: useConfigDietStore().getWeeklyActivity(),
    };
  },

  methods: {
    changeSelect() {
      useConfigDietStore().setWeeklyActivity(this.selectedWeeklyActivity);
    },
  },
};
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
