/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import router from '@/router'

// Plugins
import { registerPlugins } from '@/plugins'
import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'

const app = createApp(App)

registerPlugins(app)
app.component('EasyDataTable', Vue3EasyDataTable)
app.use(VueSweetalert2)
app.use(router)
app.use(createPinia())
app.mount('#app')
