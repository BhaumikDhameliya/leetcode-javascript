/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let res = 0
    let empty = 0
    while (numBottles > 0) {
        res += numBottles
        empty += numBottles
        numBottles = Math.floor(empty / numExchange)
        empty = empty % numExchange
    }
    return res
};