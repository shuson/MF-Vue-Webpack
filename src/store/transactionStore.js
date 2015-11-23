import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

const store = new EventEmitter()

export default store

/**
 * Test
 *
 * @return {Promise}
 */

store.getTransactionByIdTest = (id) => {
	if(id){
		return Promise.resolve({
			id: 2,
			price: 233,
		})
	}
    return Promise.resolve({
		id: 2,
		price: 211,
	})
}

/**
 * Test
 *
 * @return {Promise}
 */

store.getTransactionsTest = (id) => {
	if(id){
		return Promise.resolve({transactions: [
			{
				id: 1,
				time: "1990-09-11"
			},
		]})
	}

	//get all transactions
    return Promise.resolve({transactions: [
		{
			id: 1,
			time: "1990-09-11"
		},
		{
			id: 2,
			time: "1990-09-12"
		},
		{
			id: 3,
			time: "1990-09-14"
		},
	]})
}
