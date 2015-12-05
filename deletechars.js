function extractChar(str) {
  var array = [];
  array = str.split('');

  for (i=1;i<arguments.length;i++) {
    for (x=0;x<array.length;x++) {
      if (array[x] === arguments[i]) {
        var temp = array.indexOf(array[x]);
        array.splice(temp,1);
        x--;
      }
    }
  }
  document.write(array);
}

extractChar('hello my name is ben', 'b');
