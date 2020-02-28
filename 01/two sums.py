class Solution(object):
    def twoSum(self, nums, target):
        rarray =[]
        current = 0
        next = 0
        for i in range (len(nums)):
            for j in range (1,len(nums)):
                if(i==j):
                    break
                else:
                    if(nums[i]+nums[j]==target):
                        rarray.append(i)
                        rarray.append(j)
                        return rarray
        