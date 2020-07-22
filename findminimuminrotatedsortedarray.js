//Objective is to find the minimum value in a rotated sorted array

let nums = [3,4,5,1,2] 


//O(logn) solution that uses a modified binary search

let low = 0
let high = nums.length - 1

while (low < high) {
    let mid = Math.floor((low + high) / 2)
    
    //This means the right side has the lower values
    if (nums[mid] > nums[high]) {
        low = mid + 1
    } else {
        high = mid
    }
}

return nums[low]