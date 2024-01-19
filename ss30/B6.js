function findTriangle(arr) {
    let count = 0;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 2; i++) {
        let k = i + 2;
        for (let j = i + 1; j < arr.length - 1; j++) {
            while (k < arr.length && arr[i] + arr[j] > arr[k]) {
                k++;
            }
            count += k - j - 1;
        }
    }

    return count;
}
let numberArr = [4, 9, 6, 2, 10];
let result = findTriangle(numberArr);
console.log(`Mảng [${numberArr}] có thể tạo thành được ${result} tam giác.`);
