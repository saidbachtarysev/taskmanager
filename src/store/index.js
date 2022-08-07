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
        state.projects.append(payload)
    },
    ADD_TASK: (state, payload) => {
        const currentIndex = state.projects.findIndex(p => p.id == payload.id)
        const tasks = state.projects[currentIndex].tasks
        state.projects[currentIndex].tasks = [...tasks, payload.task]
    },
    REMOVE_TASK: (state, payload) => {
        const currentIndex = state.projects.findIndex(p => p.id == payload.id)
        const taskIndex = state.projects[currentIndex].tasks.findIndex(t => t == payload.task)
        state.projects[currentIndex].tasks.splice(taskIndex)
    },
}

const actions = {
    createProject({ commit }, data) {
        commit('ADD_PROJECT', data)
    },
    addTask({ commit }, payload) {
        commit('ADD_TASK', payload)
    },
    removeTask({ commit }, payload) {
        commit('REMOVE_TASK', payload)
    },
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})