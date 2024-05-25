<template>
     <div id="app">
        <FormTodo v-on:addTodo="handleAddtodo" />
        <TodoList v-bind:todos="todos" v-on:delete="handleDelete" />
     </div>
     <router-view>
      
     </router-view>
</template>

<script>

import TodoList from './components/TodoList.vue';
import FormTodo from './components/FormTodo.vue';

export default {
  name: 'App',
  data() {
    return {
      todos: [
                { id: 1, text: 'Learn Vue.js', completed: false },
                { id: 2, text: 'Learn React.js', completed: false },
                { id: 3, text: 'Learn Angular.js', completed: false }
            ]
    }
  },
  components: {
    TodoList,
    FormTodo
  },
  methods:{
    handleAddtodo(value){
      console.log(value);
      this.todos.push({
        id: this.todos.length + 1,
        text: value,
        completed: false
      })
    },
    handleDelete(id){
      this.todos = this.todos.filter(todo => todo.id !== id);
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
