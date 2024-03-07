import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Multiselect from "vue-multiselect";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("multiselect", Multiselect)
app.mount('#app')
