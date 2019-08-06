import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home'
import Signin from '../components/Signin'
import Signup from '../components/Signup'
import Profile from '../components/Profile'
import EditProfile from '../components/EditProfile'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',  name:'Home', component: Home},
    { path: '/signin', name:'Signin',component: Signin},
    { path: '/signup', name:'Signup', component: Signup },
    { path: '/profile',
     name:'Profile', 
     component: Profile ,
     metadata:{
       requiredAuth:true
     }
    },
    { path: '/edit', name:'EditProfile', component: EditProfile },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

