var chunk = function (arr, size) {
  const res = [];
  let start = 0;
  for (let i = size; start < arr.length; i += size) {
    res.push(arr.slice(start, i));
    start += size;
  }
  return res;
};
