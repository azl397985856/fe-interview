# 将数字转化为中文(数字是 10 万以内)

## 题目表述

比如数字`12345`，我们转化为`一万二千三百四十五`。
比如数字`10002`，我们转化为`一万零二`。

## 代码

```js
function numToChinese(num) {
  const numStr = String(num);
  const numMapper = [
    "零",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九"
  ];

  const unitMapper = [, , "十", "百", "千", "万"];

  let res = "";

  for (let i = 0; i < numStr.length; i++) {
    const chNum =
      numStr[i] === "0" && res[res.length - 1] === "零"
        ? ""
        : numMapper[numStr[i]];
    const unit = numStr[i] === "0" ? "" : unitMapper[numStr.length - i] || "";
    res = res + chNum + unit;
  }

  return res[res.length - 1] === "零" ? res.slice(0, -1) : res;
}
```
