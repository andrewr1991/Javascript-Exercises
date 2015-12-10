function findingNonRepeat(str) {
  array = str.split('');

  for (x=0;x<array.length;x++) {
    if (array.indexOf(array[x]) == x && array.indexOf(array[x],x+1) === -1) {
      return array[x];
    }
  }
}

alert(findingNonRepeat('ffrraannkkff'));
