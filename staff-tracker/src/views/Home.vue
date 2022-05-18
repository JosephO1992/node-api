<script setup>
import { reactive } from 'vue'; 
import { useUserStore } from '../store/userStore';
const state = reactive({staff: []}); 

const getUsers = async () => { 
	console.log('function called')
	const users = await fetch("http://localhost:8000/staff"); 
	const res = await users.json();
	console.log(res);
	res.forEach((user) => { state.staff.push(user); 
	}); 
};

const usersFromStore = useUserStore();

</script>



<template>
	<h1>Welcome to EmployeeHub.io</h1>

	<button @click="getUsers" class="bg-blue-500 rounded-sm text-white p-2 w-20">Get Users</button>
</template>
