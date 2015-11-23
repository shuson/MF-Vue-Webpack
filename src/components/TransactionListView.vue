<template>
	<div id="transactionsView">
		Transactions View's data is: {{data.id}}
		<hr />
		<a v-link="{path: '/transaction/' + data.id}" href="javascript:void(0)" > Transaction View Test</a>
	</div>
</template>
<script>

export default {
	name: 'TransactionListView',

	data(){
		return {
			data: {}
		}
	},

	route:{
	  data({to}){
		return {
			data: {
				id: to.params.id
			}
		}
	  }
	 }

}
</script>
<style>
#transactionsView{

}

</style>