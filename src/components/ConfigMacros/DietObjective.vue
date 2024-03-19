<template>
  <section class="w-full md:w-3/4 mx-auto">
    <select @change="changeSelect" v-model="selectedDietObjective">
      <option
        class="border-2 border-primary-400 rounded-lg"
        v-for="objective in dietObjectivesLiterals"
        :key="objective.value"
        :value="objective.value"
      >
        {{ objective.name }}
      </option>
    </select>
  </section>
</template>

<script>
import { useConfigDietStore } from "@/storage/configDiet.js";

export default {
  name: "DietObjective",

  data() {
    return {
      dietObjectivesLiterals: [
        { name: "Bajar de peso", value: -350 },
        { name: "Mantenerse", value: 0 },
        { name: "Subir de peso", value: 350 },
      ],

      selectedDietObjective: useConfigDietStore().getDietObjective(),
    };
  },

  methods: {
    changeSelect() {
      useConfigDietStore().setDietObjective(this.selectedDietObjective);
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
