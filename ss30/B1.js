function symmetry(mang) {
    let long = mang.length;  
    for (var i = 0; i < long / 2; i++) {
        if (mang[i] !== mang[long - 1 - i]) {
            return false;
        }
    }
    return true;
}
let anyArray = [1, 5, 6, 5, 1];
let result = symmetry(anyArray);
console.log(result);
