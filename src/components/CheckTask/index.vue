<template>
    <label>
        <input @input="$emit('toggleCheck')"
            :checked="checked" 
            class="checkbox-custom"
            type="checkbox">
        <span></span>
    </label>
</template>
<script>
export default {
    name: 'CheckTask',
    props: {
        checked: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style>
    .checkbox-custom {
        cursor: pointer;
    }
</style>