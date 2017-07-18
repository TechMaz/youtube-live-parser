
Vue.component('chat-item', {
  props: ['message'],
  template: '<li>{{ message.text }}</li>'
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