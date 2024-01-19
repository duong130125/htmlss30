function stringArrangement(chuoi) {
    let check = [];
    for (let i = 0; i < chuoi.length; i++) {
      let char = chuoi[i];
      if (/[a-zA-Z]/.test(char)) {
        check.unshift(char);
      } else if (/[0-9]/.test(char)) {
        check.push(char);
      } else {
        check.push(char); 
      }
    }
    return check;
  }
  let arrayString = prompt("Nhập vào một chuỗi bất kỳ:");
  let result = stringArrangement(arrayString);
  console.log("Kết quả sau khi sắp xếp là:");
  console.log(result);
  