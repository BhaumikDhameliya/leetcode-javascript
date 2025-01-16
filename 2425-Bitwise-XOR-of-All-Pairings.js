/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
  let res = 0;
  if (nums2.length % 2 == 1) {
    for (let i = 0; i < nums1.length; i++) {
      res ^= nums1[i];
    }
  }
  if (nums1.length % 2 == 1) {
    for (let i = 0; i < nums2.length; i++) {
      res ^= nums2[i];
    }
  }
  return res;
};
