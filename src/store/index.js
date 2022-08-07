import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    projects: [
        {
            name: 'Project Alpha',
            id: 'hjihjksd',
            tasks: [
                {
                    text: 'text task project test test',
                    completed: false
                },
                {
                    text: 'Random text task ptest',
                    completed: false
                },
                {
                    text: 'Go to store ',
                    completed: true
                },
                {
                    text: 'Random text t test test',
                    completed: false
                }
            ]
        },
        {
            name: 'Project Beta',
            id: 'bbbbb',
            tasks: [
                {
                    text: 'Random texdffffffffproject test test',
                    completed: false
                },
                {
                    text: 'text task project test test',
                    completed: false
                },
                {
                    text: 'Go to market ',
                    completed: true
                },
                {
                    text: 'test test aaaa test test',
                    completed: false
                }
            ]
        }
    ]
}

const getters = {
    getProjects: (state) => {
      return state.projects
    }
}

const mutations = {
    ADD_PROJECT: (state, payload) => {
        const projects = state.projects
        state.projects = [...projects, payload]
    },
    ADD_TASK: (state, payload) => {
        const currentIndex = state.projects.findIndex(p => p.id == payload.id)
        const tasks = state.projects[currentIndex].tasks
        state.projects[currentIndex].tasks = [...tasks, payload.task]
    },
    REMOVE_TASK: (state, payload) => {
        const currentIndex = state.projects.findIndex(p => p.id == payload.id)
        const tasks = state.projects[currentIndex].tasks.filter(t => t != payload.task)
        state.projects[currentIndex].tasks = tasks
    },
}

const actions = {
    addProject({ commit }, payload) {
        commit('ADD_PROJECT', payload)
    },
    addTask({ commit }, payload) {
        commit('ADD_TASK', payload)
    },
    deleteTask({ commit }, payload) {
        commit('REMOVE_TASK', payload)
    },
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})