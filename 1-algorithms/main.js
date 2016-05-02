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

  function drawPixel(x, y, canvasWidth, canvasData) {
    var index = (x + y * canvasWidth) * 4;

    canvasData.data[index + 0] = 0;
    canvasData.data[index + 1] = 0;
    canvasData.data[index + 2] = 0;
    canvasData.data[index + 3] = 255;
  }

  function updateCanvas(ctx, canvasData) {
    console.log("UPDATING", canvasData);
    ctx.putImageData(canvasData, 0, 0);
  }

  var x;
  var y;
  var c;
  var CANVAS_WIDTH = 1200;
  var CANVAS_HEIGHT = 1200;

  var ctx = createCanvas().getContext("2d");
  var canvasData = ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  var side = 48.6;
  for(var i = 0; i < CANVAS_HEIGHT; i++) {
    for(var j = 0; j < CANVAS_WIDTH; j++) {
      x = i * side/100;
      y = j * side/100;
      c = Math.round(x*x + y*y);
      if (c % 2 === 0) {
        drawPixel(i, j, CANVAS_WIDTH, canvasData);
      }
    }
  }

  updateCanvas(ctx, canvasData)
})();
