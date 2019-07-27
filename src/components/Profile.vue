<template>
    <div class='container'>
        <div class="jumbotron">
            
            <div class="col-sm-8 mx-auto">
                    <h1 class="display-4 text-center">Profile</h1>
            </div>
            
            <table class="table col-md-6 mx-auto">
                <tr>
                    <td>Name<td>
                    <td>{{name}}</td>
                 </tr>

                <tr>
                        <td>Email<td>
                        <td>{{email}}</td>
                </tr>

                 <tr>
                        <td>Picture<td>
                        <td>{{picture?<img src=picture/>:<img src='' alt='your profile picture should be here'/>}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import jwtDecode from 'jwt-decode'

export default {
    data(){
        const token=localStorage.usertoken
        const decode=jwtDecode(token)

        return{
           name:decode.name,
           email:decode.email,
           picture:decode.picture

        }
        
    },
    mounted () {
    axios.get(`/api/user/:${this.email}`
    ).then((res) => {
      
      this.name = res.user.name
      this.email = res.user.email
      this.picture=res.user.picture
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>