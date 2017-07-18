
setTimeout(function(){ 

	Vue.component('chat-item', {
	  props: ['message'],
	  template: '<tr><td>{{ message.text }}</td></tr>'
	})

	var chatbox = new Vue({
	  el: '#chatbox',
	  data: {
	    chats_arr: [
	    	{ id: 0, text: 'Vegetables' },
	      	{ id: 1, text: 'Cheese' },
	      	{ id: 2, text: 'Whatever else humans are supposed to eat' }
	    ]
	  }
	})

}, 2000);

