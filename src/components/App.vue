<template>
    <div id="wrapper">
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <a class="navbar-brand" href="#/">Admin Panel</a>
            </div>
            <!-- Top Menu Items -->
            <div id="ajaxLoader" style="display:none">
                <div id="fountainG">
                    <div id="fountainG_1" class="fountainG"></div>
                    <div id="fountainG_2" class="fountainG"></div>
                    <div id="fountainG_3" class="fountainG"></div>
                    <div id="fountainG_4" class="fountainG"></div>
                    <div id="fountainG_5" class="fountainG"></div>
                    <div id="fountainG_6" class="fountainG"></div>
                    <div id="fountainG_7" class="fountainG"></div>
                    <div id="fountainG_8" class="fountainG"></div>
                </div>
            </div>
            <ul class="nav navbar-right top-nav">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" style="min-width:200px"><i class="fa fa-user"></i> {{user.name}} <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="/password/change"><i class="fa fa-fw fa-key"></i> Change Password</a>
                        </li>
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
                        <a v-link="{ path: '/users?page=1'}" name="users"><i class="fa fa-fw fa-users"></i> Members</a>
                    </li>
                    <li @click="tabSwitch" :class="{'active': tabName == 'transactions'}">
                        <a v-link="{ path: '/transactions?page=1'}" name="transactions"><i class="fa fa-fw fa-exchange"></i> Orders</a>
                    </li>
                    <li @click="tabSwitch" :class="{'active': tabName == 'pages'}">
                        <a v-link="{ path: '/pages?page=1'}" name="pages"><i class="fa fa-fw fa-file"></i> Pages</a>
                    </li>
                    <li @click="tabSwitch" :class="{'active': tabName == 'inventory'}">
                        <a v-link="{ path: '/inventory?page=1'}" name="inventory"><i class="fa fa-fw fa-list-alt"></i> Inventory</a>
                    </li>
                    <li @click="tabSwitch" :class="{'active': tabName == 'marketing'}">
                        <a v-link="{ path: '/marketing?page=1'}" name="marketing"><i class="fa fa-fw fa-globe"></i> Marketing</a>
                    </li>
                    <li @click="tabSwitch" :class="{'active': tabName == 'promocode'}">
                        <a v-link="{ path: '/promocode?page=1'}" name="promocode"><i class="fa fa-fw fa-pencil-square-o"></i> Discount / Promo Code</a>
                    </li>
                    <li @click="tabSwitch" :class="{'active': tabName == 'livechat'}">
                        <a v-link="{ path: '/livechat'}" name="livechat"><i class="fa fa-fw fa-weixin"></i> Live Chat</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>
        <!-- main view -->
        <div id="page-wrapper">
            <router-view keep-alive>
            </router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app",
        data() {
            return {
                user: pageObject.user,
                tabName: pageObject.tabName,

            }
        },
        methods: {
            tabSwitch: function (event) {
                this.tabName = event.target.name
                pageObject.tabName = this.tabName
            },
        },
        created() {
            let hashIndex = location.href.lastIndexOf("#!") + 3
            let searchIndex = location.href.lastIndexOf("?")
            let tempTagName = location.href.substr(hashIndex, searchIndex - hashIndex) || "dashboard"

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
        height: 100%;
        background-color: #fff;
    }
    
    @media(min-width:768px) {
        #wrapper {
            padding-left: 225px;
        }
        #page-wrapper {
            padding: 10px 50px;
            min-height: 400px;
        }
        #ajaxLoader {
            left: 50%
        }
    }
    /* Top Navigation */

    .top-nav {
        padding: 0 15px;
    }

    .top-nav>li {
        display: inline-block;
        float: left;
        min-width: 200px;
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
        min-width: 200px;
        border: 1px solid rgba(0, 0, 0, .15);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        background-color: #fff;
        -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
        box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
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
        border-bottom: 1px solid rgba(0, 0, 0, .15);
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
            background-color: #3F3E3F;
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
