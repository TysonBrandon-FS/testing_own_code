function sumOfArray(arr) {
    if (!Array.isArray(arr) || !arr.every(function (num) { return typeof num === 'number'; })) {
        alert('Invalid input for sum of arry');
        return 0;
    }
    return arr.reduce(function (acc, num) { return acc + num; }, 0);
}
function reverseString(str) {
    if (typeof str !== 'string') {
        alert('Invalid input for reverse string');
        return '';
    }
    return str.split('').reverse().join('');
}
function isPalindrome(str) {
    if (typeof str !== 'string') {
        alert('Invalid input for is palindrome');
        return false;
    }
    return str === reverseString(str);
}
function findMax(arr) {
    if (!Array.isArray(arr) || !arr.every(function (num) { return typeof num === 'number'; })) {
        alert('Invalid input for find max');
        return 0;
    }
    return Math.max.apply(Math, arr);
}
console.log(sumOfArray([2, 4, 5, 7, 8, 12, 3, 10, 11, 100]));
//console.log(sumOfArray([2,4,5,7,8,12,3,10,11,"100"]))
console.log(reverseString("this string backwards test"));
//console.log(reverseString(100000000))
console.log(isPalindrome("racecar"));
console.log(isPalindrome("taco bell"));
//console.log(isPalindrome([1]))
console.log(findMax([1, 348, 445, 7675, 232234, 23, 5456, 68668]));
console.log(findMax([0, 0, 0, 0, 0, "0", 0]));
