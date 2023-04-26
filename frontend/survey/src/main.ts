import { createApp } from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2'
import { createPinia } from 'pinia'
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)
app.use(VueSweetalert2)
app.use(createPinia())
app.mount('#app')
