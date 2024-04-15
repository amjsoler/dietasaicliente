<template>
  <div
    @click="configDietStore.toggleGender()"
    class="cursor-pointer relative h-12 rounded-full flex flex-row justify-around items-center bg-gray-200"
  >
    <span
      class="w-[45%] h-[70%] bg-primary-100 mx-4 my-2 rounded-full block absolute"
      :class="{
        female: configDietStore.gender === 'female',
        male: configDietStore.gender === 'male'
      }"
    />
    <p
      class="z-10 text-lg text-gray-700"
      :class="{
        'text-primary-800': configDietStore.gender === 'female',
      }"
    >
      Femenino
    </p>
    <p
      class="z-10 text-lg text-gray-700"
      :class="{ 'text-primary-800': configDietStore.gender === 'male' }"
    >
      Masculino
    </p>
  </div>
</template>

<script setup>
import { useConfigDietStore } from "@/storage/configDiet.js";

const configDietStore = useConfigDietStore()
</script>

<style scoped>
span {
  transition: all 0.3s;
}

span.female {
  left: 0;
}

span.male {
  left: calc(50% - 1rem);
}
</style>
