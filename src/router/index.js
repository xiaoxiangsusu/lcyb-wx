import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import videoCenter from '@/module/video/index'
import videoDetail from '@/module/video/videoDetail'
import Search from '@/module/search/index'
import exam from '@/module/exam/index'
import center from '@/module/center/index'

Vue.use(Router)

import {icon01,icon01Active,icon02,icon02Active,icon03,icon03Active,icon04,icon04Active} from '@/assets/image/icon'
export const routeList=[
  {
    path: '/',
    component: Index,
    name:'首页',
    img:icon01,
    imgActive:icon01Active
  },
  {
    path:'/videoCenter',
    component:videoCenter,
    name:'视频中心',
    img:icon02,
    imgActive:icon02Active
  },
  {
    path:'/exam',
    component:exam,
    name:'考试中心',
    img:icon03,
    imgActive:icon03Active
  },
  {
    path:'/center',
    component:center,
    name:'个人中心',
    img:icon04,
    imgActive:icon04Active
  }
];
export const routeMap=[
  {
    path:'/videoDetail',
    component:videoDetail,
    img:icon02,
    imgActive:icon02Active
  },
  {
    path:'/search',
    component:Search
  },
];
export default new Router({
  routes: [
    ...routeList,
    ...routeMap
  ]
})
