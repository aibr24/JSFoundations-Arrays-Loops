/**
 * getOdds(numbers):
 * - receives an array of numbers called `numbers`
 * - filters the `numbers` array in order to...
 * - returns an array of only ODD numbers.
 *
 * e.g.
 * getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> [1, 3, 5, 7, 9]
 * getOdds([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> [11, 35, 601, 777, 999]
 */
function getOdds(numbers) {
  let result = numbers.filter((number) => number % 2 !== 0);
  return result;
}
// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// getOdds(numArr);
// console.log(getOdds([1, 2, 3, 4, 5, 6, 7]));
/**
 * getEvens(numbers):
 * - receives an array of numbers called `numbers`
 * - filters the `numbers` array in order to...
 * - returns an array of only EVEN numbers.
 *
 * e.g.
 * getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> [2, 4, 6, 8]
 * getEvens([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> [52, 14, 56, 888]
 */
function getEvens(numbers) {
  let result = numbers.filter((number) => number % 2 === 0);
  return result;
}

/**
 * getDuplicateCount(x, numbers):
 * - receives a number `x`, and an array of numbers called `numbers`
 * - returns the number of times `x` occurs in `numbers`.
 *
 * e.g.
 * getDuplicateCount(1, [1, 2, 3, 1, 4, 5, 6, 1, 7, 8, 9, 10, 11, 1, 12, 13]) -> 4
 * getDuplicateCount(52, [11, 35, 52, 14, 56, 601, 52, 777, 888, 999, 52]) -> 3
 */
function getDuplicateCount(x, numbers) {
  let counter = 0;
  for (let index = 0; index < numbers.length; index++) {
    if (x === numbers[index]) {
      counter = counter + 1;
    }
  }
  return counter;
}
// const newArr = [1, 2, 1, 4, 2, 2, 6, 22];
// // console.log(newArr[1]);
// console.log(getDuplicateCount(1, newArr));
// // getDuplicateCount(2, newArr);
/**
 * youGottaCalmDown(s):
 * - receives a string `s`
 * - returns the string `s` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .slice()
 * - Use string method .endsWith()
 */
function youGottaCalmDown(s) {
  let count = s.length;
  while (s.endsWith("!", count)) {
    count--;
  }
  return s.slice(0, count + 1);
}

module.exports = { getOdds, getEvens, getDuplicateCount, youGottaCalmDown };
