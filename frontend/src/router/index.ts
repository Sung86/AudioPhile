import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () =>
				import(/* webpackChunkName: "login" */ '@/modules/Home/index.vue'),
		},
		{
			path: '/checkout',
			name: 'Checkout',
			component: () =>
				import(
					/* webpackChunkName: "checkout" */ '@/modules/Checkout/index.vue'
				),
		},
		{
			path: '/category',
			name: 'Category',
			component: () =>
				import(
					/* webpackChunkName: "category" */ '@/modules/Category/index.vue'
				),
		},
		{
			path: '/error404',
			name: 'Error404',
			component: () =>
				import(
					/* webpackChunkName: "error404" */ '@/modules/Error404/index.vue'
				),
		},
		{
			path: '/:catchAll(.*)',
			redirect: '/error404',
		},
	],
});

export default router;
