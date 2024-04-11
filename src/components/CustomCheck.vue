<template>
  <span class="flex justify-center items-center rounded-full w-4 h-4 border-2"
        :class="spanFatherClasses">
      <span class="rounded-full w-2 h-2 inline-block"
            :class="spanChildClasses"
      >
      </span>
    </span>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  checked: {
    type: Boolean,
    required: true
  }
})

const spanFatherClasses = computed(() => ({
  'border-primary-400': props.checked,
  'border-gray-400/60': !props.checked,
}))

const spanChildClasses = computed(() => ({
  'bg-primary-400': props.checked,
  'bg-gray-400/60': !props.checked,
}))
</script>

<style scoped>
  span {
    transition: all .5s;
  }
</style>