import Vue from 'vue'
import Router from 'vue-router'
import headr from '@/components/head'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: "head",
      components: {
        default:headr,
      }
    }
  ]
})
