<template>
  <section v-if="selectedIngredients.length" class="space-y-2">
    <typography-variant variant="p">
      Ingredientes excluidos
    </typography-variant>
    <ul class="flex flex-row flex-wrap gap-x-4 gap-y-2">
      <li
        class="cursor-pointer border-2 border-primary-100 px-4 py-2 rounded-lg"
        @click="removeSelectIngredient(ingredient)"
        v-for="ingredient in selectedIngredients"
        v-bind:key="ingredient"
      >
        {{ options.find((option) => option.code === ingredient).name }}
        <span class="text-xs ms-2">❌</span>
      </li>
    </ul>
  </section>
  <p v-else>No hay ingredientes excluidos</p>

  <input
    type="text"
    v-model="search"
    class="w-3/4 inset-0 block mx-auto border-2 border-primary-100 rounded-lg"
    placeholder="Busca un ingrediente"
  />

  <section>
    <transition-group
      class="h-48 overflow-y-scroll flex flex-row flex-wrap gap-x-4 gap-y-2"
      tag="ul"
      name="list"
    >
      <li
        class="hidden has-[span]:block"
        @click="selectIngredient(option.code)"
        v-for="option in options"
        v-bind:key="option.code"
      >
        <span
          v-if="
            option.name.toLowerCase().includes(search.toLowerCase()) &&
            !selectedIngredients.includes(option.code)
          "
          class="flex flex-row items-center justify-center border-2 border-primary-100 rounded-lg px-4 py-2"
        >
          {{ option.name }}
        </span>
      </li>
    </transition-group>
  </section>
</template>

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>

<script>
import { useConfigDietStore } from "@/storage/configDiet.js";
import TypographyVariant from "@/components/TypographyVariant.vue";

