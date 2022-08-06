import Home from '../components/Home/index.vue'
import Project from '../components/Project/index.vue'

export const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: '/:id',
                component: Project
            }
        ]
    },
]