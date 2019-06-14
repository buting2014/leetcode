/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // if (nums == null || nums.length == 0 || nums.length == 1) {
	// 		return;
	// 	}
	// 	if (k > nums.length) {
	// 		k = k % nums.length;
	// 	}
	// 	for (let i = 0; i < k; i++) {
	// 		let temp = nums[nums.length - k + i];
	// 		for (let j = nums.length - k + i; j > i; j--) {
	// 			nums[j] = nums[j - 1];
	// 		}
	// 		nums[i] = temp;
    //     }
    let l = nums.length;
    if(nums == null || nums.length == 0 || nums.length == 1) {
			return;
    }
    if(k-nums.length>0){
        k = k % nums.length;
    }
    while(k > 0){
        let last = nums[l-1];
        nums.splice(l-1, 1);
        nums.splice(0,0,last);
        k--;
    }
    return nums;
};
console.log(rotate([1,2,3,4,5,6,7],3))