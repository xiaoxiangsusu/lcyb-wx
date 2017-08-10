<template>
  <div id="app">
    <router-view></router-view>
    <lc_footer></lc_footer>
  </div>
</template>

<script>
  import lc_footer from './components/index/footer'
export default {
  name: 'app',
  components:{
    lc_footer
  }
}
</script>

<style>
  #app{
    width: 100%;
  }
</style>
