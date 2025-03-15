/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let nMap = new Map();
   for (let i = 0; i < nums.length; ++i){
    let pairIdx = target - nums[i];
    if(nMap.has(pairIdx)){
        return[nMap.get(pairIdx), i];
    }
    nMap.set(nums[i], i);

   }

};