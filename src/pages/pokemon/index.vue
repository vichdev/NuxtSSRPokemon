<template>
  <pokemon-gerado />
</template>

<script lang="ts">
import Vue from "vue";
import pokemonGerado from "../../components/PokemonGerado.vue";
export default Vue.extend({
  components: { pokemonGerado },
  name: "Pokemon",
});
</script>
