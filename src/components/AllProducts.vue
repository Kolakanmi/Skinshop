<template>
    <div>
        <div v-for="(p, index) in productsArray" :key="index">
            <SingleProduct :name="p.name" :price="p.price" :desc="p.desc"/>
        </div>
    </div>
</template>

<script>
    import SingleProduct from "@/components/SingleProduct";
    export default {
        name: "AllProducts",
        components: {SingleProduct},
        data () {
            return {
                productsArray: [{name: "Cream", price: 20, desc: "very good"}, {name: "Soap", price: 40, desc: "Very good soap"},
                    {name: "Toothbrush", price:50, desc: "Good brush"}]
            }
        },
        mounted() {
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
