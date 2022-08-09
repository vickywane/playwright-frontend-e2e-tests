<template>
  <div class="card">
    <img class="character-img" :alt="name" :src="image" />

    <div class="details-container">
      <h2 id="character-name">
        <a :href="link"> {{ name }} </a>
      </h2>
      <p id="character-specie">{{ specie }}</p>
      <p id="character-type">{{ type }}</p>
      <p id="character-gender">{{ gender }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterItem",
  props: {
    name: String,
    specie: String,
    link: String,
    type: String,
    gender: String,
    image: String,
  },
};
</script>
