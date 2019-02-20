import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        todos: []
    },
    getters: {
        getLength: function (state) {
            return state.todos.length;
        }
    },
    // mutations는 쉽게 말해 setter 역할
    // 동기적 로직을 정의함 (Actions는 비동기적 로직을 정의)
    mutations: {
        addTodo: function (state, payload) {
            return state.todos.push(payload);
        },
        removeTodo: function (state, payload) {
            return state.todos.splice(payload, 1);
        },
        clearAllTodo: function (state, payload) {
            return state.todos = [];
        }
    }
})