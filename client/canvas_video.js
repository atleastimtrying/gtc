var context, video, local_stream;

var stream_video = function(video){
  var videoObj = { "video": true };
  var errBack = function(error) {
    console.log("Video capture error: ", error.code);
  };

  // Put video listeners into place
  if(navigator.getUserMedia) { // Standard
    navigator.getUserMedia(videoObj, function(stream) {
      local_stream = stream;
      video.src = stream;
      video.play();
    }, errBack);
  } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
    navigator.webkitGetUserMedia(videoObj, function(stream){
      local_stream = stream;
      video.src = window.URL.createObjectURL(stream);
      video.play();
    }, errBack);
  }
  else if(navigator.mozGetUserMedia) { // Firefox-prefixed
    navigator.mozGetUserMedia(videoObj, function(stream){
      local_stream = stream;
      video.src = window.URL.createObjectURL(stream);
      video.play();
    }, errBack);
  }
};

module.exports.start = function(){
  var canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 480;
  context = canvas.getContext("2d");
  video = document.createElement("video");
  stream_video(video);
};

module.exports.stop = function(){
  video.stop();
  local_stream.stop();
};

module.exports.get_context = function(){
  context.drawImage(video, 0, 0, 640, 480);
  return context;
};


