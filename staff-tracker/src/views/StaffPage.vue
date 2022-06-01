<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { useUserStore } from '@store/userStore';

const main = useUserStore();

const route = useRoute()

onMounted(() => {
    const id = route.params.id
    main.getUser(id);
})



</script>
<template>
this is the staff page

</template>