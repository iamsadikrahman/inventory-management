<script setup>

import { useRoute } from "vue-router";
import { onBeforeMount, ref } from "vue";
import axios from "axios";
import router from "../../router/router.js";
const route = useRoute();

const productId = route.params.id;

console.log(productId)

const productDetails = ref({})

onBeforeMount(async () => {
  const response = await axios.get("https://dummyjson.com/products/" + productId);
  productDetails.value = response.data;
  console.log(productDetails.value);
});


const backStockTable = () => {
  router.push("/stock-data-table");
}


</script>

<template>
        <div class="flex space-x-10 items-center justify-evenly mx-auto">
          <div class="flex flex-col space-y-10 items-center">
              <h1 class="text-3xl font-semibold">{{ productDetails.title }}</h1>


                <img :src="productDetails.thumbnail"  :alt="productDetails.title">
          </div>

          <div class="flex flex-col space-y-10 items-center">
            <h2 class="text-3xl font-semibold">Product Details</h2>
            <p class="text-lg w-[500px]">{{ productDetails.description }}</p>
            <p class="text-3xl font-bold">Price: ${{ productDetails.price }}</p>
            <p class="text-lg">Stock: {{ productDetails.stock }}</p>
            <p class="text-lg">Brand: {{ productDetails.brand }}</p>
            <p class="text-lg">Categories: {{ productDetails.category }}</p>
            <p>Ratting: {{ productDetails.rating }}</p>
            <p  class="text-lg">Discount: {{productDetails.discountPercentage}}</p>
          </div>
        </div>
  <span class="flex items-center justify-center"><button type="button" @click="backStockTable" class="bg-[#6366F1] hover:bg-[#6366D2] text-white font-bold py-2 px-4 rounded">Back to Stock Table</button></span>
</template>

<style scoped>
</style>
