class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: None Do not return anything, modify nums1 in-place instead.
        """
        mId = m - 1
        nId = n - 1 
        right = m + n - 1

        while nId >= 0:
            if mId >= 0 and nums1[mId] > nums2[nId]:
                nums1[right] = nums1[mId]
                mId -= 1
            else:
                nums1[right] = nums2[nId]
                nId -= 1

            right -= 1
        