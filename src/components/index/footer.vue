<template>
  <div id="lc_footer">
    <ul>
      <li v-for="item in list" :class="$route.path==item.path ? 'active':''">
        <router-link :to="item.path"><img :src="$route.path==item.path ? item.img:item.imgActive" alt="">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import { routeList } from '@/router/index'
  export default({
    props:['state'],
    data(){
      return{
        active:this.state,
        list:routeList
      }
    },
    methods:{

    }

  })
</script>
<style lang="less" type="text/less">

</style>
