<template>
  <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    {{ weeklyActivityLiterals[modelValue].name}}<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
  </button>

  <!-- Dropdown menu -->
  <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="updateModelValue(0)">
          {{ weeklyActivityLiterals[0].name }}
        </a>
      </li>
      <li>
        <a
            @click="updateModelValue(1)"
            href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ weeklyActivityLiterals[1].name }}</a>
      </li>
      <li>
        <a
            @click="updateModelValue(2)"
            href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ weeklyActivityLiterals[2].name }}</a>
      </li>
      <li>
        <a
            @click="updateModelValue(3)"
            href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ weeklyActivityLiterals[3].name }}</a>
      </li>
      <li>
        <a
            @click="updateModelValue(4)"
            href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ weeklyActivityLiterals[4].name }}</a>
      </li>
    </ul>
  </div>

</template>

<script>

export default {
  name: 'WeeklyActivity',
  props: ["modelValue"],
  emits: ['update:modelValue'],

  data() {
    return {
      weeklyActivityLiterals: [
          {value:0, name:"Sedentario"},
          {value:1, name:"Levemente Activo"},
          {value:2, name:"Moderadamente activo"},
          {value:3, name:"Muy Activo"},
          {value:4, name:"Extremadamente activo"},
        1.375, 1.55, 1.725, 1.9]
    }
  },

  methods: {
    updateModelValue(value) {
      this.$emit('update:modelValue', this.weeklyActivityLiterals[value].value)
      document.getElementById("dropdownDefaultButton").click()
    }
  }
}
</script>