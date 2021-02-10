<template>
  <div class="searchbar">
    <input
      @keypress.enter="search"
      tabindex="0"
      type="text"
      placeholder="eg. Cars"
      id="search"
      v-model="userInput"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { getHits } from "@/services";

export default {
  data() {
    return {
      userInput: ref(""),
    };
  },
  name: "SearchBar",
  methods: {
    search() {
      getHits(this.userInput).then((data) => this.$store.commit("getHits", data.hits));
    },
  },
};
</script>

<style scoped>
#search {
  width: 40%;
  height: 2.5em;
  padding: 10px;
  color: #555;
  border: none;
  border-radius: 20px;
  text-indent: 5px;
  outline: none;
  position: absolute;
  bottom: -20px;
  transform: translate(-50%, 0);
  font-size: 20px;
  box-shadow: 0 0 20px 0 rgb(175, 175, 175);
}

#search:focus {
  box-shadow: 0 0 20px 5px #00b4db;
}
</style>
