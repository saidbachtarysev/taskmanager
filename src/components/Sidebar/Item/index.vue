<template>
    <div :class="`item ${selected ? 'item--state-selected' : ''}`"
        @click="$emit('click')">
        <div class="item__title">
            <Label :selected="selected"
                :status="status" />
            <Badge :status="status"
                class="badge"/>    
            <p class="project__name">{{ project.name }}</p>
        </div>
        <p class="project__counter">{{ project.tasks.length }}</p>
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
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .item__title {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 3.5rem;
    }

    .item:hover {
        background-color: var(--color-grayscale-250);
        cursor: pointer;
    }
    
    .item--state-selected {
        background-color: var(--color-grayscale-250);
    }

    .project__name {
        margin-left: 0.5rem;
    }

    .project__counter {
        margin-right: 1.25rem;
    }

    .badge {
        margin-left: 1rem;
    }
</style>