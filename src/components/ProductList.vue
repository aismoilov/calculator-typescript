<template>
    <div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        <input
                            type="checkbox"
                            v-model="allProductsChecked"
                        />
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Qta
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Sum
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                    v-for="(product, index) in products"
                    :key="index"
                >
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        <input
                            :value="index"
                            v-model="selectedProducts"
                            type="checkbox"
                        />
                    </th>
                    <td class="px-6 py-4">
                        {{ product.name }}
                    </td>
                    <td class="px-6 py-4">
                        {{ product.price }} $
                    </td>
                    <td class="px-6 py-4">
                        {{ product.quantity }}
                    </td>
                    <td class="px-6 py-4">
                        {{ product.sum }}
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="flex flex-wrap justify-between items-center mt-4">
            <button
                class="text-white font-bold py-2 px-4 rounded"
                :class="{'bg-red-200': selectedProducts.length === 0, 'bg-red-500 hover:bg-red-700': selectedProducts.length > 0}"
                @click="deleteProducts()"
            >
                Delete
            </button>
            <span class="text-lg font-bold">Total: {{ totalSum }} $</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Product } from '../shared/dto/Product';

export default {
    data: () => ({
        selectedProducts: [],
    }),

    props: {
        products: {
            type: Array as () => Product[],
        },
        totalSum: {
            type: Number,
        },
    },

    computed: {
        allProductsChecked: {
            get(): boolean {
                return this.selectedProducts.length === this.products.length;
            },
            set(value: boolean): void {
                if (value) {
                    this.selectedProducts = this.products.map((product, index) => index);
                    return;
                }

                this.selectedProducts = [];
            }
        },
    },

    methods: {
        deleteProducts() {
            this.$emit('onDelete', this.selectedProducts);
        }
    }
}
</script>