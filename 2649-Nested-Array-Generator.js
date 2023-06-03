/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
  const flatArr = arr.flat(Infinity);
  let i = 0;
  while (i < flatArr.length) {
    yield flatArr[i];
    i++;
  }
};

// // using yield*
// var inorderTraversal = function*(arr) {
//     for(const n of arr){
//         if(Array.isArray(n)){
//             yield* inorderTraversal(n)
//         } else {
//             yield n;
//         }
//     }
// };

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
