import {createRouter, createWebHistory} from 'vue-router'

import ConfigDiet from "@/views/ConfigDiet.vue";
import ConfigMacros from "@/views/ConfigMacros.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: ConfigDiet
        },
        {
            path: '/config-diet',
            name: 'ConfigDiet',
            component: ConfigDiet
        },
        {
            path: '/config-macros',
            name: 'ConfigMacros',
            component: ConfigMacros
        }
    ]
})

export default router
