function laSoNguyenTo(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  var numberArray = [2, 8, 5, 9, 11, 17, 19, 23, 28, 31];
  var arrayPrime = numberArray.filter(laSoNguyenTo);
  console.log("Các số nguyên tố trong mảng là:", arrayPrime);
  