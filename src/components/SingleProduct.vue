<template>
    <div>
        <div>
            <img src="../assets/logo.png">
            <span>{{name}}</span>
            <span>{{desc}}</span>
            <span>{{price}}</span>
            <button>Add to cart</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SingleProduct",
        props: {name: String,
            price: Number,
            desc: String
        }
    }
</script>

<style scoped>

</style>
