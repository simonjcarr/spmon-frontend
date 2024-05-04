import { defineStore } from 'pinia'; // Add the missing import statement

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as User | null
    }),
    actions: {
        setUser(user: User) {
            this.user = user
        }
    }
})

interface User {
    id: number
    name: string
    email: string
}