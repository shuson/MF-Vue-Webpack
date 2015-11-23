<template>
	<div id="wrapper">
		<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <a class="navbar-brand" href="#/">Admin Panel</a>
            </div>
            <!-- Top Menu Items -->
            <ul class="nav navbar-right top-nav">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> {{user.name}} <b class="caret"></b></a>
                    <ul class="dropdown-menu"> 
                        <li>
                            <a href="/auth/logout"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav side-nav">
                    <li @click="tabSwitch" :class="{'active': tabName == 'dashboard'}">
                        <a v-link="{ path: '/'}" name="dashboard"><i class="fa fa-fw fa-dashboard"></i> Dashboard</a>
                    </li>
                    <li @click="tabSwitch" :class="{'active': tabName == 'users'}">
                        <a v-link="{ path: '/users'}" name="users"><i class="fa fa-fw fa-users"></i> Users</a>
                    </li>
                    <li @click="tabSwitch" :class="{'active': tabName == 'transactions'}">
                        <a v-link="{ path: '/transactions'}" name="transactions"><i class="fa fa-fw fa-exchange"></i> Transactions</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>
         <!-- main view -->
         <div id="page-wrapper">
         	<router-view
		      keep-alive
			  >
		    </router-view>
         </div>
	</div>
</template>

<script>
export default {
    name: "app",
	data () {
		return {
			user: pageObject.user,
			tabName: pageObject.tabName,
			
		}
	},
	methods: {
		tabSwitch: function(event){
			this.tabName = event.target.name
			pageObject.tabName = this.tabName
		},
	},
	created () {
		var tempTagName = location.href.substr(location.href.lastIndexOf("#!") + 3) || "dashboard"
		this.tabName = tempTagName
	}
}
</script>

<style>
#wrapper {
    padding-left: 0;
}

#page-wrapper {
    width: 100%;
    padding: 10px 50px;
    height:100%; 
    background-color: #fff;
}

@media(min-width:768px) {
    #wrapper {
        padding-left: 225px;
    }

    #page-wrapper {
        padding: 10px 50px;
        min-height: 1024px;
    }
}

/* Top Navigation */

.top-nav {
    padding: 0 15px;
}

.top-nav>li {
    display: inline-block;
    float: left;
}

.top-nav>li>a {
    padding-top: 15px;
    padding-bottom: 15px;
    line-height: 20px;
    color: #999;
}

.top-nav>li>a:hover,
.top-nav>li>a:focus,
.top-nav>.open>a,
.top-nav>.open>a:hover,
.top-nav>.open>a:focus {
    color: #fff;
    background-color: #000;
}

.top-nav>.open>.dropdown-menu {
    float: left;
    position: absolute;
    margin-top: 0;
    border: 1px solid rgba(0,0,0,.15);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background-color: #fff;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
}

.top-nav>.open>.dropdown-menu>li>a {
    white-space: normal;
}

ul.message-dropdown {
    padding: 0;
    max-height: 250px;
    overflow-x: hidden;
    overflow-y: auto;
}

li.message-preview {
    width: 275px;
    border-bottom: 1px solid rgba(0,0,0,.15);
}

li.message-preview>a {
    padding-top: 15px;
    padding-bottom: 15px;
}

li.message-footer {
    margin: 5px 0;
}

ul.alert-dropdown {
    width: 200px;
}

/* Side Navigation */

@media(min-width:768px) {
    .side-nav {
        position: fixed;
        top: 51px;
        left: 225px;
        width: 225px;
        margin-left: -225px;
        border: none;
        border-radius: 0;
        overflow-y: auto;
        background-color: #222;
        bottom: 0;
        overflow-x: hidden;
        padding-bottom: 40px;
    }

    .side-nav>li>a {
        width: 225px;
    }

    .side-nav li a:hover,
    .side-nav li a:focus {
        outline: none;
        background-color: #000 !important;
    }
}

.side-nav>li>ul {
    padding: 0;
}

.side-nav>li>ul>li>a {
    display: block;
    padding: 10px 15px 10px 38px;
    text-decoration: none;
    color: #999;
}

.side-nav>li>ul>li>a:hover {
    color: #fff;
}
</style>