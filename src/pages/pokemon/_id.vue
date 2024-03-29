<template>
  <PokemonGerado :pokemon="pokemon" />
</template>

<script lang="ts">
import Vue from "vue";
import API from "../../services/api";
import PokemonGerado from "../../components/PokemonGerado.vue";

interface IPokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
}

export default Vue.extend({
  components: { PokemonGerado },
  name: "PokemonId",
  data() {
    return {
      pokemon: {} as Partial<IPokemon>,
    };
  },
  async asyncData({ route, params }): Promise<{
    pokemon: {
      name: string;
      sprites: { front_default: string };
    };
  }> {
    const response = await API.get(`${route.params.id}`, {}).then((res) => {
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
          content: `https://poke-napista.netlify.app/pokemon/${this.pokemon?.name}`,
        },
        {
          property: "og:image",
          itemprop: "image",
          content: `https://raw.githubusercontent.com/vichdev/club-napista/master/src/assets/1_11zon.jpg`,
        },
        {
          property: "og:image:secure_url",
          itemprop: "image",
          content: `https://raw.githubusercontent.com/vichdev/club-napista/master/src/assets/1_11zon.jpg`,
        },
        {
          hid: "type",
          name: "type",
          property: "og:type",
          content: `website`,
        },
        {
          property: "og:image:width",
          content: "250",
        },
        {
          property: "og:image:height",
          content: "250",
        },
        {
          property: "og:image:type",
          content: "image/jpg",
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
    const response = await API.get(`${this.$route.params.id}`, {}).then(
      (res) => {
        return {
          name: res.data?.name,
          sprites: {
            front_default: res.data.sprites?.front_default,
          },
          height: res.data?.height,
          weight: res.data?.weight,
        };
      }
    );
    this.pokemon = response;
  },
});
</script>
