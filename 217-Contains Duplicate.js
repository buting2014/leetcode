/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums.length == 0){
        return false;
    }
    for(let i = 0;i<nums.length;i++){
        let index = nums[i];
        nums.splice(i,1);
        if(nums.includes(index)){
            return true;
        }
    }
    return false;
};