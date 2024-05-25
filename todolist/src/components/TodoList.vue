<template>
    <div>
        <div v-for="item in todos" v-bind:key="item.id" >
             <TodoItem v-bind:todo="item" v-on:delete="handelDelete" />
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
    name: 'TodoList',
    components: {
        TodoItem,
    },
    props:{
        todos: Array
    },
    data() {
        return {
           
        };
    },
    methods: {
        handelDelete(todo){
            this.$emit('delete', todo.id);
        }
    }
}
</script>

<style>
/* Các quy tắc CSS cho TodoList */
</style>
