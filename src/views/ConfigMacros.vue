<template>
  <div class="space-y-8">
    <typography-variant variant="h2"> Cálculo de calorías </typography-variant>

    <section class="space-y-6">
      <typography-variant variant="h3"> Genero </typography-variant>
      <gender-selector />
    </section>

    <section class="space-y-6">
      <typography-variant variant="h3"> Altura </typography-variant>
      <heigh-selector />
    </section>

    <section class="space-y-6">
      <typography-variant variant="h3"> Peso </typography-variant>
      <weight-selector />
    </section>

    <section class="space-y-6">
      <typography-variant variant="h3"> Edad </typography-variant>
      <age-selector />
    </section>

    <section class="space-y-6 relative">
      <typography-variant variant="h3"> Actividad física </typography-variant>
      <div class="absolute top-0 right-0 !mt-0">
        <p
          class="flex items-center absolute top-0 right-0 text-gray-500 dark:text-gray-400"
        >
          <button
            data-popover-target="popover-weekly-activity-description"
            data-popover-placement="bottom-end"
            type="button"
          >
            ℹ️
          </button>
        </p>
        <div
          data-popover
          id="popover-weekly-activity-description"
          role="tooltip"
          class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
        >
          <div class="p-3 space-y-2">
            <ul class="space-y-6">
              <li>
                <typography-variant variant="h4">
                  Sedentario
                </typography-variant>
                <typography-variant variant="p">
                  Poco o ningún ejercicio
                </typography-variant>
              </li>

              <li>
                <typography-variant variant="h4">
                  Lévemente activo
                </typography-variant>
                <typography-variant variant="p">
                  Ejercicio ligero. Deporte de 1 a 3 días por semana
                </typography-variant>
              </li>

              <li>
                <typography-variant variant="h4">
                  Lévemente activo
                </typography-variant>
                <typography-variant variant="p">
                  Ejercicio moderado. Deporte de 3 a 5 días por semana
                </typography-variant>
              </li>

              <li>
                <typography-variant variant="h4">
                  Muy activo
                </typography-variant>
                <typography-variant variant="p">
                  Ejercicio duro. Deporte de 6 a 7 días por semana
                </typography-variant>
              </li>

              <li>
                <typography-variant variant="h4">
                  Extremadamente activo
                </typography-variant>
                <typography-variant variant="p">
                  Ejercicio muy duro / deportes y trabajo físico diario o dos
                  veces al día, entrenamientos de alto rendimiento
                </typography-variant>
              </li>
            </ul>
          </div>
          <div data-popper-arrow></div>
        </div>
      </div>
      <weekly-activity />
    </section>

    <section>
      <typography-variant variant="h3">
        Objetivo de la dieta
      </typography-variant>
      <diet-objective />
    </section>

    <section class="flex flex-col items-center">
      <typography-variant variant="h3"> Calorías diarias </typography-variant>
      <p class="text-3xl font-bold">
        {{ tweened.toFixed(0) }} <span class="text-xl">Kcal</span>
      </p>
    </section>

    <p class="flex justify-center">
      <button
        @click="router().push({ name: 'ConfigSummary' })"
        class="text-4xl"
      >
        ➡️
      </button>
    </p>
  </div>
</template>

<script>
import GenderSelector from "@/components/ConfigMacros/GenderSelector.vue";
import HeighSelector from "@/components/ConfigMacros/HeighSelector.vue";
import WeightSelector from "@/components/ConfigMacros/WeightSelector.vue";
import AgeSelector from "@/components/ConfigMacros/AgeSelector.vue";
import WeeklyActivity from "@/components/ConfigMacros/WeeklyActivity.vue";
import TypographyVariant from "@/components/TypographyVariant.vue";
import { useConfigDietStore } from "@/storage/configDiet.js";
import DietObjective from "@/components/ConfigMacros/DietObjective.vue";
import router from "@/router/index.js";
import gsap from "gsap";

