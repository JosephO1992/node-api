<script>

export default {
    props: {
        staff: {
            type: Object,
            default: {}
        }
    }
}

</script>
<template>

    <router-link :to="`/staff/${staff._id}`" class="w-56 h-32 bg-blue-200 rounded-sm">

                {{ staff.firstName }}
                {{ staff.lastName }}
                {{ staff.age }}
                {{ staff.salary }}
        </router-link>


</template>