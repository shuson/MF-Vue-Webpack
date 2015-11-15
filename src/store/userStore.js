import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

const store = new EventEmitter()

const baseUrl = 'http://milesfair.com:81/api/'

export default store

/**
 * Test
 *
 * @return {Promise}
 */

store.test = () => {
    return Promise.resolve([
		{
			id: 1,
			name: "Tommy",
			age: 22,
			status: "Active"
		},
		{
			id: 2,
			name: "Puppy",
			age: 21,
			status: "Active"
		},
		{
			id: 3,
			name: "Sonny",
			age: 23,
			status: "Banned"
		},
	])
}

/**
 * get users list
 *
 * @param {string} id
 * @return {Promise}
 */
store.getUsers = () => {
	return new Promise((resolve, reject) => {
		$.ajax({
			type: 'GET',
			url: baseUrl + 'user',
			dataType: 'json',
			beforeSend: function(xhr) {
				xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
		  	},
			success: function(data){
				resolve(data)
			},
			fail: function(xhr){

			},
			statusCode: {
			   401: function() {
			     window.open("http://milesfair.com:81/auth/logout","_self")
			   }
			}
		});
	});
}

/**
 * get user's profile by id
 *
 * @param {string} id
 * @return {Promise}
 */

 store.getCustomerById = id => {
 	return new Promise((resolve, reject) => {
 		$.ajax({
 			type: 'GET',
 			url: baseUrl + 'user/' + id,
 			dataType: 'json',
 			beforeSend: function(xhr) {
				xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
		  	},
			success: function(data){
				resolve(data)
			},
			fail: function(xhr){

			},
			statusCode: {
			   401: function() {
			     window.open("http://milesfair.com:81/auth/logout","_self")
			   }
			}
 		})
 	})
 }

/**
 * ban user by id
 *
 * @param {string} id
 * @return {Promise}
 */
store.banUser = id => {
	return Promise.resolve("Successfully ban user " + id);
}

/**
 * send reset password link by id
 *
 * @param {string} id
 * @return {Promise}
 */
store.sendResetPasswordLink = id => {
	return Promise.resolve("Successfully send link to " + id);
}

