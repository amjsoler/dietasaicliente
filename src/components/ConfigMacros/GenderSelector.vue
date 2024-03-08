<template>
  <ul class="flex flex-row gap-4 justify-center">
    <li>
      <input value="female" @click="selectChange" v-model="localGender"  type="radio" id="hosting-small" name="hosting" class="hidden peer"  />
      <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="block">
          <div class="w-full text-lg font-semibold">♀</div>
        </div>
      </label>
    </li>
    <li>
      <input  type="radio" id="hosting-big" name="hosting" class="hidden peer">
      <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="block">
          <div class="w-full text-lg font-semibold">♂</div>
        </div>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'GenderSelector',
  props: ["gender"],
  emits: ['update:gender'],
  data() {
    return {
      localGender: "female"
    }
  },

  mounted() {
    this.localGender = this.gender
  },

  methods: {
    selectChange() {
      this.$emit('update:gender', this.localGender);
    }
  }
}
</script>