<template>
  <div class="list">
    <PictureItem v-for="(hit, key) of hits" :key="key" :hit="hit" />
  </div>
</template>

<script>
import PictureItem from "./PictureItem.vue";

export default {
  name: "PictureList",
  components: {
    PictureItem,
  },
  computed: {
    hits() {
      return this.$store.state.hits
    }
  }
};
</script>

<style scoped>
.list {
  height: fit-content;
  width: 80%;
  margin: 10vh auto;
  position: relative;
  top: 320px;
  padding: 20px;
  margin-top: 10vh;
}
</style>
