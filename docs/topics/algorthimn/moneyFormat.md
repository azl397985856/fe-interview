# 实现千分位展示

## 代码
```js
function moneyFormat(num) {
  // 123456789
  // 123,456,789
  const res = [];
  const decimalIndex = num.indexOf(".");
  const hasDecimal = decimalIndex > -1;

  for (let i = num.length - 1; i > -1; i--) {
    let cur = 1;
    while (hasDecimal && i >= decimalIndex) {
      res.unshift(num[i]);
      i--;
    }
    while (cur <= 3) {
      res.unshift(num[i]);
      cur++;
      i--;
    }
    res.unshift(num[i]);
    res.unshift(",");
  }

  if (res[0] === ",") res.shift();

  return res.join("");
}

function moneyFormatReg(num) {
  return num.replace(/(\d)(?=(\d{3})+(?!\d))/, $1 => $1 + ",");
}

console.log(moneyFormat("123456789"));
console.log(moneyFormat("1234567890"));

console.log(moneyFormat("123456789.0002"));
console.log(moneyFormat("1234567890.999"));

console.log(moneyFormatReg("123456789"));
console.log(moneyFormatReg("1234567890"));

console.log(moneyFormatReg("123456789.0002"));
console.log(moneyFormatReg("1234567890.999"));
```
