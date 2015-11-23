<template>
	<div id="transactionView">
		Transaction price is: {{trans.price}}
	</div>
</template>
<script>
import store from '../store/transactionStore'

export default {
	name: 'TransactionView',

	data(){
		return {
			trans: {}
		}
	},

	route:{
	  data({to}){
		return store.test().then(data=>({
			trans: data
		}))
	  }
	 }

}
</script>
<style>
#transactionView{

}

</style>