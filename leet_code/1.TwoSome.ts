function twoSum(nums: number[], target: number): number[] {
    // thank you for your review
    let result:number[] = [];

    for(let i=0; i< nums.length; i++){
        for(let j= i+1; j<nums.length; j++){
            if(nums[i]+nums[j] === target){
                result.push(i,j);
                return result;
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
