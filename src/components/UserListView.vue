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
				<div class="table">
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
								<td>
									<div class="dropdown">
									  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu{{entry['id']}}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Action
										<span class="caret"></span>
									  </button>
									  <ul class="dropdown-menu" aria-labelledby="dropdownMenu{{entry['id']}}">
									  	<li><a v-link="{ path: '/user/' + entry['id']}">View</a></li>
										<li><a @click="sendResetPasswordLink(entry['id'])" href="javascript:void(0)">Reset Password</a></li>
										<li>
											<a @click="banUser(entry['id'])" href="javascript:void(0)" v-if="entry['is_blocked'] == 0">Ban User</a>
											<a @click="unBanUser(entry['id'])" href="javascript:void(0)" v-else>Unban User</a>
										</li>
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
			alert(message.result);
		})
	},
	unBanUser:function(id){
		alert('unBanUser')
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