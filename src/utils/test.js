import axios from 'axios'

export default {
  imgCode(){
    this.$http('Admin/Login/get_verify',{
    }).then((res)=>{
      console.log(res)
    })
  },
  login(){
    axios.post({
      url:'Admin/Login/login',
      method:'post',
      data:{
        username:'admin',
        password:'123456',
        school_identify:'001',
        verify:'111'
      }
    }).then((res)=>{
      console.log(res)
    })
  }
}
