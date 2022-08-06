<template>
    <div :class="`layer ${selected ? status : ''}`" />
</template>
<script>

export default {
    name: 'Label',
    props: {
        selected: Boolean,
        status: String
    }
}
</script>
<style scoped>
    .layer {
        width: 0.25rem;
        height: 100%;
    }
</style>