<template>
  <select>
    <option class="border-2 border-primary-400 rounded-lg"
        v-for="activity in weeklyActivityLiterals" :key="activity.name" :value="activity.multiplier">
      {{ activity.name }}
    </option>
  </select>
</template>

<script>

export default {
  name: 'WeeklyActivity',

  data() {
    return {
      weeklyActivityLiterals: [
          {name:"Sedentario", multiplier: 1.2},
          {name:"Levemente Activo", multiplier: 1.375},
          {name:"Moderadamente activo", multiplier: 1.55},
          {name:"Muy Activo", multiplier: 1.725},
          {name:"Extremadamente activo", multiplier: 1.9},
      ],
    }
  },

  methods: {
    changeSelect() {

    }
  }
}
</script>