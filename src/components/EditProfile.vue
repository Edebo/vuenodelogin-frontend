<template>
    <div class='container mt-5'>
        <div class="jumbotron">
            
            <div class="col-sm-8 mx-auto my-4">
                    <h1 class="display-4 text-center">Edit Profile</h1>
            </div>
            
 
        <form enctype="multipart/form-data" v-on:submit.prevent="submit">
         
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" v-model="email" class="form-control" name="email" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" v-model="name" class="form-control" name="name" placeholder="Name">
          </div>
        <div class="custom-file mb-3">
            
            <input type="file" class="custom-file-input" id="file" ref='file' @change="selectFile">
            <label class="custom-file-label" for="file">{{file.name}}</label>
        </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block" v-on:submit.prevent="submit()">Submit</button>
        </form>
   
                                
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
import axios from 'axios'
// import jwtDecode from 'jwt-decode'
// import router from '../router'
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
            file:{
              name:'Upload picture'
            },
            id:''
        }
        
    },
    mounted () {
    // axios.put(`http://localhost:8000/api/user/:${this.email}`
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
   this.id =localStorage.getItem('id')
   /* eslint-disable-next-line*/
     console.log(this.id)

  },
  methods:{
   
    selectFile(){


            this.file=this.$refs.file.files[0]
             /* eslint-disable */
            console.log(this.file)
    },

    submit(){
      let token = localStorage.getItem('usertoken');
        const formData= new FormData()
        formData.append('picture',this.file)
        formData.append('email',this.email)
        formData.append('name',this.name)
         /* eslint-disable */
        console.log(formData)

        axios.post(`http://localhost:8000/api/user/${this.id}`,formData,  {
    headers: {
        'Content-Type': 'multipart/form-data',
        'authorization':`Bearer ${ token }`
    }
  })
        .then(res=>{
          /* eslint-disable */
          console.log(res)
        })   
        .catch(err=>{

        })
    }
  }
}
</script>