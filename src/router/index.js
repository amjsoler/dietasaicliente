import { createRouter, createWebHistory } from "vue-router";

import ConfigDiet from "@/views/ConfigDiet.vue";
import ConfigMacros from "@/views/ConfigMacros.vue";
import ConfigSummary from "@/views/ConfigSummary.vue";
import DameInserts from "@/views/DameInserts.vue";
import MyGeneratedDiet from "@/views/MyGeneratedDiet.vue";
import ViewRecipe from "@/views/ViewRecipe.vue";
import { useDietStore } from "@/storage/diet.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: ConfigDiet,
    },
    {
      path: "/config-diet",
      name: "ConfigDiet",
      component: ConfigDiet,
      meta: {
        requiresNoDiet: true,
      },
    },
    {
      path: "/config-macros",
      name: "ConfigMacros",
      component: ConfigMacros,
      meta: {
        requiresNoDiet: true,
      },
    },
    {
      path: "/config-summary",
      name: "ConfigSummary",
      component: ConfigSummary,
      meta: {
        requiresNoDiet: true,
      },
    },

    {
      path: "/generated-diet",
      name: "GeneratedDiet",
      component: MyGeneratedDiet,
      meta: {
        requiresDiet: true,
      },
    },
    {
      path: "/view-recipe",
      name: "ViewRecipe",
      component: ViewRecipe,
      meta: {
        requiresDiet: true,
      },
    },
    {
      path: "/dame-inserts",
      name: "DameInserts",
      component: DameInserts,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresNoDiet)) {
    if (!useDietStore().diet) {
      next();
    } else {
      next({ name: "GeneratedDiet" });
    }
  } else if (to.matched.some((record) => record.meta.requiresDiet)) {
    if (!useDietStore().diet) {
      next({ name: "ConfigDiet" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
