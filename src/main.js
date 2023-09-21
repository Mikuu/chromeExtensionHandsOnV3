import 'vuetify/styles'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import MyApp from './MyAPP.vue'
import router from './router'

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(MyApp)

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
