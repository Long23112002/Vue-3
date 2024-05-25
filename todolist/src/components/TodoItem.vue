<template>
    <div>
      <p>{{ todo.text }}</p>
      <button v-on:click="handelDelete">delete</button>
    </div>
  </template>
  
  <script>

  export default {
    name: 'TodoItem',
    props: {
      todo: String 
    },
    methods: {
      handelDelete(){
        this.$emit('delete', this.todo);
      }
    }
  }
  </script>
  
  <style>
  </style>
  