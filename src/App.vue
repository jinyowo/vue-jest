<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todos" v-on:removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:clearAllTodo="clearAllTodo"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "app",
  data() {
    return {
      todos: []
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todos.push(localStorage.key(i));
      }
    }
  },
  methods: {
    addTodo(todo) {
      localStorage.setItem(todo, todo);
      this.todos.push(todo);
    },
    removeTodo(todo, index) {
      localStorage.removeItem(todo);
      this.todos.splice(index, 1);
    },
    clearAllTodo() {
      localStorage.clear();
      this.todos = [];
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
