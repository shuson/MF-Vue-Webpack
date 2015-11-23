/**
 * Created by shuson on 5/11/15.
 */
import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import DashboardView from './components/DashboardView.vue'
import UserListView from './components/UserListView.vue'
import UserView from './components/UserView.vue'
import TransactionListView from './components/TransactionListView.vue'
import TransactionView from './components/TransactionView.vue'

// install router
Vue.use(Router)

// routing
var router = new Router()

router.map({
	'/': {
		component: DashboardView
	},
	'/users': {
		component: UserListView
	},
	'/user/:id': {
		component: UserView
	},
	'/user/:id/transactions': {
		component: TransactionListView
	},
	'/user/:id/transaction/:transId': {
		component: TransactionView
	},
	'/transactions': {
		component: TransactionListView
	},
	'/transaction/:id': {
		component: TransactionView
	},
})

router.beforeEach(function () {
	window.scrollTo(0, 0)
})

router.redirect({
	'*': '/'
})

router.start(App, '#app')
