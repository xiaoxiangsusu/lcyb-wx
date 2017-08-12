import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import videoCenter from '@/module/video/index'
import videoDetail from '@/module/video/videoDetail'
import Search from '@/module/search/index'

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
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/videoCenter',
      component:videoCenter
    }
  ]
})
