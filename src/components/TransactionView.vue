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
                <div class="text-left">
                    <h4>Reference Number: {{transaction.id}}</h4>
                </div>
                <hr>
                <div class="row">
                    <div class="col-xs-12 col-md-6 col-lg-6">
                        <div class="panel panel-info height">
                            <div class="panel-heading">
								<i class="fa fa-info-circle fa-fw"></i> Basic Information
							</div>
                            <div class="panel-body">
                                <strong>Status:</strong> {{transaction.status}}<br>
                                <strong>Price:</strong> {{transaction.price}}<br>
                                <strong>Number of Tickets:</strong> {{transaction.noOfTicket}}<br>
                                <strong>Outbound Time:</strong> {{transaction.outboundDT}}<br>
                                <strong>Inbound Time:</strong> {{transaction.inboundDT}}<br>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6 col-lg-6 pull-right">
                        <div class="panel panel-info height">
                            <div class="panel-heading">
								<i class="fa fa-plane fa-fw"></i> Flight Details
							</div>
                            <div class="panel-body">
                                <strong>Departure Airport:</strong> {{transaction.departureAirport.airportName}}, {{transaction.departureAirport.cityName}}, {{transaction.departureAirport.country}} <br />
                                <strong>Arrival Airport:</strong> {{transaction.arrivalAirport.airportName}}, {{transaction.arrivalAirport.cityName}}, {{transaction.arrivalAirport.country}} <br />
                                <strong>Airline:</strong> {{transaction.airline.airlineName}}<br>
                                <strong>Cabin Class:</strong> {{transaction.cabinClass}}<br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
					<div class="panel panel-primary">
						<div class="panel-heading">
                            <i class="fa fa-history"></i> Message History
                        </div>
					</div>
					<div class="panel-body">
                    	<ul class="timeline col-xs-10 col-xs-offset-1">
							<li v-for="message in transaction.messages" :class="{'timeline-inverted':($index % 2 == 1)}">
							  	<div class="timeline-badge info">
									<i class="glyphicon glyphicon-check"></i>
								</div>
							  	<div class="timeline-panel">
									<div class="timeline-heading">
								  		<h4 class="timeline-title">
                                            <a v-link="{ path: '/users/' + message['sender_id']}">
                                                {{transaction.seller.firstname}} {{transaction.seller.lastname}}
                                            </a>
                                        </h4>
								  		<p><small class="text-muted"><i class="fa fa-clock-o"></i> {{message.post_datetime}}</small></p>
									</div>
									<div class="timeline-body">
								  		<p>{{message.body}}</p>
									</div>
							  	</div>
							</li>
						</ul>
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
        this.transaction = {}
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

/* start timeline style */
.timeline {
  list-style: none;
  padding: 20px 0 20px;
  position: relative;
}

.timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 3px;
  background-color: #eeeeee;
  left: 50%;
  margin-left: -1.5px;
}

.timeline > li {
  margin-bottom: 20px;
  position: relative;
}

.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}

.timeline > li:after {
  clear: both;
}

.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}

.timeline > li:after {
  clear: both;
}

.timeline > li > .timeline-panel {
  width: 42%;
  float: left;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  padding: 20px;
  position: relative;
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
}

.timeline > li > .timeline-panel:before {
  position: absolute;
  top: 26px;
  right: -15px;
  display: inline-block;
  border-top: 15px solid transparent;
  border-left: 15px solid #ccc;
  border-right: 0 solid #ccc;
  border-bottom: 15px solid transparent;
  content: " ";
}

.timeline > li > .timeline-panel:after {
  position: absolute;
  top: 27px;
  right: -14px;
  display: inline-block;
  border-top: 14px solid transparent;
  border-left: 14px solid #fff;
  border-right: 0 solid #fff;
  border-bottom: 14px solid transparent;
  content: " ";
}

.timeline > li > .timeline-badge {
  color: #fff;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 1.4em;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 50%;
  margin-left: -25px;
  background-color: #999999;
  z-index: 100;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
}

.timeline > li.timeline-inverted > .timeline-panel {
  float: right;
}

.timeline > li.timeline-inverted > .timeline-panel:before {
  border-left-width: 0;
  border-right-width: 15px;
  left: -15px;
  right: auto;
}

.timeline > li.timeline-inverted > .timeline-panel:after {
  border-left-width: 0;
  border-right-width: 14px;
  left: -14px;
  right: auto;
}

.timeline-badge.primary {
  background-color: #2e6da4 !important;
}

.timeline-badge.success {
  background-color: #3f903f !important;
}

.timeline-badge.warning {
  background-color: #f0ad4e !important;
}

.timeline-badge.danger {
  background-color: #d9534f !important;
}

.timeline-badge.info {
  background-color: #5bc0de !important;
}

.timeline-title {
  margin-top: 0;
  color: inherit;
}

.timeline-body > p,
.timeline-body > ul {
  margin-bottom: 0;
  word-wrap: break-word;
}

.timeline-body > p + p {
  margin-top: 5px;
}
/* end timeline style */
</style>