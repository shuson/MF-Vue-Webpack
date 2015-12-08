<template>
	<a href="javascript:window.history.back();"><i class="fa fa-arrow-left"></i> Back</a>
	<div id="transactionView">
		<div class="row">
			<div class="col-xs-12">
				<h1 class="page-header">Transaction Details</h1>
			</div>
		</div>
        <div class="row">
            <div class="col-xs-12">
                <div class="text-center">
                    <h4>Reference Number: {{transaction.id}}</h4>
                </div>
                <hr>
                <div class="row">
                    <div class="col-xs-12 col-md-6 col-lg-4 pull-left">
                        <div class="panel panel-info ">
                            <div class="panel-heading">Seller Details</div>
                            <div class="panel-body">
                                <strong>Seller Name:</strong>
                                {{transaction.seller.firstname}} {{transaction.seller.lastname}}
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6 col-lg-4">
                        <div class="panel panel-info ">
                            <div class="panel-heading">Buyer Details</div>
                            <div class="panel-body">
                                <strong>Buyer Name:</strong>
                                {{transaction.buyer.firstname}} {{transaction.buyer.lastname}}
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6 col-lg-4">
                        <div class="panel panel-default height">
                            <div class="panel-heading">Flight Details</div>
                            <div class="panel-body">
                                <strong>Departure Airport:</strong> {{transaction.departureAirport.airportName}} <br />
                                <strong>Arrival Airport:</strong> {{transaction.arrivalAirport.airportName}} <br />
                                <strong>Airline:</strong> {{transaction.airline.airlineName}}<br>
                                <strong>Cabin Class:</strong> {{transaction.cabinClass}}<br>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6 col-lg-4 pull-right">
                        <div class="panel panel-default height">
                            <div class="panel-heading">Shipping Address</div>
                            <div class="panel-body">
                                <strong>David Peere:</strong><br>
                                1111 Army Navy Drive<br>
                                Arlington<br>
                                VA<br>
                                <strong>22 203</strong><br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
.height {
    min-height: 200px;
}
</style>