import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/home-page.vue'
import MenuPage from '../pages/menu-page.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/menu',
            name: 'menu',
            component: MenuPage
        }
    ]
})

export default router