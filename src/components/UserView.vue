<template>
	<div id="userView" class="container-fluid">
		<div class="row">
			<div class="col-xs-12">
				<h1 class="page-header">User Details</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12">
				 <div class="panel panel-info">
            <div class="panel-heading">
              <h3 class="panel-title">{{customer.firstname}} {{customer.lastname}}</h3>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-md-3 col-lg-3 " align="center"> 
                	<img alt="" :src="customer.avatar_url" class="img-circle img-responsive" />
                </div>
                <div class=" col-md-9 col-lg-9 "> 
                  <table class="table table-user-information">
                    <tbody>
                       <tr>
                        <td>Birthday:</td>
                        <td>{{customer.birthday}}</td>
                      </tr>
                      <tr>
                        <td>Country:</td>
                        <td>{{customer.country}}</td>
                      </tr>
                      <tr>
                        <td>City:</td>
                        <td>{{customer.addr_city}}</td>
                      </tr>
                      <tr>
                        <td>Languages:</td>
                        <td>{{customer.languages}}</td>
                      </tr>
                      <tr>
                        <td>Phone No.:</td>
                        <td>{{customer.phoneNo}}</td>
                      </tr>
                    </tbody>
                  </table>
                  <a v-link="{path: '/user/' + customer.user_id + '/transactions'}" href="javascript:void(0)" class="btn btn-primary">View Transactions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
	</div>
</template>

<script>
import store from "../store/userStore"

export default {
  name: 'UserView',

  data(){
  	return {
  		customer: {}
  	}
  },
  methods: {

  },  
  
  route: {
  	data({to}) {
  		return store.getCustomerByIdTest(to.params.id).then(data=>({
  			customer: data.customer
  		}))
  	}
  }
}
</script>

<style>
#userView{
    
}

</style>