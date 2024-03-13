import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "@fontsource/plus-jakarta-sans"; // Defaults to weight 400
import "@fontsource/plus-jakarta-sans/400.css"; // Specify weight
import "@fontsource/plus-jakarta-sans/400-italic.css";
import { useDietStore } from "@/storage/diet.js";
import { useConfigDietStore } from "@/storage/configDiet.js"; // Specify weight and style

const app = createApp(App)

app.use(createPinia())

//Si crece, esto lo abstraemos a un archivo con una función export
useDietStore().$subscribe((mutation, state) => {
  localStorage.setItem("diet", JSON.stringify(state))
  localStorage.setItem("viewingRecipe", JSON.stringify(state.viewingRecipe))
})

useConfigDietStore().$subscribe((mutation, state) => {
  localStorage.setItem("configDiet", JSON.stringify(state))
})

app.use(router)
app.mount('#app')
