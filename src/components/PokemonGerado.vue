<!-- Please remove this file from your project -->
<template>
  <div class="pokemonWrapper">
    <div>
      <div class="pokeInfoWrapper">
        <h1 class="pokemonName">{{ pokemonName }}</h1>
        <img :src="pokemonImg" alt="" />
        <div class="infoWrapper">
          <span>Altura: {{ pokemonHeight }}</span>
          <span>|</span>
          <span>Peso: {{ pokemonWeight }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonGerado",
  props: {
    pokemon: { type: Object, default: () => {} },
  },
  computed: {
    pokemonName() {
      return this.pokemon?.name?.toUpperCase();
    },
    pokemonImg() {
      return this.pokemon?.sprites?.front_default;
    },
    pokemonHeight() {
      if (this.pokemon?.height) {
        return `${this.pokemon?.height}m`;
      }
      return "";
    },
    pokemonWeight() {
      if (this.pokemon?.weight) {
        return `${this.pokemon?.weight}kg`;
      }
      return "";
    },
  },
};
</script>

<style>
.pokemonWrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.pokeInfoWrapper {
  display: flex;
  flex-direction: column;
}

.infoWrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 8px;
}

.pokemonName {
  font-size: 30px;
  font-weight: bold;
}

.button {
  width: 150px;
  height: 300px;
  background-color: #00dc82;
  color: #fff;
}
</style>
