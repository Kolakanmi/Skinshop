<template>
    <div>
        <p>LUMIN</p>
        <img @click="toggleCart"/>
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
