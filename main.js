import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import api from "./api"
Vue.prototype.uApi = api

const app = new Vue({
    ...App
})
app.$mount()
