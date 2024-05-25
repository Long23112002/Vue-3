<template>
  <div class="container">
    <button v-on:click="title = 'Hoc Vue Qua Kho'">Change title with component App</button>
    <Header v-bind:titleHeader="title" v-on:changeTitleEvent="handleChangeTitle" />
    <ListUserVue v-bind:listUser="listUser" v-on:handleDelete="handleDeteleUser" />
    <Footer v-bind:titleFooter="title" />
    <DemoRefVue />
    <demo-slot>
      <div class="app-slot">
        
      </div>
    </demo-slot>
    <Login />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ListUserVue from '@/components/ListUser.vue'
import DemoRefVue from '@/components/DemoRef.vue'
import DemoSlot from '@/components/DemoSlot.vue'
import Login from '@/components/Login.vue'
export default {
  name: 'App',
  data() {
    return {
      title: 'Hello vue!',
      listUser: [
        { id: 1, email: 'test1@gmail.com', active: true },
        { id: 2, email: 'test2@gmail.com', active: true },
        { id: 3, email: 'test3@gmail.com', active: true },
      ]
    }
  },
  components: {
    Header,
    Footer,
    ListUserVue,
    DemoRefVue,
    DemoSlot,
    Login
  },
  methods: {
    handleChangeTitle(data) {
      console.log('Change title with component App', data)
      this.title = data.title
    },
    handleDeteleUser(id) {
      console.log('Delete user in App: ', id)
      this.listUser = this.listUser.filter(item => item.id !== id)
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
