<template>
  <div>
    <h2 class="text-xl font-bold mt-4">Preparation Steps</h2>
    <ol class="list-inside list-decimal">
      <li v-for="step in steps" :key="step">{{ step }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'PreparationSteps',
  props: {
    steps: {
      type: Array,
      required: true
    }
  }
}
</script>