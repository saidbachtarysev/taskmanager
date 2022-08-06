<template>
    <div :class="`dot ${status}`" />
</template>
<script>

export default {
    name: 'Label',
    props: {
        status: String
    }
}
</script>
<style scoped>
    .dot {
        width: 0.375rem;
        height: 0.375rem;
        border-radius: 50%;
    }
</style>