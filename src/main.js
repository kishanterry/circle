import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from './router-config'

Vue.use(VueRouter)

const router = new VueRouter()
configRouter(router)

const App = Vue.extend(require('./components/App'))

router.start(App, '#app')
