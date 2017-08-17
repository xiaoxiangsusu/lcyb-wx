<template>
  <div class="lc_box vc_box">
    <div class="lc_container">
      <ul class="vc_title clear">
        <li :class="active==1 ? 'active':''" @click="active=1">综合排序</li>
        <li :class="active==2 ? 'active':''" @click="active=2">最热</li>
        <li :class="active==3 ? (priceType==1 ? 'active up':'active down'):''"  @click="priceSort" class="type">价格<i></i></li>
        <li :class="active==4 ? 'active':''"  @click="active=4" class="type">分类 <i></i></li>
      </ul>
      <div class="lc_container_box">
        <ul>
          <li>
            <a href="javascript:void(0)" class="clear">
              <img src="" class="lf">
              <div class="rt">
                <p>排排排排排排排排排排排排排排排排排排排排排排排排排排排排排排排排排排排排</p>
                <b>￥69.90</b>
                <div class="rt">
                  <span class="lf">666</span>
                  <span class="lf">777</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <lc_footer :state=2></lc_footer>
  </div>
</template>
<script>
  import lc_footer from '@/components/index/footer'
  export default{
    data(){
      return{
        active:1,
        priceType:1,//降2，增1
      }
    },
    components:{
      lc_footer
    },
    created(){
      var that=this;
    },
    methods:{
      priceSort(){
        if(this.active==3){
          if(this.priceType==1){
            this.priceType=2;
          }else{
            this.priceType=1
          }
        }
        this.active=3;
      }
    }
  }
</script>
<style lang="less" type="text/less">

</style>
