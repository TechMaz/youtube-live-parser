
setTimeout(function(){ 

	Vue.component('chat-item', {
	  props: ['chat'],
	  template: '<tr><td><strong>{{ chat.author_name }}</strong>: {{ chat.message}}</td></tr>'
	})

	var chatbox = new Vue({
	  el: '#chatbox',
	  data: {
	    chats_arr: []
	  }
	})

	$.get('https://youtube-live-chat.herokuapp.com/scrape/MFH0i0KcE_o').then(function(responseData) {
  		chatbox.chats_arr = JSON.parse(responseData);
  		console.log(JSON.parse(responseData));
	});

}, 2000);

