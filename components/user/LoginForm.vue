<template>
    <LayoutCenterOnScreen>
        <div>
            <h1 class="text-2xl font-bold text-center">Login</h1>
            <FormKit type="form" submit-label="Login" @submit="handleLogin">
                <FormKit type="email" class="bg-red-500" name="email" label="Email" :validation="[['required'], ['email']]"
                    placeholder="Email Address" />
                <FormKit type="password" label="Password" name="password":validation="[['required']]" placeholder="Password" />
            </FormKit>
        </div>
    </LayoutCenterOnScreen>
</template>

<script setup>


function handleLogin(user) {
    console.log(user)
}

</script>


<style>

</style>