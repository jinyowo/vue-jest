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
            localStorage.clear();
            return state.todos = [];
        }
    },
    // 비동기 처리 로직 선언
    // mutations의 메소드를 commit하는 구조
    actions: {
        // 상태 변화를 추적하기 위해 결국 mutation의 메서드를 commit한다.
        // addTodo: function(context) {
        //     return context.commit('addTodo');
        // },
        // 삭제를 1초후 진행
        delayRemoveTodo: function (context, payload) {
            return setTimeout(function () {
                context.commit('removeTodo', payload);
            }, 1000);
        }
    }
})