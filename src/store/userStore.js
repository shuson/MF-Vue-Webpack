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
			url: baseUrl + 'users',
			dataType: 'json',
			success: function(data){
				resolve(data)
			},
			fail: function(xhr){
				alert("oops, something goes wrong!")
			}
		});
	});
}

/**
 * get new users list
 *
 * @param {string} id
 * @return {Promise}
 */
store.getNewUsers = () => {
	return new Promise((resolve, reject) => {
		$.ajax({
			type: 'GET',
			url: baseUrl + 'newusers',
			dataType: 'json',
			success: function(data){
				resolve(data)
			},
			fail: function(xhr){
				alert("oops, something goes wrong!")
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
 			url: baseUrl + 'users/' + id,
 			dataType: 'json',
			success: function(data){
				resolve(data)
			},
			fail: function(xhr){

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
			url: baseUrl + 'users/ban/' + id,
			dataType: 'json',
			success: function(data){
				resolve(data)
			},
			fail: function(xhr){

			}
		})
	})
}

/**
 * ubban user by id
 *
 * @param {string} id
 * @return {Promise}
 */
store.unBanUser = id => {
	return new Promise((resolve, reject) => {
		$.ajax({
			type: 'GET',
			url: baseUrl + 'users/unban/' + id,
			dataType: 'json',
			success: function(data){
				resolve(data)
			},
			fail: function(xhr){

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
			email: "Jerry",
			is_blocked: 0,
			is_activate: 0,
			created_at: '1992-09-18'
		},
		{
			id: 3,
			email: "Curry",
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
