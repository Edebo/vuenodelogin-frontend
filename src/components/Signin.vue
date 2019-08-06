  <template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="login">
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" v-model="email" class="form-control" name="email" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" name="password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block" v-on:submit.prevent="login()">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios.post('http://localhost:8000/api/signin',
        {
          email: this.email,
          password: this.password
        }
      ).then((res) => {
         /* eslint-disable */
        /* eslint-disable */
        console.log(res)
        localStorage.setItem('usertoken', res.data.token)
        localStorage.setItem('email',res.data.email)
        localStorage.setItem('name',res.data.name)
        localStorage.setItem('picture',res.data.picture)
        localStorage.setItem('id',res.data.id)
        this.email = ''
        this.password = ''
        
        router.push({ name: 'Profile' })
      }).catch((err) => {
        /* eslint-disable */
        /* eslint-disable */
         console.log(err)
      })
      this.emitMethod()
    },
    emitMethod () {
      EventBus.$emit('logged-in', 'loggedin')
    }
  }
}
</script>