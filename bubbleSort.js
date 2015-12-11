function bubbleSort(array) {
  for (i=0;i<array.length;i++) {
    for (x=0,y=1;x<array.length,y<array.length;x++,y++) {
      if (array[x] > array[y]) {
        var temp = array[x];
        array[x] = array[y];
        array[y] = temp;
      }
    }
  }
  return array;
}

alert(bubbleSort([3,2,1,8,9,4,5,7,6,10]));
