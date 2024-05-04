export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    console.log('API:', config)
    return {
        provide: {
            api: (path: string) => "http://localhost:3333/api/v1" + path
        }
    }
})