function gcd(num1,num2) {
  
  if (num1 == 0 || num2 == 0) {
    return 0;
  }
  else if (num1 == 1 || num2 == 1) {
    return 1;
  }
  else if (num1 < 0 || num2 < 0) {
    return -1;
  }

  else {
    var largest = 0;
    var smallest = 0;

      if (num1 >= num2) {
        largest = num1;
        smallest = num2;
    }
      else {
        largest = num2;
        smallest = num1;
    }

      for (x=2;x<=smallest;x++) {
          if ((smallest % x) == 0) {
            if ((largest % x) == 0) {
              return x;
            }
          }
      }
      return 1;
  }
}

alert(gcd(4,16));
