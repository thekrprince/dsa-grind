// LC 88 - Merge Sorted Array

function merge(nums1, m, nums2, n) {
    let last = m + n - 1;

    while (m - 1 >= 0 && n - 1 >= 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[last] = nums1[m - 1];
            m--;
        } else {
            nums1[last] = nums2[n - 1];
            n--;
        }
        last--;
    }

    while (n > 0) {
        nums1[last] = nums2[n];
        last--;
        n--;
    }

    console.log(nums1);
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1, 4, 6, 7, 0, 0, 0, 0, 0, 0], 4, [2, 3, 6, 8, 10, 11], 6);
merge([1], 1, [], 0);