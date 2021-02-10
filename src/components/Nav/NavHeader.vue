<template>
  <div class="header">
    <a target="blank" href="https://github.com/Enkdress/search_image_vuejs" id="source-code">
      <img src="https://img.icons8.com/fluent/344/github.png"/>
      <span>source</span>
    </a>
    <h1>Search for images</h1>
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from "./NavSearchBar.vue";

export default {
  name: "Header",
  components: {
    SearchBar,
  },
};
</script>

<style scoped>
.header {
  background: rgba(53, 147, 209, 0.747);
  backdrop-filter: blur(2em);
  height: 300px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
}

.header h1 {
  color: #eee;
  font-size: 3em;
  transform: translate(0, 150px);
}

#source-code {
  position: absolute;
  z-index: 2;
  display: flex;
  right: 0;
  height: 20px;
  padding: 0 20px;
  flex-direction: column;
  align-items: center;
  color: #f4f4f4;
  text-decoration: none;
}

#source-code img {
  max-width: 50px;
}
</style>

