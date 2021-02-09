<template>
  <div class="list">
    <PictureItem v-for="(hit, key) of hits.hits" :key="key" :hit="hit" />
  </div>
</template>

<script>
import { inject, onUpdated } from "vue";
import PictureItem from "./PictureItem.vue";

export default {
  name: "PictureList",
  components: {
    PictureItem,
  },

  setup() {
    const data = inject("data");

    onUpdated(() => {
      const data = inject("data");
      console.log(data)
    });

    return {
      hits: data,
    };
  },
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
