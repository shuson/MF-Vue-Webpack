<template>
	<div id="usersView" class="container-fluid">
		<div class="row">
			<div class="col-xs-12">
				<h1 class="page-header">Users List</h1>
				<div class="col-xs-4">
					<input type="text" class="form-control" v-model="searchKey" placeholder="Search User by Email" />
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12">
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
						<h5 v-show="users.length == 0">No new users joined us today!</h5>
						<tr v-for="entry in users | filterBy searchKey in 'email' ">
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
										<li><a v-link="{ path: '/users/' + entry['id']}">View</a></li>
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
				<ul class="pagination" v-show="users.length > 0">
					<li v-for="pageNumber in totalPages" :class="{active: currentPage === pageNumber}">
						<a href="javascript:void(0)" @click="setPage(pageNumber)">{{ pageNumber+1 }}</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import store from "../store/userStore"

	let baseUrl = ""

	export default {
		name: 'UserListView',

		data() {
			return {
				users: [],
				searchKey: "",
				currentPage: 0,
				itemsPerPage: 10,
				totalCount: 0
			}
		},
		computed: {
			totalPages: function () {
				return Math.ceil(this.totalCount / this.itemsPerPage)
			}
		},
		methods: {
			setPage: function (pageNumber) {
				this.currentPage = pageNumber
				window.history.pushState(null, 'User List', baseUrl + '?page=' + (pageNumber + 1))
			},
			sendResetPasswordLink: function (id) {
				store.sendResetPasswordLink(id).then(message => {
					alert(message);
				})
			},
			banUser: function (id) {
				store.banUser(id).then(message => {
					this.updateUsers();
				})
			},
			unBanUser: function (id) {
				store.unBanUser(id).then(message => {
					this.updateUsers();
				})
			},
			updateUsers: function () {
				store.getUsers().then(data => {
					this.users = data.users
				})
			}
		},
		filters: {
			paginator: function (list) {
				this.totalCount = list.length
				if (this.currentPage >= this.totalPages) {
					this.currentPage = this.totalPages - 1
				}
				let index = this.currentPage * this.itemsPerPage
				return list.slice(index, index + this.itemsPerPage)
			}
		},
		route: {
			data({
				to
			}) {
				this.users = []
				baseUrl = window.location.href.split('?')[0]
				let getUsers = (to.fullPath === "/users" ? store.getUsers : store.getNewUsers)

				return getUsers().then(function (data) {
					let page = parseInt(to.query.page) - 1 || 0
					return {
						users: data.users,
						currentPage: page
					}
				})
			}
		}
	}
</script>

<style>
	#usersView {}
</style>
