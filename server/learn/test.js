// lodash的使用
const _ = require("lodash");
// 求交集
let arr = _.intersection([1, 2, 3], [2, 3, 4], [1, 2, 3, 4]);
console.log(arr);
// 求差集
let arr2 = _.difference([1, 2, 3], [2], [1]);
console.log(arr2, "arr2");

/**
 *@每日一题
 *@description: length个人排成一圈，每次喊到number的人退圈(number>1)，求最后剩下的那个人的原序号
 *@param: { number } length
 *@param: { number } number
 *@return: { number }
 */
const testNumber = (val) => {
  // 判断是否为数字
  if (typeof val === "number" && !isNaN(val)) {
    // 判断是否为整数
    if (String(val).includes(".")) {
      // throw new Error("需要传入整数Number")
      return false;
    } else {
      return true;
    }
  } else {
    // throw new Error("需要传入Number型")
    return false;
  }
};

const designativeNumberQuitCircular = (length, number) => {
  console.time();
  if (!testNumber(length) || !testNumber(number)) return;
  let arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(i);
  }
  while (arr.length >= number) {
    arr.splice(number - 1, 1);
  }
  let maxPart = Math.ceil(number / 2); // 最多需要将数组分成的段数
  // 需要分成2-maxPart段
  for (let p = 2; p <= maxPart; p++) {
    while (arr.length * p >= number) {
      let len = arr.length;
      let tmpArr = [];
      for (let i = 0; i < p; i++) {
        tmpArr.push(arr);
      }
      let index = number - len * (p - 1) - 1;
      tmpArr[p - 1].splice(index, 1);
      arr = tmpArr[p - 1];
      // console.log(arr, "arr");
    }
  }
  console.timeEnd();
  // 原序号
  return arr[0];
};
let res = designativeNumberQuitCircular(7, 8);
console.log(res, "res");
