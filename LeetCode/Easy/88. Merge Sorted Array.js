function merge(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a,b) => a-b);
  return nums1;
}


//console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
