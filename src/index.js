import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import './lib/dsbridge.js'

Vue.use(VueResource)

const app = new Vue({
  ...App
})

app.$mount('#app');

