<template>
  <section class="px-4 py-2 rounded-lg shadow-lg space-y-4 bg-primary-500/30">
    <typography-variant variant="h2"> Ingredientes </typography-variant>
    <ul class="space-y-1">
      <li
        class="list-inside list-disc space-x-2"
        v-for="ingredient in ingredients"
        :key="ingredient"
      >
        <span class="font-semibold"> {{ `${ingredient.nombre}` }} </span>
        <span>
          <span v-if="ingredient.unidades === 'al gusto'">
            al gusto
          </span>
          <span v-else>
            {{ `(${ingredient.cantidad} ${ingredient.unidades})` }}
          </span>
        </span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import TypographyVariant from "@/components/TypographyVariant.vue";

defineProps({
  ingredients: {
    type: Array,
    required: true,
  }
})
</script>
