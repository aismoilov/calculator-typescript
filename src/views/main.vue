<template>
    <div class="mx-10">
        <h2 class="text-left font-bold text-2xl">Vue Invoice Calc</h2>
        <product-form @onSubmit="addProduct" />
        <product-list
            v-if="calculatorService.productList.length > 0"
            :products="calculatorService.productList"
            :total-sum="calculatorService.totalSum"
            @onDelete="deleteProducts"
        />
        <div class="text-lg font-bold mt-4 border-t pt-4" v-else> Products Not Found</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductForm from '../components/ProductForm.vue';
import ProductList from '../components/ProductList.vue';
import { CalculatorService } from '../shared/services/calculator-service';

export default {
    components: {
        ProductForm,
        ProductList,
    },

    computed: {
        ...mapGetters({
            products: 'getProducts',
        }),
        calculatorService() {
            return new CalculatorService(this.products);
        },
    },

    mounted() {
        const products = localStorage.getItem("products");
        if (products) {
            this.$store.commit('setProducts', JSON.parse(products));
        }
    },

    methods: {
        addProduct(product) {
            this.calculatorService.addProduct(product);
        },
        deleteProducts(productIds) {
            this.calculatorService.deleteProducts(productIds);
        }
    },
};
</script>