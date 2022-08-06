<template>
    <div>
        <div class="sidebar">
            <Header />
            <Item v-for="project in projects" 
                :key="project.id"
                :project="project" />
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