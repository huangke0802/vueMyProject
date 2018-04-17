import Vue from 'vue'
import Layout from './components/layout.vue'
import VueRouter from "vue-router"
import IndexPage from "./pages/index"
import mock from "./mockjs/mock"
import VueResource from "vue-resource"
import Detail from "./pages/detail.vue"

//Vue.config.productionTip = false
//使用路由router
Vue.use(VueRouter);
Vue.use(VueResource);
//实例化一个router
let router = new VueRouter({
  mode : "history",
  routes : [{
    path : "/",
    component : IndexPage
  },
  {
    path : "/detail",
    component : Detail
  }
]
});

new Vue({
  el: '#app',
  router,
  components: {
    Layout
  },

  template: '<layout />'
})
