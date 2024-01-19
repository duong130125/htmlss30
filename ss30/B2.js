function inRaSoLeTongLe(n) {
    if (n <= 0 || !Number.isInteger(n)) {
      console.log("Vui lòng nhập số nguyên dương.");
      return;
    }
    var odd = [];
    var sum = 0;
    for (var i = 1; i <= n; i += 2) {
      odd.push(i);
      sum += i;
    }
    if (sum % 2 === 0) {
      odd.pop();
    }
    console.log(`Các số nguyên dương lẻ từ 1 đến ${n} sao cho tổng là số lẻ là: ${odd}`);
  }
  let n = parseInt(prompt("Nhập vào số nguyên dương n:"));
  inRaSoLeTongLe(n);
  