export default {
  name: "ConfigMacros",
  methods: {
    router() {
      return router;
    },
  },
  components: {
    DietObjective,
    TypographyVariant,
    WeeklyActivity,
    AgeSelector,
    WeightSelector,
    HeighSelector,
    GenderSelector,
  },

  data() {
    return {
      tweened: useConfigDietStore().kcal,
    };
  },

  computed: {
    dailyKcal() {
      const gender = useConfigDietStore().getGender();
      const weight = parseFloat(useConfigDietStore().getWidth());
      const height = parseFloat(useConfigDietStore().getHeight());
      const age = useConfigDietStore().getAge();
      const weeklyActivity = parseFloat(
        useConfigDietStore().getWeeklyActivity(),
      );
      const dietObjective = parseInt(useConfigDietStore().getDietObjective());

      let TMB = 0;

      if (gender === "male") {
        TMB = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      } else {
        TMB = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
      }

      const totalKCal = Math.floor(TMB * weeklyActivity + dietObjective);

      useConfigDietStore().kcal = totalKCal;

      return totalKCal;
    },
  },

  watch: {
    dailyKcal(n) {
      gsap.to(this, { duration: 0.5, tweened: Number(n) || 0 });
    },
  },
};

/**
 * - genero
 * - altura
 * -peso
 * -edad
 * -actividad física
 *
 * Aquí se calcularán las calorías diarías asi como los macros.
 *
 * ‌
 *
 * '''
 *
 * Para calcular las calorías diarias en función de las variables proporcionadas por el usuario, puedes utilizar una fórmula básica que tenga en cuenta el peso, la altura, la edad, el género y el nivel de actividad física. Una fórmula comúnmente utilizada es la Ecuación de Harris-Benedict, que estima el metabolismo basal (TMB) y luego lo multiplica por un factor de actividad para obtener las calorías totales diarias. Aquí tienes la fórmula para hombres y mujeres:
 *
 * Para hombres: ���=88.362+(13.397×peso en kg)+(4.799×altura en cm)−(5.677×edad en an˜os)TMB=88.362+(13.397×peso en kg)+(4.799×altura en cm)−(5.677×edad en an˜os)
 *
 * Para mujeres: ���=447.593+(9.247×peso en kg)+(3.098×altura en cm)−(4.330×edad en an˜os)TMB=447.593+(9.247×peso en kg)+(3.098×altura en cm)−(4.330×edad en an˜os)
 *
 * Una vez que tengas el TMB, puedes multiplicarlo por un factor de actividad para obtener las calorías totales diarias. Aquí hay algunos ejemplos de factores de actividad:
 *
 * Sedentario (poco o ningún ejercicio): TMB × 1.2
 * Levemente activo (ejercicio ligero / deportes 1-3 días a la semana): TMB × 1.375
 * Moderadamente activo (ejercicio moderado / deportes 3-5 días a la semana): TMB × 1.55
 * Muy activo (ejercicio duro / deportes 6-7 días a la semana): TMB × 1.725
 * Extremadamente activo (ejercicio muy duro / deportes y trabajo físico diario o dos veces al día, entrenamientos de alto rendimiento): TMB × 1.9
 * '''
 *
 * ‌
 *
 * ‌
 *
 * ‌
 *
 * ‌
 *
 * ‘''’'
 *
 * Perder peso:
 * Proteínas: Entre el 25% y el 35% de las calorías totales.
 * Carbohidratos: Entre el 45% y el 55% de las calorías totales.
 * Grasas: Entre el 20% y el 35% de las calorías totales.
 * En una dieta para perder peso, es común aumentar la ingesta de proteínas para ayudar a mantener la masa muscular mientras se reduce la grasa corporal. Los carbohidratos suelen reducirse moderadamente para controlar la ingesta de calorías.
 * Mantener peso:
 * Proteínas: Entre el 20% y el 30% de las calorías totales.
 * Carbohidratos: Entre el 45% y el 65% de las calorías totales.
 * Grasas: Entre el 20% y el 35% de las calorías totales.
 * Para mantener el peso, es importante equilibrar la ingesta de proteínas, carbohidratos y grasas para satisfacer las necesidades energéticas del cuerpo sin ganar o perder peso.
 * Ganar peso:
 * Proteínas: Entre el 25% y el 35% de las calorías totales.
 * Carbohidratos: Entre el 55% y el 65% de las calorías totales.
 * Grasas: Entre el 20% y el 35% de las calorías totales.
 * En una dieta para ganar peso, se suele aumentar la ingesta de carbohidratos para proporcionar energía adicional, junto con un aumento moderado en la ingesta de proteínas para apoyar el crecimiento muscular.
 * Ganar masa muscular:
 * Proteínas: Entre el 30% y el 40% de las calorías totales.
 * Carbohidratos: Entre el 40% y el 50% de las calorías totales.
 * Grasas: Entre el 20% y el 30% de las calorías totales.
 * En una dieta para ganar masa muscular, es fundamental consumir suficientes proteínas para apoyar el crecimiento y reparación muscular, junto con carbohidratos para proporcionar energía durante los entrenamientos y grasas saludables para mantener la función celular y hormonal.
 * ‘''’''''
 *
 * Una vez hecho esto, permitir al usuario modificar las calorías diarías
 *
 * ‌
 *
 * ‌
 *
 * ‌
 *
 * ‘''’''''''''''''''''
 *
 * El aumento de calorías necesario para ganar peso depende de varios factores individuales, como el metabolismo basal, el nivel de actividad física, la composición corporal actual y los objetivos de peso. Sin embargo, como regla general, se recomienda agregar alrededor de 250 a 500 calorías adicionales por día para promover un aumento de peso gradual y saludable.
 *
 * Agregar 250 a 500 calorías extras por día puede resultar en un aumento de peso de aproximadamente 0.5 a 1 libra (aproximadamente 0.2 a 0.45 kg) por semana. Este aumento de peso gradual es ideal para minimizar la acumulación de grasa y maximizar el crecimiento muscular.
 *
 * Es importante monitorear el progreso con el tiempo y ajustar la ingesta de calorías según sea necesario. Si no se observa un aumento de peso después de varias semanas, se puede aumentar gradualmente la ingesta calórica en incrementos pequeños.
 *
 * Es importante recordar que el aumento de peso saludable se logra a través de un enfoque equilibrado que incluya tanto una ingesta calórica adecuada como una nutrición balanceada. Además, el aumento de peso debe ser gradual y sostenible para evitar efectos negativos para la salud. Siempre es recomendable buscar orientación de un profesional de la salud o un dietista para obtener un plan de alimentación personalizado que se adapte a tus necesidades y objetivos específicos.
 *
 * User
 *
 * You
 *
 * perder peso se rige por la misma norma? de 250 a 500 calorias de deficit=
 *
 * ChatGPT
 *
 * ChatGPT
 *
 * Para perder peso, generalmente se sigue el principio opuesto al de ganar peso. En lugar de agregar calorías, se busca crear un déficit calórico, lo que significa consumir menos calorías de las que se queman. Aquí es donde entra en juego el déficit calórico.
 *
 * Crear un déficit calórico de alrededor de 250 a 500 calorías por día es comúnmente recomendado para promover una pérdida de peso gradual y saludable. Esto puede resultar en una pérdida de peso de aproximadamente 0.5 a 1 libra (alrededor de 0.2 a 0.45 kg) por semana.
 *
 * Sin embargo, es importante tener en cuenta que la magnitud del déficit calórico debe ser apropiada para cada individuo y sus circunstancias específicas. Un déficit demasiado grande puede conducir a una pérdida de peso rápida pero insostenible, así como a una posible pérdida de masa muscular y deficiencias nutricionales. Por otro lado, un déficit demasiado pequeño puede hacer que la pérdida de peso sea más lenta de lo deseado.
 *
 * Es crucial encontrar un equilibrio que permita una pérdida de peso gradual pero sostenible. Además, es importante apoyar el déficit calórico con una dieta nutritiva y equilibrada, así como con ejercicio regular.
 *
 * Como siempre, si estás buscando perder peso, es recomendable buscar orientación de un profesional de la salud o un dietista para obtener un plan de pérdida de peso personalizado y seguro que se adapte a tus necesidades y objetivos específicos.
 *
 * ‘''’''''''''''''
 *
 *

 */
</script>
