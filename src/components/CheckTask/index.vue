<template>
    <label class="label-container">
        <input @input="$emit('toggleCheck', $event.target.checked)"
            :checked="checked" 
            type="checkbox">
        <span class="checkmark"></span>
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