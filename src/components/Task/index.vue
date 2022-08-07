<template>
    <div class="task"
        @mouseover="hover = true"
        @mouseleave="hover = false">
        <div class="check-title">
            <CheckTask :checked="task.completed" 
                @toggleCheck="onToggle" />
            <p class="task--text">{{ task.text }}</p>
        </div>
        <DeleteButton v-if="hover"
            @click="onDeleteTask" />
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import CheckTask from '../CheckTask/index.vue'
import DeleteButton from '../DeleteButton/index.vue'

export default {
    name: 'Task',
    props: {
        task: Object
    },
    components: {
        CheckTask,
        DeleteButton
    },
    data() {
        return {
            hover: false
        }
    },
    methods: {
        ...mapActions({
            deleteTask: 'deleteTask'
        }),
        onToggle(value) {
            this.$emit('toggleCheck', value)
        },
        onDeleteTask() {
            const payload = {
                id: this.$route.params.id,
                task: this.task
            }
            this.deleteTask(payload)
        }
    }
}
</script>
<style scoped>
    .task {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        border-radius: 0.25rem;
        padding: 1rem;
        margin-bottom: 0.5rem;
        box-shadow: 0px 2px 8px 0px var(--color-grayscale-shadow);
    }

    .task:hover {
        border: 1px solid var(--color-grayscale-300);
    }

    .task--text {
        font-weight: 400;
        margin-left: 0.75rem;
    }

    .check-title {
        display: flex;
        align-items: center;
    }

</style>