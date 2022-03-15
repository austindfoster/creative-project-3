import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false

let data = {
  wordInfo: mock,
  getApiInfo(word) {
    let url = `https://wordsapiv1.p.rapidapi.com/words/${word}`;
    let x = fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key":
          "2971d5d670msha30de530977fbbap1e8aa1jsnbf567fc4d99b",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        return json;
      })
      .catch((err) => {
        console.error(err);
      });
    return x;
  },
}

let app = new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

console.log(app.wordInfo)
