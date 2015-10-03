
var init = function(){
  var socket = io();
  document.querySelector('.join').addEventListener('click', function(event){
    event.preventDefault();
    socket.on('joined', function(confirmation_code){
      console.log('joined', confirmation_code);
    });
    socket.emit('join', {code: '123abc'});
    console.log('emit');
  });
};
window.addEventListener("load", init, false);

