<template>
  <div class="space-y-6">
    <typography-variant variant="h2">
      Resumen
    </typography-variant>

    <section>
      <typography-variant variant="h3">
        Dieta
      </typography-variant>


      <typography-variant variant="p">
        Comidas incluídas: {{useConfigDietStore().MealsIncluded.toString()}}
      </typography-variant>

      <typography-variant variant="p">
        Tipo de recetas: {{useConfigDietStore().getHealthyness()}}
      </typography-variant>

      <typography-variant variant="p">
        Máximo tiempo de preparación por receta: {{useConfigDietStore().getMaxTime()}} mins.
      </typography-variant>

      <typography-variant variant="p">
        Alergias: {{useConfigDietStore().getAllergies().toString()}}
      </typography-variant>

      <typography-variant variant="p">
        Restricciones alimentarias: {{useConfigDietStore().getFoodRestrictions().toString()}}
      </typography-variant>

      <typography-variant variant="p">
        Ingredientes excluidos: {{useConfigDietStore().getIngredientsExcluded().toString()}}
      </typography-variant>
    </section>

    <section>
      <typography-variant variant="h3">
        Cálculo de calorías
      </typography-variant>

      <typography-variant variant="p">
        Género: {{useConfigDietStore().getGender()}}
      </typography-variant>

      <typography-variant variant="p">
        Edad: {{useConfigDietStore().getAge()}}
      </typography-variant>

      <typography-variant variant="p">
        Peso: {{useConfigDietStore().getWidth()}} kg.
      </typography-variant>

      <typography-variant variant="p">
        Altura: {{useConfigDietStore().getHeight()}} cm.
      </typography-variant>

      <typography-variant variant="p">
        Nivel de actividad: {{useConfigDietStore().getWeeklyActivity()}}
      </typography-variant>

      <typography-variant variant="p">
        Objetivo: {{useConfigDietStore().getDietObjective()}}
      </typography-variant>
    </section>
  </div>


</template>

<script>

import TypographyVariant from "@/components/TypographyVariant.vue";
import { useConfigDietStore } from "../storage/configDiet.js";

export default {
  name: 'ConfigSummary',
  methods: { useConfigDietStore },
  components: { TypographyVariant }
}

/*
Información de usuario y ajustes de dieta:
Nombre del usuario.
Objetivo de la dieta (perder peso, mantener, ganar peso, ganar masa muscular).
Cantidad de calorías diarias calculadas.
Porcentajes de macronutrientes ajustados según el objetivo de la dieta.
Cualquier preferencia de alimentos o restricción dietética proporcionada por el usuario.
Resumen de ajustes de dieta:
Gráficos o tablas resumiendo los porcentajes de proteínas, carbohidratos y grasas en la dieta.
Información sobre el número de comidas diarias recomendadas y sus horarios (si aplica).
Otros detalles relevantes de la dieta según las preferencias del usuario.
Opciones de interacción:
Botón "Borrar y empezar de nuevo": Permite al usuario eliminar toda la información ingresada y comenzar desde cero.
Botón "Enviar dieta": Envía la solicitud de dieta al servidor para su procesamiento y generación.
Mensaje de confirmación antes de enviar la dieta al servidor para asegurar que el usuario esté listo para continuar.
Opcional: Resumen visual:
Gráficos o imágenes que representen la distribución de macronutrientes en la dieta.
Iconos o imágenes representativas del objetivo de la dieta (por ejemplo, una balanza para perder peso, pesas para ganar masa muscular, etc.).
Instrucciones adicionales o consejos:
Breve mensaje con instrucciones sobre qué hacer después de enviar la solicitud de dieta (por ejemplo, "¡Revise su bandeja de entrada para recibir su dieta personalizada!").
Consejos generales sobre cómo seguir y mantener la dieta.
Asegúrate de que la pantalla resumen sea fácil de leer y que todos los detalles importantes estén claramente visibles. Esto ayudará a garantizar que el usuario esté completamente informado antes de confirmar y enviar su solicitud de dieta.
 */
</script>