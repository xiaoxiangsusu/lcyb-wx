import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import videoDetail from '@/module/video/videoDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path:'/index',
      component:Index
    },
    {
      path:'/videoDetail',
      component:videoDetail
    }
  ]
})
