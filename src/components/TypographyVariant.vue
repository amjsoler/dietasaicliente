<template>
  <h2 v-if="variant === 'h2'" class="text-2xl font-bold">
    <slot />
  </h2>

  <h3 v-if="variant === 'h3'" class="text-xl font-semibold">
    <slot />
  </h3>

  <p v-if="variant === 'p'" class="">
    <slot />
  </p>
</template>

<script>
  export default {
    name: "TypographyVariant",

    props: {
      variant: {
        type: String,
        required: true
      }
    }
  }
</script>