import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      users: [],
      user: {}
    }
  },
  actions: {
      async getUsers () {
          const users = await fetch("http://localhost:8000/staff");
          const res = await users.json();
          this.users = res
      },
      async getUser(id) {
        const user = await fetch(`http://localhost:8000/staff/${id}`);
        const res = await user.json();
        this.user = res;
      }
  }
})