/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    results =[];
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i]+nums[j]==target && i!=j){
                results.push(i, j);
                return results;
            }
        }
    }
};