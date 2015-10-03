var socket = io();

function getAverageColourAsRGB (context) {
  var rgb = {r:102,g:102,b:102}, // Set a base colour as a fallback for non-compliant browsers
      pixelInterval = 5, // Rather than inspect every single pixel in the image inspect every 5th pixel
      count = 0,
      i = -4,
      data, length;

  // return the base colour for non-compliant browsers
  if (!context) { return rgb; }

  // set the height and width of the canvas element to that of the image
  var height = canvas.height;
  var width = canvas.width;
  context.drawImage(video, 0, 0, 640, 480);
  try {
    data = context.getImageData(0, 0, width, height);
  } catch(e) {
    // catch errors - usually due to cross domain security issues
    alert(e);
    return rgb;
  }

  data = data.data;
  length = data.length;
  while ((i += pixelInterval * 4) < length) {
    count++;
    rgb.r += data[i];
    rgb.g += data[i+1];
    rgb.b += data[i+2];
  }
  // floor the average values to give correct rgb values (ie: round number values)
  rgb.r = Math.floor(rgb.r/count);
  rgb.g = Math.floor(rgb.g/count);
  rgb.b = Math.floor(rgb.b/count);

  return rgb;
}

function rgbToH(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return h * 360;
}


var colour;

// Grab elements, create settings, etc.
	var canvas = document.createElement("canvas"),
		context = canvas.getContext("2d"),
		video = document.createElement("video"),
		videoObj = { "video": true },
		errBack = function(error) {
			console.log("Video capture error: ", error.code);
		};

  document.querySelector('.input').appendChild(video);
  canvas.width = 640;
  canvas.height = 480;
	// Put video listeners into place
	if(navigator.getUserMedia) { // Standard
		navigator.getUserMedia(videoObj, function(stream) {
			video.src = stream;
			video.play();
		}, errBack);
	} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
		navigator.webkitGetUserMedia(videoObj, function(stream){
			video.src = window.URL.createObjectURL(stream);
			video.play();
		}, errBack);
	}
	else if(navigator.mozGetUserMedia) { // Firefox-prefixed
		navigator.mozGetUserMedia(videoObj, function(stream){
			video.src = window.URL.createObjectURL(stream);
			video.play();
		}, errBack);
	}

var snap = function(){
  flash();
  addSelection();
};

var flash = function(){
  document.body.classList.add("flash");
  setTimeout(function(){
    document.body.classList.remove("flash");
  }, 100);
};

var hsl;

var calculateHSL = function(){
  var rgb = getAverageColourAsRGB(context);
  var h = rgbToH(rgb.r, rgb.g, rgb.b);
  hsl = "hsl(" + h + ", 60%, 50% )";
};

var displayInput = function(){
  document.querySelector('.input').style.backgroundColor = hsl;
};

var addSelection = function(){
  var selection = document.createElement('div');
  selection.className = "selection";
  selection.style.backgroundColor = hsl;
  selection.addEventListener("click", function(){
    selection.parentNode.removeChild(selection);
  }, false);
  document.querySelector(".selections").appendChild(selection);
};


var loop = function(){
  calculateHSL();
  displayInput();
  window.requestAnimationFrame(loop);
};

var roundom = function(number){
  return Math.round(number * Math.random());
};

var assignColour = function(){
  colour = "hsl(" + roundom(360) + ", 60%, 50%)";
  document.querySelector('.colour').style.backgroundColor = colour;
};

var init = function(){
  document.querySelector('.input').addEventListener('click', snap);
  assignColour();
  loop();
};
window.addEventListener("load", init, false);
