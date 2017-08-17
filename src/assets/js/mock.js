import Mock from 'mockjs'

(function(){
  // 首页视频列表
  Mock.mock('http://jiaozi.com/index/video',{
    code:200,
    'data|4':[{
      vname:'@csentence(5)',
      vprice:'@float(40,200,2,2)',
      like:'@natural(1, 100)',
      commit:'@natural(1,500)',
      img:"@image('170x135', '#FF6600')",
    }]
  });
  Mock.mock('http://jiaozi.com/slider',{
    code:200,
    'data|3':[{
      src:'@url',
      img:"@image('375x200', '#FF6600')"
    }]
  });
  Mock.mock('http://jiaozi.com/notice',{
    code:200,
    'data':{
      notice:'@csentence(100)'
    }
  });
  //视频中心首页
  Mock.mock('http://jiaozi.com/videoCenter',{
    code:200,
    'data | 10':{
      img:"@image('170x100','#FF6600')",
      vname:'@csentence(5)',
      vprice:'@float(40,200,2,2)',
      like:'@natural(1, 100)',
      commit:'@natural(1,500)',
    }
  })
})();
export default {

}
