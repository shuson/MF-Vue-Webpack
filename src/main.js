/**
 * Created by shuson on 5/11/15.
 */
import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import DashboardView from './components/DashboardView.vue'

// install router
Vue.use(Router)

// routing
var router = new Router()

router.map({
  '/': {
    component: DashboardView
  },
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')