<template>
    <div>
        <div class="sidebar">
            <Header title="Task manager"
                logo="logo.svg" />
            <div class="items-container">
                <Item v-for="project in projects" 
                    :key="project.id"
                    :project="project"
                    @click="$router.push(project.id)" />
            </div>
            <AddButton title="Add new project"
                @click="createProject" />
        </div>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Header from '../../components/Sidebar/Header/index.vue'
import Item from '../../components/Sidebar/Item/index.vue'
import AddButton from '../../components/AddButton/index.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Item,
        AddButton
    },
    computed: {
        ...mapGetters({
            projects: 'getProjects'
        })
    },
    methods: {
        ...mapActions({
            addProject: 'addProject'
        }),
        checkProjects() {
            // If there are projects and if I'm trying to go to '/'
            if(this.projects && this.$route.name == 'home') {
                const id = this.projects[0].id
                this.$router.push(`/${id}`)
            }
        },
        createProject() {
            const projectName = prompt('Project name?')
            if(projectName) {
                const newTask = prompt('Enter your first task!')
                if(newTask) {
                    const payload = {
                        name: projectName,
                        id: Math.random().toString(16).slice(2),
                        tasks: [{
                            text: newTask,
                            completed: false
                        }]
                    }
                    this.addProject(payload)
                }
            }
        }
    },
    mounted() {
       this.checkProjects()
    }
}
</script>
<style>
    .sidebar {
        float: left;
        width: 20rem;
    }

    .content {
        overflow: hidden;
    }

    .items-container {
        margin-bottom: 1rem;
    }
</style>