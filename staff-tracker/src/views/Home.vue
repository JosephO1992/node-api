<script setup>
import { reactive } from 'vue'; 
import { useUserStore } from '../store/userStore';
// const state = reactive({staff: []}); 

const main = useUserStore();

</script>



<template>
	<h1>Welcome to EmployeeHub.io</h1>

	<button @click="main.getUsers" class="bg-blue-500 rounded-sm text-white p-2 w-20">Get Users</button>
</template>
