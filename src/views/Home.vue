<template>
  <div class="home">
    <Header />
    <PictureList />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "@/components/Nav/NavHeader.vue";
import PictureList from "@/components/Picture/PictureList.vue";
import { getHits } from "@/services";

export default defineComponent({
  name: "Home",
  components: {
    Header,
    PictureList,
  },
  created() {
    getHits().then((data) => this.$store.commit("getHits", data.hits));
  },
});
</script>

<style>
.home {
  height: fit-content;
}
</style>
