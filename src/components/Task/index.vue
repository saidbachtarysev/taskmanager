<template>
    <div class="task"
        @mouseover="hover = true"
        @mouseleave="hover = false">
        <div class="check__title">
            <CheckTask :checked="task.completed" 
                @toggleCheck="$emit('toggleCheck')" />
            <p class="task__text">{{ task.text }}</p>
        </div>
        <IconButton v-if="hover"
            @click="onDeleteTask" />
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import CheckTask from '../CheckTask/index.vue'
import IconButton from '../IconButton/index.vue'

export default {
    name: 'Task',
    props: {
        task: Object
    },
    components: {
        CheckTask,
        IconButton
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

    .task__text {
        font-weight: 400;
        margin-left: 0.75rem;
    }

    .check__title {
        display: flex;
        align-items: center;
    }

</style>