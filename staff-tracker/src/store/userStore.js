// import { defineStore } from "pinia";

// export const userStore = defineStore('users', () => {
//     state: () => {
//         return {

//             name: 'John Doe', 
//             email: 'fake@email.com', 
//             username: 'jd123'
//         }

//     }

// })

import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
})