import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

const store = new EventEmitter()

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