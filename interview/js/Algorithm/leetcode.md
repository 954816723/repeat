1. 两数之和
```js
//1. for循环暴力破解
//2. 
let twoSum = function(nums, target) {
    let map = [],
        i,
        res;
    for(let i = 0; i < nums.length; i++){
        if(map.hasOwnProperty(nums[i])){
            res = [];
            res[0] = map[nums[i]];
            res[1] = i;
            return res;
        }
        map[target - nums[i]] = i;
    }
    res = [];
    return res;
};
```