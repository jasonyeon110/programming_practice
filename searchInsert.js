function searchInsert(nums, target){
    return binarySearch(nums, target, 0, nums.length-1);
}

function binarySearch(arr, target, start, end){
    if(start > end){
        return start;
    }

    const mid = Math.floor((start + end)/2);

    if(arr[mid] === target) return mid;
    //search leftside of the mid
    if(arr[mid] > target) return binarySearch(arr, target, start, mid-1);
    //search rightside of the mid
    if(arr[mid] < target) return binarySearch(arr, target, mid + 1, end);
}