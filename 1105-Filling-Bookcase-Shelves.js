/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
  const dp = Array.from({ length: books.length + 1 }, () => 0);

  for (i = books.length - 1; i >= 0; i--) {
    let cur_width = shelfWidth;
    let max_height = 0;
    dp[i] = Infinity;

    for (let j = i; j < books.length; j++) {
      const [width, height] = books[j];
      if (cur_width < width) {
        break;
      }
      cur_width -= width;
      max_height = Math.max(max_height, height);

      dp[i] = Math.min(dp[i], dp[j + 1] + max_height);
    }
  }
  return dp[0];
};

console.log(
  minHeightShelves(
    [
      [1, 1],
      [2, 3],
      [2, 3],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 2],
    ],
    4
  )
); // 6

console.log(
  minHeightShelves(
    [
      [1, 3],
      [2, 4],
      [3, 2],
    ],
    6
  )
); //4
