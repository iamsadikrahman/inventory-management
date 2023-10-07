import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router/router.js'

import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


createApp(App).use(router).component('EasyDataTable', Vue3EasyDataTable).mount('#app')
