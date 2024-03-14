<template>
  <router-view v-slot="{ Component }">
    <p @click="router().go(-1)">⬅️</p>
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
import router from "@/router/index.js";

export default {
  methods: {
    router() {
      return router;
    },
  },
};
</script>
