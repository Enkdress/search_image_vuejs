<template>
  <div class="header">
    <h1>Search for images</h1>
    <SearchBar @search="searchData" />
  </div>
</template>

<script>
import SearchBar from "./NavSearchBar.vue";

export default {
  name: "Header",
  components: {
    SearchBar,
  },
  emits: ["search-data"],
  methods: {
    searchData(userInput) {
      this.$emit("search-data", userInput);
    },
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
</style>
