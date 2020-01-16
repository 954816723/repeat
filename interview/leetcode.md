1. 两数之和  
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标  
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素  
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums,target){
    for(let index = 0;index < nums.length;index++){
        for(let i = index+1;i < nums.length;i++){
            if(nums[index] + nums[i] == target){
                return [index,i]
            }
        }
    }
    return []
}
let twoSum = function(nums,target){
    let map = [],
        res;
    for(let i = 0; i < nums.length; i++){
        if(map.hasOwnProperty(nums[i])){
            res = []
            res[0] = map[nums[i]]
            res[1] = i
            return res
        }
        map[target - nums[i]] = i
    }
    res = []
    return res
}
```

2. 两数相加  
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字  
如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和  
您可以假设除了数字 0 之外，这两个数都不会以 0 开头  
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(null)
    let resnext = result
    let val = 0
    let params = 0
    while( l1 != null || l2 != null){
        let x = (l1 != null) ? l1.val : 0 
        let y = (l2 != null) ? l2.val : 0
        val = (x + y + params) % 10
        params = Math.floor( (x + y + params) / 10 )
        resnext.next = new ListNode(val)
        resnext = resnext.next
        if(l1 != null) l1 = l1.next
        if(l2 != null) l2 = l2.next
    }
    if(params){
        resnext.next = new ListNode(params)
    }
    return result.next
};
```