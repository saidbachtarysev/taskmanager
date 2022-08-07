<template>
    <div class="project-header">
        <h1>{{ title }}</h1>
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: {
        title: String
    }
}
</script>
<style scoped>
    .project-header {
        border-bottom: 1px solid var(--color-grayscale-400);
        padding: 1.25rem 3rem;
    }
</style>