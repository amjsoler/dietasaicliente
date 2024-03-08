<template>
  <div>
    <label class="typo__label">Tagging</label>
    <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="foodRestrictions" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  name: 'FoodRestriction',
  components: {Multiselect},

  data() {
    return {
      value: [],
      foodRestrictions: [
        { name: 'Recetas vegetariana', value: false },
        { name: 'Recetas Vegana', value: false },
        { name: 'Recetas sin gluten', value: false },
        { name: 'Recetas sin lácteos', value: false }
      ]
    }
  },

  methods: {
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    }
  }
}
</script>