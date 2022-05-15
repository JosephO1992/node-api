<script setup>
import { reactive } from 'vue'; 
const state = reactive({staff: []}); 

const getUsers = async () => { 
	console.log('function called')
	const users = await fetch("http://localhost:8000/staff"); 
	const res = await users.json();
	console.log(res);
	res.forEach((user) => { state.staff.push(user); 
	}); 
};

function doSomething() {
	console.log('something')
}

</script>



<template>
	<h1>Welcome to EmployeeHub.io</h1>

	<button @click="getUsers" class="bg-blue-500 rounded-sm text-white p-2">Get Users</button>
	{{ state.staff }}
</template>
