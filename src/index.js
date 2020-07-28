
import Vue from 'vue'
import VueResource from 'vue-resource'
import index from './index.vue'
import 'lib-flexible'
import './lib/dsbridge.js'

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { index },
  template: '<index/>'
})

