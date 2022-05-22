<script setup>
	import { reactive } from "vue";

	const newUser = reactive({
		firstName: "",
		lastName: "",
		age: 0,
		salary: 0,
	});

	const addNewUser = async () => {
		const req = await fetch("http://localhost:8000/staff", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				firstName: newUser.firstName,
				lastName: newUser.lastName,
				age: newUser.age,
				salary: newUser.salary,
			}),
		});

		const user = await req.json();

		console.log(user);
	};
</script>

<template>
	<div>
		<form @submit.prevent="addNewUser">
			<div class="flex flex-row w-72 justify-between items-center mt-4">
				<label for="firstName">First Name</label>
				<input
					type="text"
					name="firstName"
					id="firstName"
					v-model="newUser.firstName"
					class="border border-blue-300 rounded px-2"
				/>
			</div>
			<div class="flex flex-row w-72 justify-between items-center mt-4">
				<label for="lastName">Last Name</label>
				<input
					type="text"
					name="lastName"
					id="lastName"
					v-model="newUser.lastName"
					class="border border-blue-300 rounded px-2"
				/>
			</div>
			<div class="flex flex-row w-72 justify-between items-center mt-4">
				<label for="age">Age</label>
				<input
					type="number"
					name="age"
					id="age"
					v-model="newUser.age"
					class="border border-blue-300 rounded px-2"
				/>
			</div>
			<div class="flex flex-row w-72 justify-between items-center mt-4">
				<label for="salary">Salary</label>
				<input
					type="text"
					name="salary"
					id="salary"
					v-model="newUser.salary"
					class="border border-blue-300 rounded px-2"
				/>
			</div>
			<div class="flex justify-center items-center mt-4">
				<button type="submit" class="bg-blue-500 text-white rounded p-2">
					Add Staff Member
				</button>
			</div>
		</form>
	</div>
</template>
