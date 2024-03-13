<template>
  <h1>/*Ingredients*/</h1>
  <p v-for="ingrediente in ingredientes" :key="ingrediente">
    {{ `insert into ingredients (name, unit) values ('${ingrediente.nombre}', '${ingrediente.unidad}');` }}
  </p>

<h1>/*Recipes*/</h1>
  <p
   v-for="recipe in recipes" :key="recipe">
    {{ recipe }}
  </p>
</template>

<script>

import json from "/recipes.json"

export default {
  name: "DameInserts",

  data() {
    return {
      recipes: [],
      ingredientes: []
    }
  },

  mounted() {
    //Saco los ingredientes
    json.forEach((recipe) => {
      /*    $table->id();
            $table->string('name');
            $table->string('ingredients');
            $table->string('steps');
            $table->integer("kcla");
            $table->integer("protein");
            $table->integer("carbs");
            $table->integer("fat");
            $table->enum("healthyness", [0, 1, 2]);
            $table->integer("preparation_time");
            $table->integer("difficulty");
            $table->string("allergens");
            $table->string("food_restrictions");
            $table->string("day_moment");
            $table->timestamps();

       */
      this.recipes.push(`insert into recipes (name, ingredients, steps, kcal, protein, carbs, fat, healthyness, preparation_time, difficulty, allergens, food_restrictions, day_moment) values ('${recipe.nombre}', '${JSON.stringify(recipe.ingredientes)}', '${JSON.stringify(recipe.pasos)}', ${recipe.kcal}, ${recipe.proteinas}, ${recipe.hidratos}, ${recipe.grasas}, ${recipe.saludable}, ${recipe.tiempo_preparacion_minutos}, ${recipe.dificultad}, '${recipe.alergenos.join(", ")}', '${recipe.restricciones_alimentarias.join(", ")}', '${recipe.momento_del_dia.join(", ")}');`);



      recipe.ingredientes.forEach((ingrediente) => {
        if(!this.ingredientes.find((i) => i.nombre === ingrediente.nombre)){
          this.ingredientes.push(ingrediente)
        }
      })
    })
  }
}
</script>