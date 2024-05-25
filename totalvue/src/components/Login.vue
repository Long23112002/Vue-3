<template>
    <div class="login">
        <h1>Login</h1>
        <input v-model="username" type="text" placeholder="username">
        <input v-model="password" type="password" placeholder="Password">
        <span>{{username}}</span>
        <span>{{errorMessage}}</span>
        <button v-on:click="handleLogin">Login</button>
    </div>
</template>

<script>
export default {
    name: 'login-component',
    data(){
        return {
            username: '',
            password: '',
            errorMessage: ''
        }
    },

    methods:{
        handleLogin(){
          if(this.username ==='long' && this.password === '123'){
              console.log('Login success');
              this.errorMessage = 'Login success'
          }else{
              this.errorMessage = 'Username or password is incorrect'
          }
        }
    },
    watch:{
        username(newValue, oldValue){
            console.log('Username change: ', newValue, oldValue)
        },
        password(newValue, oldValue){
            console.log('Password change: ', newValue, oldValue)
        }
    }

}
</script>

<style>

</style>