function findSubarray(arr, target) {
    let start = 0;
    let minLength = Infinity;
    let currentSum = 0;
    let result = [];
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target) {
            if (end - start + 1 < minLength) {
                minLength = end - start + 1;
                result = arr.slice(start, end + 1);
            }
            currentSum -= arr[start];
            start++;
        }
    }
    return result;
}       
let numbers = [1, 4, 45, 6, 10, 19];
let targetNumber = 51;
let result = findSubarray(numbers, targetNumber);
console.log("Mảng con nhỏ nhất có tổng lớn hơn", targetNumber + ":", result);
