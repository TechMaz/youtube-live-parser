
setTimeout(function(){ 

	/*Vue.component('chat-item', {
	  template: '<ul><li>test</li><li>test</li></ul>'
	})

	var chatbox = new Vue({
	  el: '#chatbox',
	  data: {
	    chat_item: ''
	  }
	})*/

	$.get('https://youtube-live-chat.herokuapp.com/chats/MFH0i0KcE_o').then(function(responseData) {
  		//chatbox.chat_item = responseData;
  		//console.log(responseData);
  		$('#chatbox').html(responseData);
	});
	$("#yt-chat-container").animate({ scrollTop: $('#yt-chat-container').prop("scrollHeight")}, 1000);

}, 2000);

