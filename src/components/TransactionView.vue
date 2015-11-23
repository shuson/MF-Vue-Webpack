<template>
	<a href="javascript:window.history.back();"><i class="fa fa-arrow-left"></i> Back</a>
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
		return store.getTransactionByIdTest(to.params.id).then(data=>({
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