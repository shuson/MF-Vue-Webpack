<template>
	<div id="dashbaordView" class="container-fluid">
		{{message}}
	</div>
	
</template>

<script>
import store from "../store/dashboardStore"

export default {
  name: 'DashboardView',
  data () {
	return {
		message: "dashboard"
	}
  },
  
  created () {
	store.test().then(message => {
		this.message = message
	})
  }
}
</script>

<style>
#dashbaordView{
    
}

</style>