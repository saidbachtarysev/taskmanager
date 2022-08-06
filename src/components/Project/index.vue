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
            projects: 'getProjects'
        }),
        project() {
            return this.projects ? this.projects.find(p => p.id == this.$route.params.id) : null
        }
    }
}
</script>