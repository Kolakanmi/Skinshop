<template>
    <div>
        <div>
            <img :src=image_url>
            <span>Title: {{title}}</span>
            <span>Price: {{price}}</span>
            <span>Quantity: {{quantity}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartItem",
        props: {
            title: String,
            id: Number,
            price: Number,
            image_url: String,
            quantity: Number
        }
    }
</script>

<style scoped>

</style>
