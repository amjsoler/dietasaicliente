<template>
  <div @click="toggleSelection" class="relative h-12 rounded-lg flex flex-row justify-around items-center bg-primary-500/30">
    <span class="w-[45%] h-[70%] bg-white mx-4 my-2 rounded-lg block absolute"
    :class="{'female': localGender === 'female',
              'male': localGender === 'male'}"/>
    <p class="z-10 text-lg text-primary-900"
        :class="{'text-white': localGender==='female'}"
    >
      Femenino
    </p>
    <p class="z-10 text-lg text-primary-900"
       :class="{'text-white': localGender==='male'}">
      Masculino
    </p>
  </div>
</template>

<script>
import {useConfigDietStore} from "@/storage/configDiet.js";

export default {
  name: 'GenderSelector',

  data() {
    return {
      localGender: useConfigDietStore().getGender()
    }
  },

  methods: {
    toggleSelection() {
      useConfigDietStore().toggleGender()
      this.localGender = useConfigDietStore().gender

      document.querySelector('span').classList.contains("female") ?
          (document.querySelector('span').classList.remove("female") &&
              document.querySelector('span').classList.add("male")) :
          (document.querySelector('span').classList.remove("male") &&
              document.querySelector('span').classList.add("female"))
    }
  }
}
</script>

<style scoped>
  span {
    transition: all 0.3s;
  }

  span.female {
    left: 0
  }

  span.male {
    left: calc(50% - 1rem)
  }
</style>