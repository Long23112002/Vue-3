<template>
   <div class="list-user">
        <User 
             v-for="item in listUser" 
             v-bind:key="item.id" 
             v-bind:user="item"
             v-on:deleteUser="handleDeleteUser"
        />
   </div>
</template>

<script>
import User from './User.vue'
export default {
    name: 'ListUser',
    props:{
        listUser: {
            type: Array,
        }
    },
    data(){
        return {
           
        }
    },
    components: {
        User
    },

    methods:{
        handleDeleteUser(user){
            this.$emit('handleDelete', user.id)
            console.log('Delete user in ListUser: ', user)
        }
    }

}
</script>

<style>

</style>