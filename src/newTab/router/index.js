import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@newTab/views/Home/index.vue'

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/about',
		component: () => import('@newTab/views/About/index.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router