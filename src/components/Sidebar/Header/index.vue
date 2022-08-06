<template>
    <div class="header">
        <div class="header__text">
            <img :src="require('@/assets/svg/' + logo)" />
            <h3 class="header__text__title">{{ title }}</h3>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: {
        title: String,
        logo: String
    }
}
</script>
<style scoped>
    .header {
        height: 3rem;
    }

    .header__text {
        display: flex;
    }

    .header__text__title {
        margin-left: 0.5rem;
    }
</style>