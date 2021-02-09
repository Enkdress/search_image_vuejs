<template>
  <div class="home">
    <Header @search-data="getData" />
    <PictureList />
  </div>
</template>

<script>
import { provide, reactive, defineComponent } from "vue";
import Header from "@/components/Nav/NavHeader.vue";
import PictureList from "@/components/Picture/PictureList.vue";

export default defineComponent({
  name: "Home",
  components: {
    Header,
    PictureList,
  },
  setup() {
    let data = reactive({});

    const getData = (userInput = null) => {
      const query = userInput ? userInput.split(" ").join("+") : null;
      const isValidQuery = query != null && query.length <= 100;
      fetch(
        `https://pixabay.com/api/?key=13055488-7e28d181f3875eee86a83eee3${isValidQuery ? '&q='+query : ''}&orientation=horizontal`
      )
        .then((res) => res.json())
        .then((_data) => {
          data.hits = _data.hits;
        });
    };
    getData();
    provide("data", data);

    return {
      getData,
    };
  },
});
</script>

<style>
.home {
  height: fit-content;
}
</style>
