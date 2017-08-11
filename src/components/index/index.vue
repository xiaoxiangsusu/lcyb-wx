<template>
  <div class="lc_box">
    <div class="lc_container">
      <div class="lc_container_box clear" style="margin-bottom: 0">
        <!--<img src="../../assets/image/logo.png" class="logo lf">-->
        <img src="" class="logo lf">
        <router-link class="index_search rt" to="/search">
          <i></i>
          <span>搜索视频</span>
        </router-link>
      </div>
    </div>
    <div class="lc_slider">
      <yd-slider autoplay="4000">
        <yd-slider-item v-for="item in sliderList">
          <a :href="item.src">
            <img :src="item.img">
          </a>
        </yd-slider-item>
      </yd-slider>
    </div>
    <div class="lc_container">
      <div class="lc_container_box">
        <ul class="index_list clear">
          <li>
            <router-link to="/">
              <img src="../../assets/image/icon01.png" alt="">
              <p>我的专业</p>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img src="../../assets/image/icon02.png" alt="">
              <p>我的视频</p>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img src="../../assets/image/icon03.png" alt="">
              <p>错题集</p>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img src="../../assets/image/icon04.png" alt="">
              <p>消息</p>
            </router-link>
          </li>
        </ul>
        <div class="index_notice">
          <i></i>
          <p>公告：{{notice}}</p>
        </div>
      </div>
    </div>
    <div class="lc_container">
      <div class="lc_container_box">
        <h1>推荐视频</h1>
        <ul class="img_list clear">
          <li v-for="item in videoList">
            <router-link to="/videoDetail">
              <img :src="item.img" alt="">
              <p>{{item.vname}}</p>
              <b>￥{{item.vprice}}</b>
              <div class="rt">
                <span class="lf">{{item.like}}</span>
                <span class="lf">{{item.commit}}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <lc_footer></lc_footer>
  </div>
</template>
<script>
  import Mock from '@/assets/js/mock'
  import $ from 'jquery'
  import lc_footer from '@/components/index/footer'
  export default{
    data(){
      return{
        videoList:[],
        sliderList:[],
        notice:''
      }
    },
    components:{
      lc_footer
    },
    created(){
      var that=this;
     $.getJSON('http://jiaozi.com/index/video',(res)=>{
       that.videoList=res.data;
     });
     $.getJSON('http://jiaozi.com/slider',(res)=>{
       that.sliderList=res.data;
     });
     $.getJSON('http://jiaozi.com/notice',(res)=>{
       that.notice=res.data.notice;
     })
    },
    methods:{

    },
  }
</script>
<style lang="less" type="text/less">

</style>
