<template>
    <div>
        <div class="productbox">
            <img :src=image_url class="">
            <div class="productbox_title">{{title}}</div>
            <div class="productbox_price">$ {{price}}</div>
            <button class="productbox_btn" @click="() => addToCart({title, id, price, image_url, quantity:1})">Add to cart</button>
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

<style scoped lang="scss">
    .productbox{
        width: 30.3%;
        height: 350px;
        float: left;
        margin: 12px 1.5%;

        img{
            width: 70%;
            object-fit: contain;
            height: 200px;
            margin: 0 auto 30px auto;
            display: table;
        }

        &_title{
            text-align: center;
        }
        &_price{
            text-align: center;
            margin: 20px auto;
        }
        &_btn{
            padding: 10px 25px;
            background: green;
            border: none;
            margin: 0 auto;
            display: table;
            color: #ffffff;
        }
    }
</style>
