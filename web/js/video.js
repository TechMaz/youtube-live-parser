
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

	updateChats();

}, 500);

function updateChats(){
	$.get('https://youtube-live-chat.herokuapp.com/chats/MFH0i0KcE_o').then(function(responseData) {
  		//chatbox.chat_item = responseData;
  		//console.log(responseData);
  		$('#chatbox').html(responseData);
  		setTimeout(function(){
			$('#yt-chat-container').scrollTop($('#yt-chat-container')[0].scrollHeight);
			$('#chatbox').scrollTop($('#chatbox')[0].scrollHeight);
		}, 200);
		setTimeout(updateChats,10000);
	});
}