<template>
    <div>
        <div class="sidebar">
            <Header title="Task manager"
                logo="logo.svg" />
            <Item v-for="project in projects" 
                :key="project.id"
                :project="project"
                @click="$router.push(project.id)" />
        </div>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Header from '../Sidebar/Header/index.vue'
import Item from '../Sidebar/Item/index.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Item
    },
    computed: {
        ...mapGetters({
            projects: 'getProjects'
        })
    },
    methods: {
        checkProjects() {
            // If there are projects and if I'm trying to go to '/'
            if(this.projects && this.$route.name == 'home') {
                const id = this.projects[0].id
                this.$router.push(`/${id}`)
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
        padding: 1.25rem;
    }

    .content {
        overflow: hidden;
    }
</style>