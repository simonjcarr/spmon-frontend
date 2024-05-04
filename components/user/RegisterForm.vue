<template>
    <LayoutCenterOnScreen>
        <div>
            <h1 class="text-2xl font-bold text-center">Register</h1>
            <FormKit type="form" submit-label="Login" @submit="handleLogin">
                <FormKit type="text" name="name" label="name" :validation="[['required']]" placeholder="Name" />
                <FormKit type="email" name="email" label="Email" :validation="[['required'], ['email']]"
                    placeholder="Email Address" />
                <FormKit type="password" label="Password" name="password":validation="[['required']]" placeholder="Password" />
            </FormKit>
        </div>
    </LayoutCenterOnScreen>
</template>

<script setup>
const toast = useToast()
const { $api } = useNuxtApp()

async function handleLogin(user) {
    console.log(user)
    console.log("api", $api('/user/register'))
    
    const data = await $fetch($api('/user/register'), {
        method: 'POST',
        body: user
    })
    console.log("fetch result", data)
}

</script>


<style>

</style>