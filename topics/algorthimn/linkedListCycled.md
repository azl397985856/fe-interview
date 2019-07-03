#### 判断链表是否成环

```js
// 判断一个链表是否有环

// leetcode 原题： 141.linked-list-cycle
var hasCycle = function(head) {
  if (head === null) return false;
  if (head.next === null) return false;

  let fast = head.next;
  let slow = head;

  while (fast && fast.next) {
    if (fast === slow) return true;
    slow = slow.next;
    const next = fast.next;
    fast = next && next.next;
  }

  return false;
};
```
