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
  async asyncData(): Promise<{
    pokemon: {
      name: string;
      sprites: { front_default: string };
    };
  }> {
    const nomes = [
      "ditto",
      "pikachu",
      "charizard",
      "squirtle",
      "charmander",
      "beedrill",
      "lugia",
    ];
    const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    const response = await API.get(nomeAleatorio, {}).then((res) => {
      console.log(res?.data);
      return {
        pokemon: {
          name: res.data.name,
          sprites: {
            front_default: res.data.sprites?.front_default,
          },
        },
      };
    });
    return response;
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
          property: "og:image",
          content: `${this.pokemon?.sprites?.front_default}`,
        },
        {
          property: "og:image:type",
          content: "image/png",
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
  async fetch() {
    const nomes = [
      "ditto",
      "pikachu",
      "charizard",
      "squirtle",
      "charmander",
      "beedrill",
      "lugia",
    ];
    const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    const response = await API.get(nomeAleatorio, {}).then((res) => {
      console.log(res?.data);
      return {
        name: res.data?.name,
        sprites: {
          front_default: res.data.sprites?.front_default,
        },
        height: res.data?.height,
        weight: res.data?.weight,
      };
    });
    this.pokemon = response;
  },
});
</script>
