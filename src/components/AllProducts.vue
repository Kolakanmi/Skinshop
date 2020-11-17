<template>
    <div>
        <div v-for="p in filterOption()" :key="p.id">
            <SingleProduct :id="p.id" :title="p.title" :price="p.price" :image_url="p.image_url" :add-to-cart="addToCart"/>
        </div>
    </div>
</template>

<script>
    import SingleProduct from "@/components/SingleProduct";
    import { PRODUCTS_QUERY } from '../constants/graphql'
    export default {
        name: "AllProducts",
        components: {SingleProduct},
        data () {
            return {
                productsArray: [{name: "Cream", price: 20, desc: "very good"}, {name: "Soap", price: 40, desc: "Very good soap"},
                    {name: "Toothbrush", price:50, desc: "Good brush"}],
                products: []
            }
        },
        props: {option: String,
            addToCart: Function
        },
        apollo: {
            products: {
                query: PRODUCTS_QUERY
            }
        },
        methods: {
            filterOption(){

                switch (this.option) {
                    case "1":
                        return [...this.products.sort((a, b) => a.price - b.price)];
                    case "2":
                        return [...this.products = this.products.sort((a, b) => b.price - a.price)];
                    case "3":
                        return [...this.products.sort((a,b) => a.title.localeCompare(b.title))];
                    default:
                        return this.products
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    
</style>
