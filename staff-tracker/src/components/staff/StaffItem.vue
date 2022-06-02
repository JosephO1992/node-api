<script>
	export default {
		props: {
			staff: {
				type: Object,
				default: {},
			},
		},
	};
</script>
<template>
	<router-link
		:to="`/staff/${staff._id}`"
		class="
			w-full
			h-full
			rounded-sm
			flex flex-col
			drop-shadow-md
			shadow-white
			hover:shadow-md hover:shadow-white hover:font-bold
			p-4
			border border-white
		"
	>
		<h3>{{ staff.firstName }} {{ staff.lastName }}</h3>
		<p>Age: {{ staff.age }}</p>
		<p>Salary: {{ staff.salary }}</p>
		<p>More info...</p>
	</router-link>
</template>
