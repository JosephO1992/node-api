<template>
    <div>
        <form>
            <div class="flex flex-row w-72 justify-between items-center">
                <label for="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" class="border border-blue-300 rounded px-2">
            </div>
            <div class="flex flex-row w-72 justify-between items-center">
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" class="border border-blue-300 rounded px-2">
            </div>
            <div class="flex flex-row w-72 justify-between items-center">
                <label for="age">Age</label>
                <input type="number" name="age" id="age" class="border border-blue-300 rounded px-2">
            </div>
            <div class="flex flex-row w-72 justify-between items-center">
                <label for="salary">Salary</label>
                <input type="text" name="salary" id="salary" class="border border-blue-300 rounded px-2">
            </div>
            <button type="submit">Add Staff Member</button>
        </form>
    </div>
</template>