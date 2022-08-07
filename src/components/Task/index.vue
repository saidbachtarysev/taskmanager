<template>
    <div class="task">
        <CheckTask :checked="task.completed" 
            @toggleCheck="onToggle" />
        <p class="task--text">{{ task.text }}</p>
    </div>
</template>
<script>
import CheckTask from '../CheckTask/index.vue'

export default {
    name: 'Task',
    props: {
        task: Object
    },
    components: {
        CheckTask
    },
    methods: {
        onToggle(value) {
            this.$emit('toggleCheck', value)
        }
    }
}
</script>
<style scoped>
    .task {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: white;
        padding: 1rem;
        margin-bottom: 0.5rem;
        box-shadow: 0px 2px 8px 0px var(--color-grayscale-shadow);
    }

    .task--text {
        font-weight: 400;
        margin-left: 0.75rem;
    }

</style>