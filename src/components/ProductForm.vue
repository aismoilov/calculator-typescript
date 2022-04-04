<template>
    <div class="flex flex-wrap justify-between items-center my-4">
        <div class="flex flex-nowrap w-10/12">
            <input
                type="text"
                placeholder=" Product name"
                v-model="productData.name"
                class="border-2 rounded w-1/3 mr-4 px-2"
            />
            <input
                type="number"
                placeholder="Price"
                v-model="productData.price"
                class="border-2 rounded mr-4 px-2"
            />
            <input
                type="number"
                placeholder="Qty"
                v-model="productData.quantity"
                class="border-2 rounded mr-4 px-2"
            />
        </div>
        <button
            :disabled="!formFilled"
            class="text-white font-bold py-2 px-4 rounded"
            :class="{'bg-green-200': !formFilled, 'bg-green-500 hover:bg-green-700': formFilled}"
            @click="addProduct()"
        >
            Add
        </button>
    </div>
</template>

<script lang="ts">
export default {
    data: () => ({
        productData: {
            name: "",
            price: null,
            quantity: null,
        },
    }),


    computed: {
        formFilled(): boolean {
            return this.productData.name !== "" && this.productData.price !== null && this.productData.quantity !== null;
        },
    },

    methods: {
        addProduct(): void {
            this.$emit('onSubmit', this.productData);
            this.productData = {
                name: "",
                price: null,
                quantity: null,
            }
        }
    },
}
</script>