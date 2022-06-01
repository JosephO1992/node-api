import { createWebHistory, createRouter } from 'vue-router';
import Home from "./views/Home.vue"
import AddUser from "./views/AddUser.vue"
import StaffPage from "./views/StaffPage.vue"

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/add-user',
		name: 'AddUser',
		component: AddUser,
	},
	{
		path: '/staff/:id',
		name: 'StaffPage',
		component: StaffPage
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;