import {createRouter, createWebHistory} from 'vue-router'

import ConfigDiet from "@/views/ConfigDiet.vue";
import ConfigMacros from "@/views/ConfigMacros.vue";
import ConfigSummary from "@/views/ConfigSummary.vue";
import DameInserts from "@/views/DameInserts.vue";
import MyGeneratedDiet from "@/views/MyGeneratedDiet.vue";

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
        },
        {
            path: '/config-summary',
            name: 'ConfigSummary',
            component: ConfigSummary
        },

        {
            path: "/generated-diet",
            name: "GeneratedDiet",
            component: MyGeneratedDiet
        },
        {
            path: "/dame-inserts",
            name: "DameInserts",
            component: DameInserts
        }

    ]
})

export default router
