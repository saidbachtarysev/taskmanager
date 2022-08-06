<template>
    <div :class="`item ${selected ? 'item--state-selected' : ''}`"
        @click="$emit('click')">
        <Label :selected="selected"
            :status="status" />
        <Badge :status="status" />    
        <p>{{ project.name }}</p>
        <p>{{ project.tasks.length }}</p>
    </div>
</template>
<script>
import Label from './Label/index.vue'
import Badge from './Badge/index.vue'

export default {
    name: 'Item',
    props: {
        project: Object
    },
    components: {
        Label,
        Badge
    },
    computed: {
        selected() {
            return this.project?.id == this.$route.params.id
        },
        status() {
            const tasks = this.project?.tasks
            const uncompleted = tasks ? tasks.find(t => t.completed == false) : false
            return uncompleted ? 'uncompleted' : 'completed'
        }
    }
}
</script>
<style scoped>
    .item {
        display: flex;
        height: 3.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .item:hover {
        background-color: var(--color-grayscale-250);
        cursor: pointer;
    }
    
    .item--state-selected {
        background-color: var(--color-grayscale-250);
    }
</style>