function findSums(arr, target) {
    let n = arr.length;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            let currentSum = arr[i] + arr[left] + arr[right];

            if (currentSum === target) {
                return [arr[i], arr[left], arr[right]];
            } else if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return [];
}
let numbers = [1, 4, 45, 6, 10, 8];
let targetNumber = 22;
let result = findSums(numbers, targetNumber);
console.log("Ba phần tử có tổng bằng", targetNumber + ":", result);
