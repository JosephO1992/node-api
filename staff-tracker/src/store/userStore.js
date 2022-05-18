import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      users: []
    }
  },
  actions: {
      async getUsers () {
          const users = await fetch("http://localhost:8000/staff");
          const res = await users.json();
          this.users = res
      }
  }
})