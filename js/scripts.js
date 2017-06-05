function drawTree (height) {
  for (var i = 1; i <= height; i++) {
    var line = '';
    for (var j = 1; j <= i; j++) {
      line += '*';
    }
    console.log(line);
  }
}

drawTree(5);