<template>
  <router-view v-slot="{ Component }">
    <transition name="slide-fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.2s ease-in-out;
  transition-delay: 0.2s;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in-out;
}

.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
</style>

<script>
import { useDietStore } from "@/storage/diet.js";
import moment from "moment";

export default {
  name: "App",

  mounted() {
    //Cuando entramos a la app, comprobamos si hay cambio de semana para eliminar la dieta de la semana anterior
    if (useDietStore().weekDiet !== moment(new Date()).week()) {
      console.log("Borrando mierda");
      localStorage.removeItem("diet");
      useDietStore().$reset();
      this.$router.push({ name: "ConfigDiet" });
    }
  },
};
</script>
