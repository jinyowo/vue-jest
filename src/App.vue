<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-on:removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:clearAllTodo="clearAllTodo"></TodoFooter>
    <TodoSummary></TodoSummary>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoSummary from "./components/TodoSummary.vue";

export default {
  name: "app",
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.$store.state.todos.push(localStorage.key(i));
      }
    }
  },
  methods: {
    addTodo(todo) {
      localStorage.setItem(todo, todo);
      this.$store.state.todos.push(todo);
    },
    removeTodo(todo, index) {
      localStorage.removeItem(todo);
      this.$store.state.todos.splice(index, 1);
    },
    clearAllTodo() {
      localStorage.clear();
      this.$store.state.todos = [];
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
    TodoSummary
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
