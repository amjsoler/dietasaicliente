<template>
  <div>
    <label class="typo__label">Tagging</label>
    <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";

export default {
  name: 'ExcludeIngredient',
  components: {Multiselect},

  data () {
    return {
      value: [
      ],
      options: [
        {name: '🥜', tag: 'Cacahuete', code: 'caca'},
        {name: '🌰', code: 'fs'},
        {name: '🦀', code: 'mc'},
        { name: '🐟', code: 'pc' },
        { name: '🥛', code: 'lc' },
        { name: '🥚', code: 'js' },
        { name: '🌾', code: 'tg' },
        { name: '🫛', code: 'sj' }
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