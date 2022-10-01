const removeFromArray = function(nums, ...args) {
   const answer = [];
    for(let i = 0; i < nums.length; i++) {
        if(!args.includes(nums[i])) {
            answer.push(nums[i]);
        }
    }
    return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
