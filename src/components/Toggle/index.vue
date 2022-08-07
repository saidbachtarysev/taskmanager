<template>
    <label class="switch">
        <input type="checkbox"
            @value="toggle"
            @input="$emit('switch', $event.target.checked)">
        <span class="slider round"></span>
    </label>
</template>
<script>
export default {
    name: 'Toggle',
    props: {
        toggle: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style scoped>
    .switch {
        position: relative;
        width: 3.5rem;
        height: 2rem;
    }

    .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--color-grayscale-400);
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 1.625rem;
        width: 1.625rem;
        left: 0.25rem;
        bottom: 0.25rem;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: var(--color-yellow-500);
    }

    input:focus + .slider {
        box-shadow: 0 0 1px var(--color-yellow-500);
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(1.625rem);
        -ms-transform: translateX(1.625rem);
        transform: translateX(1.625rem);
    }

    .slider.round {
        border-radius: 2.125rem;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>