<template>
    <div>
        <div v-for="c in allCarts" :key="c.id">
            <CartItem :title="c.title" :quantity="c.quantity" :id="c.id" :price="c.price" :image_url="c.image_url"/>
        </div>
    </div>
</template>

<script>
    import CartItem from "@/components/CartItem";
    export default {
        name: "AllCartItems",
        components: {CartItem},
        props: {
            allCarts: Array
        }
    }
</script>

<style scoped>

</style>
