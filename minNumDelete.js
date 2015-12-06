function minNumDelete(array,minNum) {

  for (i=0;i<array.length;i++) {
    if (array[0] <= minNum) {
      var temp = array.indexOf(array[i])
      array.splice(temp,1);
      i--
    }
  }
  return array;
}

minNumDelete([1,2,3,4,5,6,7,8,9],5);
