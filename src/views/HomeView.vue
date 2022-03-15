<template>
  <div>
    <div class="wrapper">
      <div class="search">
        <input id="wordBox" placeholder="Enter a word" v-model="searchText" />
      </div>
    </div>
    <WordInfo :info="info" />
  </div>
</template>

<script>
import WordInfo from "../components/WordInfo.vue";
let homeView = {
  name: "Home-View",
  components: {
    WordInfo,
  },
  data() {
    return {
      searchText: "",
      info: {},
    };
  },
  watch: {
    searchText: async function (s) {
      let json = await this.$root.$data.getApiInfo(s);
      this.info = json;
    },
  },
  methods: {
    async wordInfo() {
      let json = await this.$root.$data.getApiInfo(this.searchText);
      this.info = json;
    },
  },
};
export default homeView;
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

input {
  font-size: 20px;
  border: none !important;
  width: 100%;
  height: 40px;
  background-color: #d2ffff;
  color: #8a80d9;
  text-align: center;
  border-radius: 20px;
}
</style>
