<template>
  <section class="space-y-4">
    <typography-variant variant="h3"> Preparación </typography-variant>

    <ol class="list-inside list-decimal space-y-3">
      <li v-for="step in steps" :key="step">{{ step }}</li>
    </ol>
  </section>
</template>

<script setup>
import TypographyVariant from "@/components/TypographyVariant.vue";

defineProps({
  steps: {
    type: Array,
    required: true,
  }
})
</script>
