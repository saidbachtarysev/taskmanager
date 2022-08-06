import Home from '../components/Home/index.vue'
import Project from '../components/Project/index.vue'

export default [
    {
        path: '/',
        component: Home,
        children: {
            path: '/:projectId',
            component: Project
        }
    },
]