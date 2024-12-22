function sumOfArray(arr: number[]): number {
    if (!Array.isArray(arr) || !arr.every(num => typeof num === 'number')) {
      alert('Invalid input for sum of arry')
      return 0
    }
    return arr.reduce((acc, num) => acc + num, 0)
  }
  
function reverseString(str: string): string {
    if (typeof str !== 'string') {
      alert('Invalid input for reverse string')
      return ''
    }
    return str.split('').reverse().join('')
  }
  
function isPalindrome(str: string): boolean {
    if (typeof str !== 'string') {
      alert('Invalid input for is palindrome')
      return false
    }
    return str === reverseString(str)
  }
  
function findMax(arr: number[]): number {
    if (!Array.isArray(arr) || !arr.every(num => typeof num === 'number')) {
      alert('Invalid input for find max')
      return 0
    }
    return Math.max(...arr)
  }





console.log(sumOfArray([2,4,5,7,8,12,3,10,11,100]))
//console.log(sumOfArray([2,4,5,7,8,12,3,10,11,"100"]))
console.log(reverseString("this string backwards test"))
//console.log(reverseString(100000000))
console.log(isPalindrome("racecar"))
console.log(isPalindrome("taco bell"))
//console.log(isPalindrome([1]))
console.log(findMax([1,348,445,7675,232234,23,5456,68668]))
//console.log(findMax([0,0,0,0,0,"0",0]))
  