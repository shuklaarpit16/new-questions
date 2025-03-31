var merge = function (nums1, m, nums2, n) {
  // Step 1: Combine both arrays
  nums1.splice(m, n, ...nums2); // Replace zeros with nums2 elements

  // Step 2: Sort the combined array in increasing order
  nums1.sort((a, b) => a - b);
};
