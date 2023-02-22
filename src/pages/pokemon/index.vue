<template>
  <PokemonGerado />
</template>

<script lang="ts">
import Vue from "vue";
import PokemonGerado from "../../components/PokemonGerado.vue";

export default Vue.extend({
  components: { PokemonGerado },
  name: "Pokemon",

  created() {
    this.$router.push(`/pokemon/${this.$route.query.id}`)
  }
});
</script>
