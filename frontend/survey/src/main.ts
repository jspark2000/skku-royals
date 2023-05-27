import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { registerPlugins } from '@/plugins'
import './input.css'

const app = createApp(App)

registerPlugins(app)
app.use(createPinia())
app.mount('#app')
