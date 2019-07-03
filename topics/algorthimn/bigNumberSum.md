#### 大数相加

```js
function bigNumberSum(a, b) {
  // 123456789
  // 000009876

  // padding
  let cur = 0;
  while (cur < a.length || cur < b.length) {
    if (!a[cur]) {
      a = "0" + a;
    } else if (!b[cur]) {
      b = "0" + b;
    }
    cur++;
  }

  let curried = 0;
  const res = [];

  for (let i = a.length - 1; i > -1; i--) {
    const sum = curried + +a[i] + +b[i];
    if (sum > 9) {
      curried = 1;
    } else {
      curried = 0;
    }
    res[i] = sum % 10;
  }
  if (curried === 1) {
    res.unshift(1);
  }

  return res.join("");
}

// test

// a = bigNumberSum("" + Math.pow(2, 79), "" + Math.pow(2, 79));
b = bigNumberSum("123456789", "9876");

// console.log(a === "" + Math.pow(2, 80));
console.log(b);
```
