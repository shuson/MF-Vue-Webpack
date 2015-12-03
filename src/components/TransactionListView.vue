<template>
	<a v-show="isUserTab" href="javascript:window.history.back();"><i class="fa fa-arrow-left"></i> Back</a>
	<div id="transactionsView">
		<div class="row">
			<div class="col-xs-12">
				<h1 class="page-header">Transations List</h1>
				<input type="text" placeholder="Search Transaction by Reference No." />
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12">
				<div class="table">
					<table class="table table-hover table-striped">
						<thead>
							<tr>
								<th>ID</th>
								<th>Time</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="entry in data">
								<td>{{entry['id']}}</td>
								<td>{{entry['time']}}</td>
								<td>
									<div class="dropdown">
									  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu{{entry['id']}}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Action
										<span class="caret"></span>
									  </button>
									  <ul class="dropdown-menu" aria-labelledby="dropdownMenu{{entry['id']}}">
									  	<li><a v-link="{ path: '/transactions/' + entry['id']}">View</a></li>
									  </ul>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import store from "../store/transactionStore"

export default {
	name: 'TransactionListView',

	data(){
		return {
			isUserTab: pageObject.tabName == "users",
			data: []
		}
	},
	
	route:{
	  data({to}){
	  	//check tab name
		this.isUserTab = pageObject.tabName == "users"
		
		return store.getTransactionsTest(to.params.id).then(data=>({
			data: data.transactions
		}))
	  }
	},
	
}
</script>
<style>
#transactionsView{

}

</style>