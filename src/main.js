import "./assets/main.css";

import {createApp, watch} from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@fontsource-variable/plus-jakarta-sans";

const app = createApp(App);

const pinia = createPinia()
app.use(pinia);

//Restauro el estado de la aplicación en caso de que lo haya en localstorage
if(localStorage.getItem('piniaState')) {
    pinia.state.value = JSON.parse(localStorage.getItem('piniaState'))
}

watch(
    pinia.state,
    (state) => {
      // persist the whole state to the local storage whenever it changes
      localStorage.setItem('piniaState', JSON.stringify(state))
    },
    { deep: true }
)

app.use(router);
app.mount("#app");
