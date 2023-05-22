/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
  if (typeof object === "string") return `"${object}"`;
  if (object === null) return "null";
  if (typeof object !== "object") {
    return object;
  }
  if (Array.isArray(object)) {
    return (
      "[" +
      object.map((v) => {
        return jsonStringify(v);
      }) +
      "]"
    );
  }
  let result = "{";
  Object.keys(object || {}).forEach((key, i) => {
    if (i !== 0) result += ",";
    result += `"${key}":${jsonStringify(object[key])}`;
  });
  result += "}";
  return result;
};
