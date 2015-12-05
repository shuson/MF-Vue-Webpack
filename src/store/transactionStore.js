import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

const store = new EventEmitter()

const baseUrl = 'http://milesfair.com:81/api/'

export default store

/**
 * get transactions list
 *
 * @return {Promise}
 */

store.getTransactions = () => {
	return new Promise((resolve, reject)=>{
        $.ajax({
			type: 'GET',
			url: baseUrl + 'transactions',
			dataType: 'json',
			success: function(data){
				resolve(data)
			},
			fail: function(xhr){

			}
		});
    })
}

/**
 * Test
 *
 * @return {Promise}
 */

store.getTransactionByIdTest = (id) => {
	if(id == 2){
		return Promise.resolve({
			id: 2,
			price: 233,
		})
	}
    return Promise.resolve({
		id: 3,
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
