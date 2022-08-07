<template>
    <div class="delete-button" 
        @click="$emit('click')">
        <img :src="require('@/assets/svg/' + icon)" />
    </div>
</template>
<script>
export default {
    name: 'DeleteButton',
    props: {
        icon: {
            type: String,
            default: 'delete.svg'
        }
    }
}
</script>
<style scoped>
    .delete-button {
        cursor: pointer;
    }
</style>