<template>
	<div id="usersView" class="container-fluid">
		<div class="row">
			<div class="col-xs-12">
				<h1 class="page-header">User List</h1>
				<input type="text" placeholder="Search User by Name" />
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12">
				<div class="table-responsive">
					<table class="table table-hover table-striped">
						<thead>
							<tr>
								<th>ID</th>
								<th>Email</th>
								<th>Activation Status</th>
								<th>Ban Status</th>
								<th>Join Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="entry in data">
								<td>{{entry['id']}}</td>
								<td>{{entry['email']}}</td>
								<td>
									<span v-if="entry['is_activate'] == 0">
										Not Activated
									</span>
									<span v-else>
										Activated
									</span>
								</td>
								<td>
									<span v-if="entry['is_blocked'] == 0">
										Not Blocked
									</span>
									<span v-else>
										Blocked
									</span>
								</td>
								<td>{{entry['created_at']}}</td>
								<td><a class="btn btn-primary btn-xs" v-link="{ path: '/user/' + entry['id']}">View</a></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import store from "../store/userStore"

export default {
  name: 'UserListView',

  data(){
	return {
		data: []
	}
  },
  methods: {
	sendResetPasswordLink: function(id){
		store.sendResetPasswordLink(id).then(message=>{
			alert(message);
		})
	},
	banUser: function(id){
		store.banUser(id).then(message=>{
			alert(message);
		})
	}
  },  
  route:{
  	data({to}){
  		return store.getUsers().then(data=>({
  			data: data.users
  		}))
  	}
  }
}
</script>

<style>
#usersView{
    
}

</style>