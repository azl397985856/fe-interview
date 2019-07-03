#### 无序不相等数组中，选取 N 个数，使其和为 M

```js
function sum(list) {
  return list.reduce((acc, cur) => acc + cur, 0);
}
function backtrack(list, res, tempList, T, start) {
  // 如果不限定每个数字只能使用一次, 下面增加一行代码 if (tempList.length > list.length) return;
  if (sum(tempList) === T) return res.push([...tempList]);

  for (let i = start; i < list.length; i++) {
    tempList.push(list[i]);
    // 如果不限定每个数字只能使用一次, 下面代码改为backtrack(list, res, tempList, T, i);
    backtrack(list, res, tempList, T, i + 1);
    tempList.pop();
  }
}
// 从一个无序，不相等的数组中，选取N个数，使其和为M实现算法
function nSum(list, T) {
  const res = [];
  backtrack(list, res, [], T, 0);
  return res;
}

// test
const r = nSum([1, 3, 6, 4, 2, 7], 7);
console.log(r);
```
