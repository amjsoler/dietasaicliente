<template>
  <div class="relative w-full">
    <label for="labels-range-input" class="sr-only">Labels range</label>
    <input id="labels-range-input" type="range" value="2" min="1" max="3" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
    <span class="text-xl absolute start-0 -bottom-6">🐣</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -ms-2 -bottom-6">🍳</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">🧑‍🍳</span>
  </div>
</template>
<script>
export default {
  name: 'DifficultySelector',
}
</script>