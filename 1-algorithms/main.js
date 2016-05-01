(function () {
  "use strict";

  function createCanvas() {
    var canvas = document.createElement("canvas")
    var cwAttribute = document.createAttribute("width");
    cwAttribute.value = CANVAS_WIDTH + "";

    var chAttribute = document.createAttribute("height");
    chAttribute.value = CANVAS_HEIGHT + "";
    canvas.setAttributeNode(cwAttribute);
    canvas.setAttributeNode(chAttribute);
    document.body.appendChild(canvas);
    return canvas;

  }

  function drawPixel(x, y, context) {
    context.fillRect(x, y, 1, 1);
  }

  var x;
  var y;
  var c;
  var CANVAS_WIDTH = 600;
  var CANVAS_HEIGHT = 600;

  var ctx = createCanvas().getContext("2d");

  var side = 30;
  for(var i = 0; i < CANVAS_HEIGHT; i++) {
    for(var j = 0; j < CANVAS_WIDTH; j++) {
      x = 5 + i * side/100;
      y = 5 + j * side/100;
      c = Math.round(x*x + y*y);
      if (c % 2 === 0) {
        drawPixel(i, j, ctx);
      }
    }
  }
})();
