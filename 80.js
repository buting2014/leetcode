/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <3){
        return nums.length
    }
    let count = 1, j = 0;
    // i起始值为1，因为会出现前两个元素一样，就赋值的情况
    for(let i = 1;i<nums.length;i++){
        if(nums[j] == nums[i]){
            if(count < 2){
                nums[++j] = nums[i];
                count++;
            }
        }else{
            nums[++j] = nums[i];
            count = 1;
        }
        console.log(nums);
    }
    return j+1;
};
removeDuplicates([1,1,2]);