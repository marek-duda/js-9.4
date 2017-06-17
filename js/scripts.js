function drawTree (height) {
    for (var i = 0; i < height; i++) {
        var line = '';
        for (var k = i; k < height - 1; k++){
            line += ' ';
        }   
        for (var j = 0; j < i * 2 - 1; j++) {
            line += '*';
        }
        console.log(line);
    }
}

drawTree(5);