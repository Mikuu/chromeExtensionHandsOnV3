import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import App from './App.vue'
import MyApp from './MyAPP.vue'
import router from './router'

const app = createApp(MyApp)

app.use(createPinia())
app.use(router)

app.mount('#app')
