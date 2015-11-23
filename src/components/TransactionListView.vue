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
	  	//pageObject.tabName = "transactions";
		return {
			data: to.params.id
		}
	  }
	 }

}
</script>
<style>
#transactionsView{

}

</style>