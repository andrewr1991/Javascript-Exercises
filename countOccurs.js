function countOccurs(str,character) {
  var finalCount = 0;
  var array = str.split('');

  for (x=0;x<array.length;x++) {
    if (array[x] === character) {
      finalCount++
    }
  }
  document.write(finalCount);
}

countOccurs('hello my name is frank','f');
