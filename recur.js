function recur(num) {
  if (num == 0) {
    return 1;
  }
  else if (num < 0) {
    return -1;
  }
  else {
  return (num * recur(num-1));
  }
}

var result = recur(5);
document.write(result);
