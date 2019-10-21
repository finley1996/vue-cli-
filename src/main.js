import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Bus from './Eventbus'
Vue.prototype.bus = Bus
new Vue({
  render: h => h(App),
}).$mount('#app')
