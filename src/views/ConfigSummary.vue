<template>
  <section class="space-y-6">
    <p
      class="text-4xl cursor-pointer"
      @click="router.push({ name: 'ConfigMacros' })"
    >
      ⬅️
    </p>

    <div class="space-y-6">
      <typography-variant variant="h2"> Resumen </typography-variant>

      <section class="space-y-4">
        <typography-variant variant="h3"> Dieta </typography-variant>

        <typography-variant variant="p">
          <span class="font-semibold"> Comidas incluídas: </span>
          <section class="flex flex-row gap-x-2 flex-wrap">
            <span
              class="capitalize"
              v-for="(meal, index) in configDietStore.MealsIncluded"
              :key="meal"
            >
              {{ meal }}
              <span
                v-if="index !== configDietStore.MealsIncluded.length - 1"
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
            ].at(configDietStore.Healthyness)
          }}
        </typography-variant>

        <typography-variant variant="p">
          Máximo
          <span class="font-semibold"
            >🕢 {{ configDietStore.MaxTime }} mins/por receta</span
          >
        </typography-variant>

        <typography-variant variant="p">
          <span class="font-semibold">Alergias: </span>
          <span v-if="configDietStore.Allergies.filter(item => item.selected).length === 0"
            >Ninguna</span
          >
          <span
            v-else
            class="capitalize"
            :key="alergia"
            v-for="(alergia, index) in configDietStore.Allergies.filter(item => item.selected)"
          >
            {{alergia.literal}} {{ alergia.name }}
            <span
              v-if="index !== configDietStore.Allergies.filter(item => item.selected).length - 1"
              >,
            </span>
          </span>
        </typography-variant>

        <typography-variant variant="p">
          <span class="font-semibold">Restricciones alimentarias: </span>
          <span v-if="configDietStore.FoodRestrictions.filter(item => item.selected).length === 0"
            >Ninguna</span
          >
          <span
              v-else
            class="capitalize"
            :key="restriccion"
            v-for="(
              restriccion, index
            ) in configDietStore.FoodRestrictions.filter(item => item.selected)"
          >
            {{ restriccion.name }}
            <span
              v-if="index !== configDietStore.FoodRestrictions.filter(item => item.selected).length - 1"
              >,
            </span>
          </span>
        </typography-variant>

        <typography-variant variant="p">
          <span class="font-semibold">Ingredientes excluídos: </span>
          <span
            v-if="configDietStore.IngredientsExcluded.length === 0"
            >Ninguno</span
          >
          <span
              v-else
            class="capitalize"
            :key="ingrediente"
            v-for="(
              ingrediente, index
            ) in configDietStore.IngredientsExcluded"
          >
            {{ ingrediente }}
            <span
              v-if="
                index !==
                configDietStore.IngredientsExcluded.length - 1
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
            {{ { male: "♂", female: "♀" }[configDietStore.gender] }}
          </typography-variant>
          |
          <typography-variant variant="p">
            {{ configDietStore.age }} años
          </typography-variant>
          |
          <typography-variant variant="p">
            {{ configDietStore.width }} kg.
          </typography-variant>
          |
          <typography-variant variant="p">
            {{ configDietStore.height }} cm.
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
                    configDietStore.weeklyActivity.selected,
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
                  objective.value === configDietStore.dietObjective.selected,
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
          {{ configDietStore.kcal }} kcal
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
        v-if="!errorRequest"
        @click="generateDiet"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded"
      >
        ✅ ¡Generar mi dieta!
      </button>
      <span
        v-else
        id="response-error"
        class="font-semibold text-red-700/80 text-center"
      >
        <span class="font-bold">¡Ups!</span> Parece que no hemos podido
        encontrar una combinación de recetas que cumpla con tus requisitos. Por
        favor, intenta abrir un poco tus posibilidades
      </span>
    </div>
  </section>
</template>

<script setup>
import TypographyVariant from "@/components/TypographyVariant.vue";
import { useConfigDietStore } from "../storage/configDiet.js";
import axios from "axios";
import { useDietStore } from "@/storage/diet.js";
import router from "@/router/index.js";
import moment from "moment";
import {ref} from "vue";

    const errorRequest = ref(null)
    const configDietStore = useConfigDietStore()
    const restartConfigDiet = () => {
      localStorage.removeItem("configDiet");
      configDietStore.$reset()
      router.push({ name: "ConfigDiet" });
    }

    const generateDiet = () => {
      axios
        .post(import.meta.env.VITE_SERVICE_BASE_URL + "get-diet", {
          meals_included: configDietStore.MealsIncluded,
          healthyness: configDietStore.Healthyness,
          difficulty: configDietStore.Difficulty,
          kcal: configDietStore.kcal,
          max_time: configDietStore.MaxTime,
          allergies: configDietStore.Allergies.filter(item => item.selected).map((allergy) => allergy.code),
          foodRestrictions: configDietStore.getFoodRestrictions(),
          ingredientsExcluded: configDietStore.getIngredientsExcluded,
        })
        .then((response) => {
          useDietStore().setDiet(response.data);
          useDietStore().weekDiet = moment(new Date()).week();

          router.push({ name: "GeneratedDiet" });
        })
        .catch(() => {
          errorRequest.value = true;
        });
    }
</script>
