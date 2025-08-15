/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if(nums.length === 0){
        return 0;
    }
    nums.sort((a,b) => a - b);
    if(nums[0] !== 0) {
        return 0;
    }
    for(var i = 0; i < nums.length; i++){
        if(nums[i] !== i){
            return i;
        }
    }
    return nums.length;
    
};