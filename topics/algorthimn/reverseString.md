# 字符串反转

## 代码
```js
function reverseString(str) {
  if (str.length === 1) return str;

  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("abc"));
console.log(reverseString("abca"));
console.log(reverseString("8cchds7"));
```
