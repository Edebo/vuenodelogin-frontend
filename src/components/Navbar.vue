<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <router-link class="nav-link" to='/'>Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item" v-if="auth==''">
        <router-link class="nav-link" to='/signin'>Signin<span class="sr-only"></span></router-link>
      </li>
      <li class="nav-item" v-if="auth==''">
        <router-link class="nav-link" to='/signup'>Signup <span class="sr-only"></span></router-link>
      </li>
      <li class="nav-item" v-if="auth=='loggedin'">
        <router-link class="nav-link" to='/profile'>Profile<span class="sr-only"></span></router-link>
      </li>
      <li class="nav-item" v-if="auth=='loggedin'">
        <a class="nav-link" v-on:click='logout'>Logout <span class="sr-only"></span></a>
      </li>
    </ul>
    
  </div>
</nav>
</template>

<script>
import EventBus from './EventBus'
EventBus.$on('logged-in',test=>{
  /* eslint-disable */
    console.log(`${test}`)
})

export default {
    data(){
        return {
            auth:'',
            user:''
        }
    },
    methods:{
        logout(){
            localStorage.removeItem('usertoken')
        }
    },
mounted(){
    EventBus.$on('logged-in',status=>{
    this.auth=status
})
}
}
</script>