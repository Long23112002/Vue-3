<template>
    <div class="user">
        <p>{{user.email}}</p>
        <button class="delete" v-on:click="handleDelete">Delete</button>
    </div>
</template>

<script>
export default {
   name: 'user-component',
   props:{
       user: {
           type: Object,
       }
   },
   data(){
        return {
           
        }
    },
    methods:{
        handleDelete(e){
            console.log(e);
            this.$emit('deleteUser', this.user)
            console.log('Delete user: ', this.user)
        }
    }
}
</script>

<style>

</style>