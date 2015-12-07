<template>
	<a v-show="isUserTab" href="javascript:window.history.back();"><i class="fa fa-arrow-left"></i> Back</a>
	<div id="transactionsView">
		<div class="row">
			<div class="col-xs-12">
				<h1 class="page-header">Transations List</h1>
                <div class="col-xs-4">
                  <input type="text" class="form-control" v-model="searchKey" placeholder="Search Transaction by Reference No." />
                </div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Reference ID</th>
                            <th>Number of Tickets</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Created Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="entry in transactions | filterBy searchKey in 'id'">
                            <td>{{entry['id']}}</td>
                            <td>{{entry['noOfTicket']}}</td>
                            <td>{{entry['status']}}</td>
                            <td>{{entry['price']}}</td>
                            <td>{{entry['created_at']}}</td>
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
                <ul class="pagination" v-show="transactions.length > 0">
                  <li v-for="pageNumber in totalPages" :class="{active: currentPage === pageNumber}">
                    <a href="javascript:void(0)" @click="setPage(pageNumber)" >{{ pageNumber+1 }}</a>
                  </li>
                </ul>
			</div>
		</div>
	</div>
</template>
<script>
import store from "../store/transactionStore"

let baseUrl = ""

export default {
	name: 'TransactionListView',

	data(){
		return {
			isUserTab: pageObject.tabName == "users",
			transactions: [],
            searchKey: "",
            currentPage: 0,
            itemsPerPage: 10,
            totalCount: 0
		}
	},
    computed: {
      totalPages: function() {
        return Math.ceil(this.totalCount / this.itemsPerPage)
      }
    },
    methods: {
      setPage: function(pageNumber) {
        this.currentPage = pageNumber
        window.history.pushState(null, 'Transaction List', baseUrl + '?page=' + (pageNumber+1))
      },
      updateTransactions: function(){
        //check tab name
		this.isUserTab = pageObject.tabName == "users"
        
        store.getTransactions(to.params.id).then(function(data){
            this.transactions = data.transactions
        })
      }
    },
    filters: {
      paginator: function(list){
        this.totalCount = list.length
        if (this.currentPage >= this.totalPages) {
          this.currentPage = this.totalPages - 1
        }
        let index = this.currentPage * this.itemsPerPage
        return list.slice(index, index + this.itemsPerPage)
      }
    },
	route:{
	  data({to}){
        baseUrl = window.location.href.split('?')[0]
	  	//check tab name
		this.isUserTab = pageObject.tabName == "users"
		
		return store.getTransactions(to.params.id).then(function(data){
          let page = parseInt(to.query.page) -1 || 0
          return {
            transactions: data.transactions,
            currentPage: page
          }
        })
	  }
	},
	
}
</script>
<style>
#transactionsView{

}

</style>