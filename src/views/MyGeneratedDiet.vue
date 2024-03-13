<template>
  {{ useDietStore().getDiet()}}
</template>

<script>
import { useDietStore } from "../storage/diet.js";

export default {
  name: 'MyGeneratedDiet',
  methods: { useDietStore },

}
</script>