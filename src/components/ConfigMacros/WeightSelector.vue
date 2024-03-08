<template>
  <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label>
  <input id="default-range" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="range" min="20" max="120" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">

</template>

<script>
export default {
  name: 'WeightSelector',

  props: ["modelValue"],
  emits: ['update:modelValue'],
}
</script>