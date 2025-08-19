/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count = 0;
    let subarray = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i]===0){
            count++;
            subarray += count;
        }
        else{
            count = 0;
        }
    }
    return subarray;
    
};