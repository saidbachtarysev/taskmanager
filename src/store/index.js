import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
const state = {
    projects: [
        {
            name: 'Project Alpha',
            tasks: [
                {
                    text: 'Random text task project test test',
                    completed: false
                },
                {
                    text: 'Random text task project test test',
                    completed: false
                },
                {
                    text: 'Go to store ',
                    completed: true
                },
                {
                    text: 'Random text task project test test',
                    completed: false
                }
            ]
        }
    ]
}

const getters = {
    getProjects: (state) => {
      return state.projects
    },   
}

const mutations = {
    ADD_PROJECT: (state, payload) => {
        state.projects.append(payload)
    },
    ADD_TASK: (state, payload) => {
        state.projects[payload.index].tasks.append(payload.task)
    },
    REMOVE_TASK: (state, payload) => {
        state.projects[payload.index].tasks.append(payload.task)
    },
}

const actions = {
    createProject({ commit }, data) {
        commit('ADD_PROJECT', data)
    },
    createTask({ commit }, data) {
        commit('ADD_TASK', data)
    },
    removeTask({ commit }, data) {
        commit('REMOVE_TASK', data)
    },
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})