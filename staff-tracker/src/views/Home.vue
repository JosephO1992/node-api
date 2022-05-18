<script setup>
import { onMounted } from 'vue';

import { useUserStore } from '../store/userStore';
// const state = reactive({staff: []}); 

const main = useUserStore();

onMounted(() => {
	main.getUsers();
})

</script>



<template>
<div class="flex flex-col w-full justify-center items-center mt-8">

	<h2>Your Staff</h2>

	<button @click="main.getUsers" class="bg-blue-500 rounded-sm text-white p-2 w-20">Get Users</button>

	<div v-if="main.users.length > 0">
		<div v-for="user in main.users" :key="user.id">
			{{user.firstName}}
			{{user.lastName}}
			{{user.age}}
			{{user.salary}}
		</div>
	</div>
	<div v-else>
		No staff, click the button to see what staff are in the database.
	</div>
	</div>

</template>
