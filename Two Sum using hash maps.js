const twoSum = function(nums, target) {
    let hash = {};
    let num = 0;

    while (num < nums.length) {
        if (hash[nums[num]])
            return [nums.indexOf(nums[num]),
                nums.lastIndexOf(target - nums[num])];
        else hash[target - nums[num]] = true;
        num++;
    }
      return [];
};
