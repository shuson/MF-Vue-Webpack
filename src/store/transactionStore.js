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
 * getTransactionById
 *
 * @return {Promise}
 */

store.getTransactionById = (id) => {
	return new Promise((resolve, reject)=>{
        $.ajax({
            type: "GET",
            url: baseUrl + "transactions/" + id,
            dataType: "json",
            success: function(data){
                resolve(data)
            },
            fail: function(){
                alert("oops, something goes wrong!")
            }
        })
    })
}

/**
 * Test
 *
 * @return {Promise}
 */

store.getTransactionByIdTest = (id) => {
    return Promise.resolve({
      transaction: {
                      id: 3,
                      price: 211,
                      seller: {
                        id: 1,
                        firstname: "seller",
                        lastname: "test",
                        avatar_url: "xxx"
                      },
                      buyer: {
                        id: 1,
                        firstname: "buyer",
                        lastname: "test",
                        avatar_url: "xxx"
                      },
                      departureAirport: {
                        id: 1,
                        airportName: "Changi",
                        city: "Singapore",
                        country: "Singapore"
                      },
                      arrivalAirport: {
                        id: 1,
                        airportName: "JinMen",
                        city: "Sanya",
                        country: "China"
                      },
                      airline: {
                        id: 1,
                        airlineName: "Singapore Air",
                        city: "Singapore",
                        country: "Singapore"
                      },
                      cabinClass: "First Class"
                  }
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
