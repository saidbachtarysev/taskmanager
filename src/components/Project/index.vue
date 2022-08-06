<template>
    <div>
        {{project}}
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Project',
    computed: {
        ...mapGetters({
            project: 'getCurrentProject'
        })
    }
}
</script>