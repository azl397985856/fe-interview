#### 循环有序列表的查找

```js
function find(nums, target) {
  // leetcode 原题 #33
  // 时间复杂度：O(logn)
  // 空间复杂度：O(1)
  // [6,7,8,1,2,3,4,5]
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = start + ((end - start) >> 1);
    if (nums[mid] === target) return mid;

    // [start, mid]有序

    // ️⚠️注意这里的等号
    if (nums[mid] >= nums[start]) {
      //target 在 [start, mid] 之间

      // 其实target不可能等于nums[mid]， 但是为了对称，我还是加上了等号
      if (target >= nums[start] && target <= nums[mid]) {
        end = mid - 1;
      } else {
        //target 不在 [start, mid] 之间
        start = mid + 1;
      }
    } else {
      // [mid, end]有序

      // target 在 [mid, end] 之间
      if (target >= nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        // target 不在 [mid, end] 之间
        end = mid - 1;
      }
    }
  }

  return -1;
}
// test

const a = find([7, 7, 8, 9, 1, 2, 5, 6, 7, 7], 5);
const b = find([7, 7, 8, 9, 1, 2, 5, 6, 7, 7], 4);
const c = find([7, 7, 8, 9, 1, 2, 5, 6, 7, 7], 8);

console.log(a, b, c);
```
