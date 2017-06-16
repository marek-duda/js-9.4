function drawTree (height) {
  for (var i = 1; i <= height; i++) {
    var line = '';
      
      for (var k = i; k <= height; k++){
        line += ' ';
      }   
       for (var j = 1; j <= i * 2 - 1; j++) {
         line += '*';
    }
    console.log(line);
  }
}

drawTree(5);