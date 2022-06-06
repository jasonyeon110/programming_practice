function ListNode(val, next){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode} 
 */

// var mergeTwoLists = function(list1, list2){
//     if(!list1) return list2;
//     if(!list2) return list1;

//     let min;
//     let max;

//     if(list2.val > list1.val){
//         min = list1;
//         max = list2;
//     } else {
//         min = list2;
//         max = list1;
//     }
//     min.next = mergeTwoLists(min.next, max);

//     return min;
// }

//Time: O(n), Space: O(1)
var mergeTwoLists = function(list1, list2){
    const dummy = new ListNode(-Infinity);
    let pre = dummy;

    while(list1 && list2){
        if(list1.val <= list2.val){
            pre.next = list1;
            pre = list1;
            list1 = list1.next;
        } else {
            pre.next = list2;
            pre = list2;
            list2 = list2.next;
        }
    }

    if(!list1) pre.next = list2;
    if(!list2) pre.next = list1;
    
    return dummy.next;
}


