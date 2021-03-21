import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import api from "./api/index"
Vue.prototype.uApi = api

import { router } from "./router/index"
Vue.prototype.uRouter = router

const app = new Vue({
    ...App
})
app.$mount()
