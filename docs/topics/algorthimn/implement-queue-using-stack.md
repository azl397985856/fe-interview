#### 用栈实现队列

```js
function queue(nums) {
  this.stack = nums || [];
  this.helperStack = [];
}

queue.prototype.push = function(ele) {
  // push
  // pop
  let cur = null;
  while ((cur = this.stack.pop())) {
    this.helperStack.push(cur);
  }
  this.helperStack.push(ele);

  while ((cur = this.helperStack.pop())) {
    this.stack.push(cur);
  }
};

queue.prototype.pop = function() {
  return this.stack.pop();
};

// test
const q = new queue();
q.push(1);
q.push(2);
q.push(3);
q.push(4);

console.log(q.stack);
console.log(q.helperStack);

q.push(5);

console.log(q.stack);
console.log(q.helperStack);

console.log(q.pop()); // 1
console.log(q.pop()); // 2
console.log(q.pop()); // 3
```
