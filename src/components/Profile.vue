<template>
    <div class='container'>
        <div class="jumbotron">
            
            <div class="col-sm-8 mx-auto mt-5">
                    <h1 class="display-4 text-center">Profile</h1>
            </div>
            
            <table class="table col-md-6 mx-auto">

               <tr>
                        <td>Picture</td>
                          <!-- <p>{{picture===null?<img src='../assets/avatar.png'/>:<img src='' alt='your profile picture should be here'/>}}</p> -->
                        <td ><img src='../assets/avatar.png' class='image'/></td>
                        <!-- <td ><img src='' alt='your profile picture should be here'/></td> -->
                </tr>
                <tr>
                    <td>Name<td>
                    <td>{{name}}</td>
                 </tr>

                <tr>
                        <td>Email<td>
                        <td>{{email}}</td>
                </tr>
                <button class="btn btn-lg btn-primary btn-block" v-on:click.prevent="edit()">Edit Profile</button>
                
            </table>
        </div>
    </div>
</template>

<style>
.image{
  display: inline-block;
  width:50px;
  height:50px;
  border-radius: 50%;
}
</style>

<script>
// import axios from 'axios'
// import jwtDecode from 'jwt-decode'
import router from '../router'
export default {
    data(){
        // const token=localStorage.usertoken
        // const decode=jwtDecode(token)

        return{
          //  name:decode.name,
          //  email:decode.email,
          //  picture:decode.picture
            name:'',
            email:'',
            picture:'',
            src:''
        }
        
    },
    mounted () {
    // axios.get(`http://localhost:8000/api/user/:${this.email}`
    // ).then((res) => {
      
    //   this.name = res.user.name
    //   this.email = res.user.email
    //   this.picture=res.user.picture
    // }).catch((err) => {
    //   /* eslint-disable */
    //   console.log(err)
    // })
   this.email =localStorage.getItem('email')
   this.name =localStorage.getItem('name')
   this.picture =localStorage.getItem('picture')
   this.src=this.picture===null?'../assets/avatar.png':this.picture
   /* eslint-disable */
   console.log(this.picture)
  },
  methods:{
    edit(){
        router.push({ name: 'EditProfile' })
    }
  }
}
</script>