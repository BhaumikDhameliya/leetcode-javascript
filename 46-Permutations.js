/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let perms = [[]];
    nums.forEach(n => {
        const new_perms = [];
        perms.forEach(p => {
            for (let i = 0; i <= p.length; i++) {
                const p_copy = p.slice();
                p_copy.splice(i, 0, n);
                new_perms.push(p_copy)
            }
        })
        perms = new_perms;
    })
    return perms;
};