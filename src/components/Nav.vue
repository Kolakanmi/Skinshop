<template>
    <div>
        <p>LUMIN</p>
        <img src="../assets/logo.png" @click="() => toggleCart()"/>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        props: {
            toggleCart: Function
        }
    }
</script>

<style scoped>

</style>
