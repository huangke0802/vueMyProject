import Vue from 'vue'
import Layout from './components/layout.vue'
import VueRouter from "vue-router"
import IndexPage from "./pages/index"

//Vue.config.productionTip = false
//使用路由router
Vue.use(VueRouter);

//实例化一个router
let router = new VueRouter({
  mode : "history",
  routes : [{
    path : "/",
    component : IndexPage
  }]
});

new Vue({
  el: '#app',
  router,
  components: {
    Layout
  },

  template: '<layout />'
})
