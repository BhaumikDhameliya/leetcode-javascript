/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  const k = nums.length;
  const allElements = [];

  // Flatten the list of lists with value, list index, and element index
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      allElements.push([nums[i][j], i]);
    }
  }

  // Sort the flattened array by element values
  allElements.sort((a, b) => a[0] - b[0]);

  let left = 0;
  let minRange = Infinity;
  let result = [-1, -1];

  const count = new Array(k).fill(0); // Tracks count of elements from each list
  let uniqueListsInWindow = 0; // Counts how many lists are currently represented in the window

  // Sliding window approach
  for (let right = 0; right < allElements.length; right++) {
    const [value, listIdx] = allElements[right];
    count[listIdx]++;

    // If this is the first element from this list in the window, increment uniqueListsInWindow
    if (count[listIdx] === 1) uniqueListsInWindow++;

    // Shrink the window until it no longer contains elements from all lists
    while (uniqueListsInWindow === k) {
      const currentRange = allElements[right][0] - allElements[left][0];

      // Update the result if a smaller range is found
      if (currentRange < minRange) {
        minRange = currentRange;
        result = [allElements[left][0], allElements[right][0]];
      }

      // Try to shrink the window by moving left pointer
      const [leftValue, leftListIdx] = allElements[left];
      count[leftListIdx]--;
      if (count[leftListIdx] === 0) uniqueListsInWindow--;
      left++;
    }
  }

  return result;
};
