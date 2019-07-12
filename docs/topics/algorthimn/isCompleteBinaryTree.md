# 判断是否是完全二叉树

## 代码
```js
// 如何判断是不是完全二叉树
// leetcode 原题： https://leetcode.com/problems/check-completeness-of-a-binary-tree/
function isCompleteBinaryTree(root) {
  if (root === null) return root;
  let cur = root;
  const queue = [];

  while (cur !== null) {
    queue.push(cur.left);
    queue.push(cur.right);
    cur = queue.shift();
  }

  return queue.filter(Boolean).length === 0;
}
```
