#### 数组去重

```js
// 数组去重，要求时间复杂度O(nlogn) 空间复杂度O(1)
function uniqueArray(list) {
  // 1 1 2 2 3 4
  // 当然你可以自己写快排等nlogn的算法
  list.sort();
  // 剩下的代码和leetcode26题一摸一样

  const size = list.length;
  let slowP = 0;
  for (let fastP = 0; fastP < size; fastP++) {
    if (list[fastP] !== list[slowP]) {
      slowP++;
      list[slowP] = list[fastP];
    }
  }
  return list.slice(0, slowP + 1);
}

console.log(uniqueArray([1, 1, 2, 2, 3, 4]));
console.log(uniqueArray([1, 1, 6, 7, 9, 9, 8, 2, 2]));
console.log(uniqueArray(["a", "c", "b", "z", "A", "K", "d", "D", "a"]));
```
