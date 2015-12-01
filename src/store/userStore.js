import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

const store = new EventEmitter()

const baseUrl = 'http://milesfair.com:81/api/'

export default store

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
	return new Promise((resolve, reject) => {
		$.ajax({
			type: 'GET',
			url: baseUrl + 'user/ban/' + id,
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
 * send reset password link by id
 *
 * @param {string} id
 * @return {Promise}
 */
store.sendResetPasswordLink = id => {
	return Promise.resolve("Successfully send link to " + id);
}

/**
 * getUsersTest
 *
 * @return {Promise}
 */

store.getUsersTest = () => {
    return Promise.resolve({
		users: [
		{
			id: 1,
			email: "Tommy",
			is_blocked: 0,
			is_activate: 0,
			created_at: '1992-09-18'
		},
		{
			id: 2,
			email: "Tommy2",
			is_blocked: 0,
			is_activate: 0,
			created_at: '1992-09-18'
		},
		{
			id: 3,
			email: "Tommy3",
			is_blocked: 1,
			is_activate: 0,
			created_at: '1992-09-18'
		},
	]
	})
}

/**
 * getCustomerByIdTest
 *
 * @return {Promise}
 */

store.getCustomerByIdTest = () => {
    return Promise.resolve({
		customer: {
		id: 1,
		user_id: 2,
		firstname: "Tommy",
		lastname: "Cat",
		avatar_url: "http://avatar_url",
		birthday: "1998-09-09",
		country: "SG",
		addr_city: "Singapore",
		languages: "A,B,C",
		phoneNo: "19293322",
	}
	})
}
