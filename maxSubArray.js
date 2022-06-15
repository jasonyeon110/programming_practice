function maxSubArray(nums){
    let pre = 0;
    let max = -Infinity;

    for(let i=0; i < nums.length; i++){
        pre = Math.max(pre+nums[i], nums[i]);
        max = Math.max(max, pre);
    }
    return max;
}