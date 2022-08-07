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
            <Task v-for="(task, index) in filteredTasks"
                :key="task.text"
                :task="task"
                @toggleCheck="toggleCheck(index)" />
           <AddButton title="Add new task"
                theme="secondary"
                @click="AddTask" />     
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Header from '../../components/Header/index.vue'
import Toggle from '../../components/Toggle/index.vue'
import Task from '../../components/Task/index.vue'
import AddButton from '../../components/AddButton/index.vue'

export default {
    name: 'Project',
    components: {
        Header,
        Toggle,
        Task,
        AddButton
    },
    data() {
        return {
            toggleCompleted: false,
        }
    },
    methods: {
        ...mapActions({
            addTask: 'addTask',
            toggleTask: 'toggleTask'
        }),
        onSwitch(value) {
            this.toggleCompleted = value
        },
        toggleCheck(taskIndex) {
            const payload = {
                index: taskIndex,
                id: this.$route.params.id,
            }
            this.toggleTask(payload)
        },
        AddTask() {
            const answer = prompt('Enter new task')
            if(answer) {
                const payload = {
                    id: this.$route.params.id,
                    task: {
                        text: answer,
                        completed: false
                    }
                }
                this.addTask(payload)
            }
        }
    },
    computed: {
        ...mapGetters({
            projects: 'getProjects'
        }),
        project() {
            return this.projects ? this.projects.find(p => p.id == this.$route.params.id) : null
        },
        filteredTasks() {
            const tasks = this.project.tasks
            return this.toggleCompleted ? tasks.filter(t => t.completed) : tasks
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