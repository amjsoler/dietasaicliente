<template>
  <article
    @click="configDietStore.toggleMeal(props.literal)"
    class="capitalize text-lg cursor-pointer flex flex-row gap-x-2 items-center px-4 py-2 border-2 rounded-lg border-primary-100"
  >
    <custom-check :checked="configDietStore.checkIfMealIsIncluded(props.literal)" />
    {{ literal }}
  </article>
</template>

<script setup lang="ts">
import { useConfigDietStore } from "@/storage/configDiet.js";
import CustomCheck from "@/components/CustomCheck.vue";
import { defineProps } from "vue";
const props = defineProps({
  literal: {
    type: String,
    required: true,
  },
})

const configDietStore = useConfigDietStore()
</script>
