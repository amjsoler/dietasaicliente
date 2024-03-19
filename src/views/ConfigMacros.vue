<template>
  <div class="space-y-8">
    <p
      class="text-4xl cursor-pointer"
      @click="router().push({ name: 'ConfigDiet' })"
    >
      ⬅️
    </p>

    <typography-variant variant="h2"> Cálculo de calorías </typography-variant>

    <section class="space-y-6">
      <typography-variant variant="h3"> Genero </typography-variant>
      <gender-selector />
    </section>

    <section class="space-y-6">
      <typography-variant variant="h3"> Altura </typography-variant>
      <heigh-selector />
    </section>

    <section class="space-y-6">
      <typography-variant variant="h3"> Peso </typography-variant>
      <weight-selector />
    </section>

    <section class="space-y-6">
      <typography-variant variant="h3"> Edad </typography-variant>
      <age-selector />
    </section>

    <section class="space-y-6 relative">
      <typography-variant variant="h3"> Actividad física </typography-variant>
      <weekly-activity />
    </section>

    <section class="space-y-6">
      <typography-variant variant="h3">
        Objetivo de la dieta
      </typography-variant>
      <diet-objective />
    </section>

    <section class="flex flex-col items-center">
      <typography-variant variant="h3"> Calorías diarias </typography-variant>
      <p class="text-3xl font-bold">
        {{ tweened.toFixed(0) }} <span class="text-xl">KCal</span>
      </p>
    </section>

    <p class="flex justify-center">
      <button
        @click="router().push({ name: 'ConfigSummary' })"
        class="text-4xl"
      >
        ➡️
      </button>
    </p>
  </div>
</template>

<script>
import GenderSelector from "@/components/ConfigMacros/GenderSelector.vue";
import HeighSelector from "@/components/ConfigMacros/HeighSelector.vue";
import WeightSelector from "@/components/ConfigMacros/WeightSelector.vue";
import AgeSelector from "@/components/ConfigMacros/AgeSelector.vue";
import WeeklyActivity from "@/components/ConfigMacros/WeeklyActivity.vue";
import TypographyVariant from "@/components/TypographyVariant.vue";
import { useConfigDietStore } from "@/storage/configDiet.js";
import DietObjective from "@/components/ConfigMacros/DietObjective.vue";
import router from "@/router/index.js";
import gsap from "gsap";

export default {
  name: "ConfigMacros",
  methods: {
    router() {
      return router;
    },
  },
  components: {
    DietObjective,
    TypographyVariant,
    WeeklyActivity,
    AgeSelector,
    WeightSelector,
    HeighSelector,
    GenderSelector,
  },

  data() {
    return {
      tweened: useConfigDietStore().kcal,
    };
  },

  computed: {
    dailyKcal() {
      const gender = useConfigDietStore().getGender();
      const weight = parseFloat(useConfigDietStore().getWidth());
      const height = parseFloat(useConfigDietStore().getHeight());
      const age = useConfigDietStore().getAge();
      const weeklyActivity = parseFloat(
        useConfigDietStore().getWeeklyActivity(),
      );
      const dietObjective = parseInt(useConfigDietStore().getDietObjective());

      let TMB = 0;

      if (gender === "male") {
        TMB = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      } else {
        TMB = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
      }

      const totalKCal = Math.floor(TMB * weeklyActivity + dietObjective);

      useConfigDietStore().kcal = totalKCal;

      return totalKCal;
    },
  },

  watch: {
    dailyKcal(n) {
      gsap.to(this, { duration: 0.5, tweened: Number(n) || 0 });
    },
  },
};
</script>
