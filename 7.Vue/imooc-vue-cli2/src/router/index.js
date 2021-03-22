import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/First'
import A from '@/components/A'
import A1 from '@/components/A1'
import B from '@/components/B'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: First,
      children: [
        {
          path: '/a',
          component: A
        },
        {
          path: '/b',
          component: B
        },
        {
          path: '/a1',
          component: A1
        }
      ]
    }
  ]
})
