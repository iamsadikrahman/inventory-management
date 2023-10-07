<script setup>
import {onBeforeMount, ref} from "vue";
import axios from "axios";


const productsList = ref([])

onBeforeMount(async () => {
  const response = await axios.get("https://dummyjson.com/products")
  productsList.value = response.data.products
  console.log(productsList.value)
})



const headers = [
  {
    text: "NAME",
    value: "title"
  },
  {
    text: "PRICE",
    value: "price"
  },
  {
    text: "Stock",
    value: "stock"
  },
  {
    text: "ACTION",
    value: "action"
  }
];

</script>

<template>
  <EasyDataTable :headers="headers" :items="productsList" :rows-per-page="10">
    <template #item-action="item">

     <router-link :to="/product/+item.id"><button type="button" class="bg-[#6366F1] hover:bg-[#6366D2] text-white font-bold py-2 px-4 rounded">View Details</button></router-link>
    </template>
  </EasyDataTable>
</template>

<style scoped>
</style>
