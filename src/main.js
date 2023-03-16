import Vue from 'vue'

import router from './router'
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.use(ElementUI)
// Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
