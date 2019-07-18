# 正则表达式编程题汇总

## 传送们

- [实现千分位展示](/topics/algorthimn/moneyFormat.md)
- [千分位转数字](/topics/algorthimn/numFormat.md)

## 其他题目

1. 匹配URL中elective后的数字输出。

```
例1:

输入：
https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33
输出： []

例2:
输入：
https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33
输出：['800']

例3:
输入：
https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33
输出：['800','700']
```

代码：

```js
const a =
  "https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33";
const b =
  "https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33";
const c =
  "https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33";

[a, b, c].map(q => q.match(/(?<=elective=)(\d)+(,\d)*/));

```
