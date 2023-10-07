import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import StockDataTableView from "../views/StockDataTableView.vue";
import ProductDetailsView from "../views/ProductDetailsView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/stock-data-table",
            name: "stock-data-table-view",
            component: StockDataTableView,
        },
        {
            path: "/product/:id",
            name: "product-details-view",
            component: ProductDetailsView,
        },
    ],
});


export default router
