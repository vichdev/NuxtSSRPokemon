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
  name: "Pokemon",
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
    const response = await API.get(route.params.id, {}).then((res) => {
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
          hid: "image",
          name: "image",
          property: "og:image:secure_url",
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
    const response = await API.get(`${this.$route.query.id}`, {}).then(
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
