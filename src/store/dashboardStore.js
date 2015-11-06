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
    return Promise.resolve("I am from dashboard store")
}