<template>
	<div id="transactionsView">
		Transactions View's data is: {{data}}
	</div>
</template>
<script>

export default {
	name: 'TransactionListView',

	data(){
		return {
			data: ""
		}
	},

	route:{
	  data({to}){
	  	data: to.params.userId
	  }
	 }

}
</script>
<style>
#transactionsView{

}

</style>