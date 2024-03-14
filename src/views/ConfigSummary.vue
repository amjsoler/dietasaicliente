<template>
  <section class="space-y-6">
    <p @click="router().push({ name: 'ConfigMacros' })">⬅️</p>

    <div class="space-y-6">
      <typography-variant variant="h2"> Resumen </typography-variant>

      <section class="space-y-4">
        <typography-variant variant="h3"> Dieta </typography-variant>

        <typography-variant variant="p">
          <span class="font-semibold"> Comidas incluídas: </span>
          <section class="flex flex-row gap-x-2 flex-wrap">
            <span
              class="capitalize"
              v-for="(meal, index) in useConfigDietStore().MealsIncluded"
              :key="meal"
            >
              {{ meal }}
              <span
                v-if="index !== useConfigDietStore().MealsIncluded.length - 1"
              >
                ,
              </span>
            </span>
          </section>
        </typography-variant>

        <typography-variant class="font-semibold" variant="p">
          {{
            [
              "Todo tipo de recetas 🍔 ⚖️ 💚",
              "Recetas equillibradas ⚖️ 💚",
              "Recetas saludables 💚",
            ].at(useConfigDietStore().getHealthyness())
          }}
        </typography-variant>

        <typography-variant variant="p">
          Máximo
          <span class="font-semibold"
            >🕢 {{ useConfigDietStore().getMaxTime() }} mins/por receta</span
          >
        </typography-variant>

        <typography-variant variant="p">
          <span class="font-semibold">Alergias: </span>
          <span v-if="useConfigDietStore().getAllergies().length === 0"
            >Ninguna</span
          >
          <span
            class="capitalize"
            :key="alergia"
            v-for="(alergia, index) in useConfigDietStore().getAllergies()"
          >
            {{ alergia }}
            <span
              v-if="index !== useConfigDietStore().getAllergies().length - 1"
              >,
            </span>
          </span>
        </typography-variant>

        <typography-variant variant="p">
          <span class="font-semibold">Restricciones alimentarias: </span>
          <span v-if="useConfigDietStore().getFoodRestrictions().length === 0"
            >Ninguna</span
          >
          <span
            class="capitalize"
            :key="restriccion"
            v-for="(
              restriccion, index
            ) in useConfigDietStore().getFoodRestrictions()"
          >
            {{ restriccion }}
            <span
              v-if="index !== useConfigDietStore().getAllergies().length - 1"
              >,
            </span>
          </span>
        </typography-variant>

        <typography-variant variant="p">
          <span class="font-semibold">Ingredientes excluídos: </span>
          <span
            v-if="useConfigDietStore().getIngredientsExcluded().length === 0"
            >Ninguno</span
          >
          <span
            class="capitalize"
            :key="ingrediente"
            v-for="(
              ingrediente, index
            ) in useConfigDietStore().getIngredientsExcluded()"
          >
            {{ ingrediente }}
            <span
              v-if="
                index !==
                useConfigDietStore().getIngredientsExcluded().length - 1
              "
              >,
            </span>
          </span>
        </typography-variant>
      </section>

      <section class="space-y-4">
        <typography-variant variant="h3">
          Cálculo de calorías
        </typography-variant>

        <section class="flex flex-row items-center gap-x-2 justify-center">
          <typography-variant class="text-2xl" variant="p">
            {{ { male: "♂", female: "♀" }[useConfigDietStore().getGender()] }}
          </typography-variant>
          |
          <typography-variant variant="p">
            {{ useConfigDietStore().getAge() }} años
          </typography-variant>
          |
          <typography-variant variant="p">
            {{ useConfigDietStore().getWidth() }} kg.
          </typography-variant>
          |
          <typography-variant variant="p">
            {{ useConfigDietStore().getHeight() }} cm.
          </typography-variant>
        </section>

        <section
          class="flex flex-row justify-center items-center gap-x-4 font-semibold"
        >
          <typography-variant variant="p">
            {{
              [
                { name: "Sedentario", multiplier: 1.2 },
                { name: "Levemente Activo", multiplier: 1.375 },
                { name: "Moderadamente activo", multiplier: 1.55 },
                { name: "Muy Activo", multiplier: 1.725 },
                { name: "Extremadamente activo", multiplier: 1.9 },
              ].find(
                (activity) =>
                  activity.multiplier ===
                  useConfigDietStore().getWeeklyActivity(),
              ).name
            }}
          </typography-variant>
          |
          <typography-variant variant="p">
            {{
              [
                { name: "Bajar de peso", value: -350 },
                { name: "Mantenerse", value: 0 },
                { name: "Subir de peso", value: 350 },
              ].find(
                (objective) =>
                  objective.value === useConfigDietStore().getDietObjective(),
              ).name
            }}
          </typography-variant>
        </section>
      </section>
    </div>

    <section class="space-y-4">
      <typography-variant variant="h3">Calorías diarias</typography-variant>

      <section class="flex flex-row justify-center items-center gap-x-4">
        <span class="text-3xl font-bold">
          {{ useConfigDietStore().kcal }} kcal
        </span>
      </section>
    </section>
    <div class="flex flex-col gap-y-6 justify-center">
      <button
        @click="restartConfigDiet"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        ❌ Comenzar de nuevo
      </button>
      <button
        @click="generateDiet"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded"
      >
        ✅ ¡Generar mi dieta!
      </button>
      <span id="response-error"></span>
    </div>
  </section>
</template>

<script>
import TypographyVariant from "@/components/TypographyVariant.vue";
import { useConfigDietStore } from "../storage/configDiet.js";
import axios from "axios";
import { useDietStore } from "@/storage/diet.js";
import router from "@/router/index.js";

export default {
  name: "ConfigSummary",
  components: { TypographyVariant },

  methods: {
    router() {
      return router;
    },
    useConfigDietStore,
    restartConfigDiet() {
      localStorage.removeItem("configDiet");
      useConfigDietStore().$reset();
      this.$router.push({ name: "ConfigDiet" });
    },

    generateDiet() {
      console.log("Generando dieta...");

      axios
        .post("http://localhost:8000/api/get-diet", {
          meals_included: useConfigDietStore().MealsIncluded,
          healthyness: useConfigDietStore().getHealthyness(),
          difficulty: useConfigDietStore().getDifficulty(),
          kcal: useConfigDietStore().kcal,
          max_time: useConfigDietStore().getMaxTime(),
          allergies: useConfigDietStore().getAllergies(),
          foodRestrictions: useConfigDietStore().getFoodRestrictions(),
          ingredientsExcluded: useConfigDietStore().getIngredientsExcluded,
        })
        .then((response) => {
          useDietStore().setDiet(response.data);

          this.$router.push({ name: "GeneratedDiet" });
        })
        .catch(() => {
          document.getElementById("response-error").innerHTML =
            "<span class='text-red-700 text-lg font-semibold'><span class='font-bold'>¡Ups!</span> Parece que no hemos podido encontrar una combinación de recetas que cumpla con tus requisitos. Por favor, intenta abrir un poco tus posibilidades</span>";
        });
    },
  },
};
</script>
