<template>
    <div class="project--background">
        <Header :title="project.name"/>
        <div class="project--body">
            <div class="project--content--heading">
                <h2 class="tasks--title">Tasks</h2>
                <div class="toggle-wrapper">
                    <p class="toggle--text">Show completed tasks</p>
                    <Toggle @switch="onSwitch"
                        :toggle="toggleCompleted" />
                </div>
            </div>
            <Task v-for="task in project.tasks"
                :key="task.text"
                :task="task"
                @toggleCheck="toggleCheck" />
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Header from '../Header/index.vue'
import Toggle from '../Toggle/index.vue'
import Task from '../Task/index.vue'

export default {
    name: 'Project',
    components: {
        Header,
        Toggle,
         Task
    },
    data() {
        return {
            toggleCompleted: false,
        }
    },
    methods: {
        onSwitch(val) {
            this.toggleCompleted = val
        },
        toggleCheck(val) {
            console.log(val)
        }
    },
    computed: {
        ...mapGetters({
            projects: 'getProjects'
        }),
        project() {
            return this.projects ? this.projects.find(p => p.id == this.$route.params.id) : null
        }
    }
}
</script>
<style scoped>
    .project--background {
        background-color: var(--color-grayscale-250);
    }

    .project--body {
        padding: 1rem 3rem;
    }

    .project--content--heading {
        display: flex;
        justify-content: space-between;
    }

    .toggle-wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .toggle--text {
        margin-right: 0.5rem;
        color: var(--color-grayscale-600);
        font-weight: 400;
    }

    .tasks--title {
        font-weight: 600;
        color: var(--color-grayscale-600);
    }
</style>