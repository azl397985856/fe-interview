# 实现一个极简的数据响应式

## 题目描述

```js
// 有一个全局变量 a，有一个全局函数 b，实现一个方法bindData，执行后，a中任何属性值修改都会触发b的执行。
const a = {
  b: 1
};
function b() {
  console.log("a的值发生改变");
}
bindData();
// 此时输出 a的值发生改变
a.b = 2; 

console.log(a.b);

```

## 代码

```js
function bindData() {
  Object.keys(a).map(key => {
    let v = a[key];
    Object.defineProperty(a, key, {
      get() {
        console.log('你正在读取a里面的值');
        return v;
      },
      set(newA) {
        v = newA;
        b();
      }
    });
  });
}
```

## 思考

其实从这个题目，你应该也能知道，Vue2中为什么你在data或者props中没有声明一个key的时候，
即使data或者props发生了变化，vue也不会更新。
