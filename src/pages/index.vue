<template>
  <Tutorial :pokemon="pokemon" />
</template>

<script lang="ts">
import Vue from "vue";
import API from "../services/api";

interface IPokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
}

export default Vue.extend({
  name: "IndexPage",
  data() {
    return {
      pokemon: {} as Partial<IPokemon>,
    };
  },
  head() {
    return {
      title: this.pokemon?.name?.toUpperCase(),
      meta: [
        {
          hid: "title",
          name: "title",
          property: "og:title",
          content: `${this.pokemon?.name?.toUpperCase()}`,
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://poke-napista.netlify.app`,
        },
        {
          hid: "image",
          name: "image",
          property: "og:image:secure_url",
          content: `${this.pokemon?.sprites?.front_default}`,
        },
        {
          hid: "description",
          name: "description",
          property: "og:description",
          content: `Informação detalhada sobre o pokemon ${this.pokemon?.name}`,
        },
      ],
    };
  },
  computed: {
    nomeDePokemonAleatorio() {
      const nomes = [
        "ditto",
        "pikachu",
        "charizard",
        "squirtle",
        "charmander",
        "beedrill",
        "lugia",
      ];
      return nomes[Math.floor(Math.random() * nomes.length)];
    },
  },

  methods: {
    async getPokemon() {
      await API.get(this.nomeDePokemonAleatorio, {})
        .then((res) => {
          console.log(res?.data);
          this.pokemon = res?.data;
        })
        .catch((e) => console.log(e));
    },
  },
  async mounted() {
    await this.getPokemon();
  },
});
</script>
