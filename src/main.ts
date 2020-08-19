// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'
// import { createWebHashHistory, createRouter } from 'vue-router'
// import Hao from './components/hao.vue'
// import Hao2 from './components/xxx.vue'

// const history = createWebHashHistory()
// const router = createRouter({
//     history: history,
//     routes: [
//         { path: '/', component: Hao },
//         { path: '/xxx', component: Hao2 }
//     ]
// })

// const app = createApp(App)
// app.use(router)
// app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Hao from './components/hao.vue'
import Hao2 from './components/xxx.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Hao },
        { path: '/xxx', component: Hao2 }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')