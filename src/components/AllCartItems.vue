<template>
    <div >
        <div>
            <div v-if="allCarts.length === 0">
                <h6>Empty Cart</h6>
            </div>
            <div v-else>
                <h3>CART</h3>
                <div v-for="c in allCarts" :key="c.id">
                    <CartItem :title="c.title" :quantity="c.quantity" :id="c.id" :price="c.price" :image_url="c.image_url"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CartItem from "@/components/CartItem";
    export default {
        name: "AllCartItems",
        components: {CartItem},
        props: {
            allCarts: Array,
            isCartInvisible: Boolean
        }
    }
</script>

<style scoped>
    .sideBarInvisible{
        display: none;
    }
</style>
