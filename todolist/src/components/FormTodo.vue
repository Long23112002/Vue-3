<template>
    <div>
        <input v-model="totoValue" type="text" placeholder="Add new todo" />
        <button v-on:click="addTodo">Add</button>
    </div>
</template>

<script>
export default {
   name: 'form-todo',
   data() {
    return {
        totoValue: ''
    }
   },

    methods: {
         addTodo() {
              console.log(this.totoValue);
              this.$emit('addTodo', this.totoValue);
              this.totoValue = '';
         }
    }
}
</script>

<style>

</style>