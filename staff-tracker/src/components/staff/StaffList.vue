<script setup>
	import StaffItem from "@components/staff/StaffItem.vue";
	import { onMounted } from "vue";

	import { useUserStore } from "@store/userStore";

	const main = useUserStore();

	onMounted(() => {
		main.getUsers();
	});
</script>
<template>
	<h2>Your Staff</h2>
	<button
		@click="main.getUsers"
		class="bg-blue-500 rounded-sm text-white p-2 w-20"
	>
		Get Users
	</button>

	<div
		v-if="main.users.length > 0"
		class="grid gap-4 grid-cols-4 w-auto h-auto"
	>
		<div v-for="user in main.users" :key="user.age" class="h-32 w-56 mt-8">
			<staff-item class="col-span-1" :staff="user" />
		</div>
	</div>
	<div v-else>
		No staff, click the button to see what staff are in the database.
	</div>
</template>
