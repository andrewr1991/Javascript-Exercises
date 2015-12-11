function longestCountryName() {
  var array = [];
  for (x=0;x<arguments.length;x++) {
    array.push(arguments[x]);
  }

  var longestName = array[0];

  for (x=1;x<array.length;x++) {
    if (longestName.length<array[x].length) {
      longestName = array[x];
    }
  }
  return longestName;
}

alert(longestCountryName('usa','france','china'));
