/**
 * @param {number[]} nums
 * @return {number}
 */
//  [0,0,1,1,1,2,2,3,3,4]
var removeDuplicates = function(nums) {
    let indexCounter = 0;

    for(let i = 0; i < nums.length; i ++){
        if(nums[i] != nums[i - 1]){
            nums[indexCounter] = nums[i];
            console.log('index is ' + indexCounter + ', this is array ' + nums);
            indexCounter++;
        }
    }
    return indexCounter;
};