import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'src/components/HelloWorld'
import demo from 'src/components/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    }
  ]
})
