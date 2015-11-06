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
								<th>Name</th>
								<th>Age</th>
								<th>Status</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="entry in data">
								<td>{{entry['id']}}</td>
								<td>{{entry['name']}}</td>
								<td>{{entry['age']}}</td>
								<td>{{entry['status']}}</td>
								<td>
									<div class="dropdown">
									  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu{{entry['id']}}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Action
										<span class="caret"></span>
									  </button>
									  <ul class="dropdown-menu" aria-labelledby="dropdownMenu{{entry['id']}}">
										<li><a @click="sendResetPasswordLink(entry['id'])" href="javascript:void(0)">Reset Password</a></li>
										<li><a @click="banUser(entry['id'])" href="javascript:void(0)">Ban User</a></li>
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
  created(){
	store.test().then(users => {
		this.data = users
	})
  }
}
</script>

<style>
#usersView{
    
}

</style>