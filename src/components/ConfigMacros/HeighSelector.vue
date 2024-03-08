<template>
  <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label>
  <input id="default-range" type="range" min="50" max="220" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">



</template>
<script>
export default {
  name: 'HeighSelector',

  props: ["modelValue"],
  emits: ['update:modelValue'],
}
</script>