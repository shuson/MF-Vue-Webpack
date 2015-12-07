<template>
	<a href="javascript:window.history.back();"><i class="fa fa-arrow-left"></i> Back</a>
	<div id="transactionView">
		Transaction price is: {{transaction.price}}
        <br />
        Transaction buyer is {{transaction.buyer.firstname}}
	</div>
</template>
<script>
import store from '../store/transactionStore'

export default {
	name: 'TransactionView',

	data(){
		return {
			transaction: {}
		}
	},

	route:{
	  data({to}){
		return store.getTransactionById(to.params.id).then(data=>({
			transaction: data.transaction
		}))
	  }
	 }

}
</script>
<style>
#transactionView{

}

</style>