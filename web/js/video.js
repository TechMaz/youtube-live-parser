
setTimeout(function(){ 

	Vue.component('chat-item', {
	  props: ['message'],
	  template: '<tr><td>{{ message.text }}</td></tr>'
	})

	var chatbox = new Vue({
	  el: '#chatbox',
	  data: {
	    chats_arr: []
	  }
	})

	$.get('/scrape/MFH0i0KcE_o').then(function(responseData) {
  		chatbox.chats_arr = responseData;
	});

}, 2000);

