<template>
  <div>
    <div>
      <p v-if="characters.length < 1">Loading all characters</p>

      <div v-else>
        <h1 id="title" className="title">Rick and Morty</h1>

        <ul className="list">
          <li v-for="item in characters" :key="item.id">
            <Character
              :image="item.image"
              :name="item.name"
              :type="item.type"
              :gender="item.gender"
              :specie="item.specie"
              :link="item.origin.url"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Character from "./components/Character.vue";
import { ApiClient } from "react-components/src/apiClient";
import "react-components/src/styles/characters.css";

export default {
  name: "App",
  data: () => ({
    characters: [],
    client: new ApiClient(),
  }),
  methods: {
    fetchData: async function (text) {
      try {
        const characters = await this.client.fetchCharacter(text);

        this.characters = characters;
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted: function () {
    this.fetchData();
  },
  components: {
    Character,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
