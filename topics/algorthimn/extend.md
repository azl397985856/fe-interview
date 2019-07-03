#### 实现继承

```js
function extend(A, B) {
  function f() {}
  f.prototype = B.prototype;
  A.prototype = new f();
  // A.prototype.constructor = A.prototype.constructor;
}

function A(name) {
  this.name = name;
}
function B(name) {
  this.name = name;
}
extend(A, B);
B.prototype.say = function() {
  console.log("b say");
};
// A.prototype.say = function() {
//     console.log('a say');
// }
A.prototype.eat = function() {
  console.log("a eat");
};

const a = new A("a name");

console.log(a.name);
a.say();
a.eat();
```
