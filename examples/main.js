import Vue from 'vue'
import App from './App.vue'
import VueFeargadhFormUi from './../packages/index'





Vue.use(VueFeargadhFormUi);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
