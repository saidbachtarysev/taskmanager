import Home from '../pages/Home/index.vue'
import Project from '../pages/Project/index.vue'

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