export default {
  name: "ExcludeIngredient",
  components: { TypographyVariant },

  data() {
    return {
      //TODO: Leer esto del servicio
      options: [
        { name: "Manzana", code: "manzana" },
        { name: "Chocolate", code: "chocolate" },
        { name: "Pescado", code: "pescado" },
        { name: "Marisco", code: "marisco" },
        { name: "Jamón", code: "jamon" },
        { name: "Cerdo", code: "cerdo" },
        { name: "Pollo", code: "pollo" },
        { name: "Ternera", code: "ternera" },
        { name: "Cordero", code: "cordero" },
        { name: "Conejo", code: "conejo" },
        { name: "Pavo", code: "pavo" },
        { name: "Pato", code: "pato" },
        { name: "Ganso", code: "ganso" },
        { name: "Manzana", code: "manzana" },
        { name: "Chocolate", code: "chocolate" },
        { name: "Pescado", code: "pescado" },
        { name: "Marisco", code: "marisco" },
        { name: "Jamón", code: "jamon" },
        { name: "Cerdo", code: "cerdo" },
        { name: "Pollo", code: "pollo" },
        { name: "Ternera", code: "ternera" },
        { name: "Cordero", code: "cordero" },
        { name: "Conejo", code: "conejo" },
        { name: "Pavo", code: "pavo" },
        { name: "Pato", code: "pato" },
        { name: "Ganso", code: "ganso" },
        { name: "Manzana", code: "manzana" },
        { name: "Chocolate", code: "chocolate" },
        { name: "Pescado", code: "pescado" },
        { name: "Marisco", code: "marisco" },
        { name: "Jamón", code: "jamon" },
        { name: "Cerdo", code: "cerdo" },
        { name: "Pollo", code: "pollo" },
        { name: "Ternera", code: "ternera" },
        { name: "Cordero", code: "cordero" },
        { name: "Conejo", code: "conejo" },
        { name: "Pavo", code: "pavo" },
        { name: "Pato", code: "pato" },
        { name: "Ganso", code: "ganso" },
        { name: "Manzana", code: "manzana" },
        { name: "Chocolate", code: "chocolate" },
        { name: "Pescado", code: "pescado" },
        { name: "Marisco", code: "marisco" },
        { name: "Jamón", code: "jamon" },
        { name: "Cerdo", code: "cerdo" },
        { name: "Pollo", code: "pollo" },
        { name: "Ternera", code: "ternera" },
        { name: "Cordero", code: "cordero" },
        { name: "Conejo", code: "conejo" },
        { name: "Pavo", code: "pavo" },
        { name: "Pato", code: "pato" },
        { name: "Ganso", code: "ganso" },
        { name: "Manzana", code: "manzana" },
        { name: "Chocolate", code: "chocolate" },
        { name: "Pescado", code: "pescado" },
        { name: "Marisco", code: "marisco" },
        { name: "Jamón", code: "jamon" },
        { name: "Cerdo", code: "cerdo" },
        { name: "Pollo", code: "pollo" },
        { name: "Ternera", code: "ternera" },
        { name: "Cordero", code: "cordero" },
        { name: "Conejo", code: "conejo" },
        { name: "Pavo", code: "pavo" },
        { name: "Pato", code: "pato" },
        { name: "Ganso", code: "ganso" },
        { name: "Manzana", code: "manzana" },
        { name: "Chocolate", code: "chocolate" },
        { name: "Pescado", code: "pescado" },
        { name: "Marisco", code: "marisco" },
        { name: "Jamón", code: "jamon" },
        { name: "Cerdo", code: "cerdo" },
        { name: "Pollo", code: "pollo" },
        { name: "Ternera", code: "ternera" },
        { name: "Cordero", code: "cordero" },
        { name: "Conejo", code: "conejo" },
        { name: "Pavo", code: "pavo" },
        { name: "Pato", code: "pato" },
        { name: "Ganso", code: "ganso" },
        { name: "Manzana", code: "manzana" },
        { name: "Chocolate", code: "chocolate" },
        { name: "Pescado", code: "pescado" },
        { name: "Marisco", code: "marisco" },
        { name: "Jamón", code: "jamon" },
        { name: "Cerdo", code: "cerdo" },
        { name: "Pollo", code: "pollo" },
        { name: "Ternera", code: "ternera" },
        { name: "Cordero", code: "cordero" },
        { name: "Conejo", code: "conejo" },
        { name: "Pavo", code: "pavo" },
        { name: "Pato", code: "pato" },
        { name: "Ganso", code: "ganso" },
        { name: "Manzana", code: "manzana" },
        { name: "Chocolate", code: "chocolate" },
        { name: "Pescado", code: "pescado" },
        { name: "Marisco", code: "marisco" },
        { name: "Jamón", code: "jamon" },
        { name: "Cerdo", code: "cerdo" },
        { name: "Pollo", code: "pollo" },
        { name: "Ternera", code: "ternera" },
        { name: "Cordero", code: "cordero" },
        { name: "Conejo", code: "conejo" },
        { name: "Pavo", code: "pavo" },
        { name: "Pato", code: "pato" },
        { name: "Ganso", code: "ganso" },
        { name: "Manzana", code: "manzana" },
        { name: "Chocolate", code: "chocolate" },
        { name: "Pescado", code: "pescado" },
        { name: "Marisco", code: "marisco" },
        { name: "Jamón", code: "jamon" },
        { name: "Cerdo", code: "cerdo" },
        { name: "Pollo", code: "pollo" },
        { name: "Ternera", code: "ternera" },
        { name: "Cordero", code: "cordero" },
        { name: "Conejo", code: "conejo" },
        { name: "Pavo", code: "pavo" },
        { name: "Pato", code: "pato" },
        { name: "Ganso", code: "ganso" },
      ],

      selectedIngredients: useConfigDietStore().getIngredientsExcluded(),

      search: "",
    };
  },
  methods: {
    selectIngredient(ingredientCode) {
      useConfigDietStore().addIngredientExcluded(ingredientCode);
      this.search = "";
    },

    removeSelectIngredient(ingredientCode) {
      useConfigDietStore().removeIngredientExcluded(ingredientCode);
    },
  },
};
</script>
