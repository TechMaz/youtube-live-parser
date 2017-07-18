
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
	var chats_url = 'https://youtube-live-chat.herokuapp.com/chats/' + window.location.pathname.split('/')[2];
	$.get(chats_url).then(function(responseData) {
  		//chatbox.chat_item = responseData;
  		//console.log(responseData);
  		var prevdata = $('#chatbox').html();
  		$('#chatbox').html(responseData);
  		if(prevdata != responseData){
  			setTimeout(function(){
				$('#yt-chat-container').scrollTop($('#yt-chat-container')[0].scrollHeight);
				$('#chatbox').scrollTop($('#chatbox')[0].scrollHeight);
			}, 200);
  		}
		setTimeout(updateChats,5000);
	});
}