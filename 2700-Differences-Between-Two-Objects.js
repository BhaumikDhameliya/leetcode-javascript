/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */

function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

function objDiff(obj1, obj2) {
  const res = {};

  function valDiff(val1, val2) {
    if (
      isObject(val1) &&
      isObject(val2) &&
      Array.isArray(val1) === Array.isArray(val2)
    ) {
      const res = {};
      for (const key in val1) {
        const v1 = val1[key];
        const v2 = val2[key];
        if (v1 !== undefined && v2 !== undefined) {
          const diff = valDiff(v1, v2);
          if (isObject(diff)) {
            res[key] = diff;
          }
        }
      }
      return Object.keys(res).length ? res : null;
    }
    if (val1 !== val2) {
      return [val1, val2];
    }
  }

  if (obj1 === obj2) return res;
  for (const key in obj1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    if (val1 !== undefined && val2 !== undefined) {
      const diff = valDiff(val1, val2);
      if (isObject(diff)) {
        res[key] = diff;
      }
    }
  }
  return res;
}
