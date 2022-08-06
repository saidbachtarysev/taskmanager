import Home from '../components/Home/index.vue'
import Project from '../components/Project/index.vue'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/:id',
                name: 'project',
                component: Project
            }
        ]
    },
]