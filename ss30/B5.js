function capitalizeCharacters(inputString) {
    let words = inputString.split(' ');
    for (let i = 0; i < words.length; i++) {
        let temp = words[i];
        if (temp.length > 1) {
            words[i] = temp.slice(0, -1) + temp.slice(-1).toUpperCase();
        } else {
            words[i] = temp.toUpperCase();
        }
    }

    return words.join(' ');
}
let userInput = prompt("Nhập vào một chuỗi bất kỳ:");
let result = capitalizeCharacters(userInput);
console.log("Kết quả sau khi viết hoa ký tự cuối cùng của mỗi từ:", result);
