
<template>
    <div
        @click="$emit('click')"
        :class="`${theme} button`"
    >
        <img :src="require('@/assets/svg/' + icon)" />
        <p class="button__title">{{ title }}</p>
    </div>
</template>

<script>
export default {
    name: 'AddButton',
    props: {
        title: String,
        icon: {
            type: String,
            default: 'plus.svg'
        },
        theme: {
            type: String,
            default: 'primary'
        }
    }
}
</script>
<style>
    .primary {
        width: 136px;
        background: #FFBF10;
        order: 2;
    }

    .secondary {
        box-sizing: border-box;
        width: 120px;
        border: 1px solid #D6D8E6;
        order: 8;
    }

    .button {
        display: flex;
        cursor: pointer;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 32px;
        border-radius: 8px;
        
    }

    .button__title {
        font-size: 12px;
        padding-left: 0.5rem;
    }

    .button__icon {
        width: 1em;
        height: 1em;
        fill: currentcolor;
    }
</style>