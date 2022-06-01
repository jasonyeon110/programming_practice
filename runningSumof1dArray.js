function runningSum(nums) {
    if(nums.length === 0){
        return;
    }
    
    let resultArray = [];
    resultArray[0] = nums[0];
    
    for(let i = 1; i < nums.length; i ++){
        resultArray[i] = resultArray[i-1] + nums[i];
    }
    return resultArray;
};

let arr = [1,2,3,4];

runningSum(arr);