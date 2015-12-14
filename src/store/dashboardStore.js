import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

const store = new EventEmitter()

const baseUrl = 'http://milesfair.com:81/api/'

export default store

/**
 * countByToday
 *
 * @return {Promise}
 */

store.countByToday = () => {
    return new Promise((resolve, reject)=>{
			$.ajax({
				type: 'GET',
				url: baseUrl + 'countbytoday',
				dataType: 'json',
				success: function(data){
					resolve(data)
				},
				fail: function(xhr){
					alert("oops, something goes wrong!")
				}
			});
		})
}
