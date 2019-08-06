<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
       <!-- <div v-if="message" class="alert alert-success">You have sucessfully signed up</div> -->
        <form v-on:submit.prevent="register">
          <h1 class="h3 mb-3 font-weight-normal">Register</h1>
          
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" v-model="name" class="form-control" name="name" placeholder="Enter your Name">
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" v-model="email" class="form-control" name="email" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" name="password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block" v-on:submit.prevent="register()" >Register!</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
  data () {
    return {
     
      name: '',
      email: '',
      password: '',
      message:''
    }
  },
  methods: {
    register () {
      axios.post('http://localhost:8000/api/signup',
        {
          
            name: this.name,
          email: this.email,
          password: this.password
        }
      ).then((res) => {
        // const user=res.data.user
        // localStorage.setItem('token',user.token)
          /* eslint-disable */
        console.log(res.data.user)/* eslint-disable */ 
        router.push({ name: 'Signin' })
      }).catch((err) => {
        console.log(err)
// eslint-disable-next-line 

      })
    }
  }
}
</script>