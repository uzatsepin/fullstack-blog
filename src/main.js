import './assets/main.css'
import "primevue/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.use(router)

app.mount('#app')
