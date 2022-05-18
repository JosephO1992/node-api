<script setup>
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
	import Home from "./views/Home.vue";
	import TheHeader from "./components/TheHeader.vue"
</script>

<template>
<div class="flex flex-col w-full h-screen">
	<TheHeader />
	<router-view></router-view>
</div>
</template>


