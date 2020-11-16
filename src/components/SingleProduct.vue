<template>
    <div>
        <div>
            <img :src=image_url>
            <span>{{title}}</span>
            <span>{{price}}</span>
            <button @click="() => addToCart({title, id, price, image_url, quantity:1})">Add to cart</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SingleProduct",
        props: {title: String,
            id: Number,
            price: Number,
            image_url: String,
            addToCart: Function
        }
    }
</script>

<style scoped>

</style>
