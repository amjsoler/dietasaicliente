<template>
  <span class="flex justify-center items-center rounded-full w-4 h-4 border-2"
        :class="{'border-primary-400': checked,
                'border-gray-400/60': !checked,
        }">
      <span class="rounded-full w-2 h-2 inline-block"
            :class="{
              'bg-primary-400': checked,
              'bg-gray-400/60': !checked,

          }"
      >
      </span>
    </span>
</template>

<script>
export default {
  name: "CustomCheck",

  props: {
    checked: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
  span {
    transition: all .5s;
  }
</style>