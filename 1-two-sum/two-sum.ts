function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map <number, number>();

    for (let i = 0; i < nums.length; i++){
        const comp = target - nums[i];
        if(numMap.has(comp)){
            return[numMap.get(comp)!, i]
        }
        numMap.set(nums[i], i)
    }
    return [];
};