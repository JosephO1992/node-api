<script>
	import { useAuth0 } from "@auth0/auth0-vue";

	export default {
		setup() {
			const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

			return {
				login: () => {
					loginWithRedirect();
				},
				logout: () => {
					logout({ returnTo: window.location.origin });
				},
				user,
				isAuthenticated,
			};
		},
	};
</script>
<template>
	<div>
		<ul class="flex flex-row items-center justify-around">
			<router-link to="/" class="mr-4">Home</router-link>
			<router-link to="/add-user">Add New User</router-link>
			<button @click="logout" v-if="isAuthenticated">
				Log out <code>{{ user }}</code>
			</button>

			<button @click="login" v-else>Log in</button>
		</ul>
	</div>
</template>
