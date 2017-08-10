<template>
  <div id="lc_footer">
    <ul class="clear">
      <li :class="active==1 ? 'active':''" @click="active=1">
        <router-link to=""><i class="footer_01"></i>首页</router-link>
      </li>
      <li :class="active==2 ? 'active':''" @click="active=2">
        <router-link to=""><i class="footer_02"></i>视频中心</router-link>
      </li>
      <li :class="active==3 ? 'active':''" @click="active=3">
        <router-link  to=""><i class="footer_03"></i>考试中心</router-link>
      </li>
      <li :class="active==4 ? 'active':''" @click="active=4">
        <router-link to=""><i class="footer_04"></i>我的</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default({
    data(){
      return{
        active:1,
      }
    },
    methods:{

    }

  })
</script>
<style lang="less" type="text/less">

</style>
