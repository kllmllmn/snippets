// 创建对象
// 工厂模式
const objUtilsA = () => {
  let aimObj = {};
  //  数组去重
  aimObj.uniqueArr = (arr) => {
    if (Array.isArray(arr)) {
      return [...new Set(arr)];
    }
    throw new TypeError("uniqueArr 必须提供一个 数组 参数");
  };
  /**
   *@description: 交换对象的键值对
   *一个 Map 的键可以是任意值，包括函数、对象或任意基本类型。一个 Object 的键必须是一个 String 或是 Symbol。
   *@param: { Object } obj
   *@return: {  }
   */
  aimObj.swapKeyValue = (obj) => {
    // 校验
    if (typeof obj !== "object") {
      throw new TypeError("swapKeyValue 必须提供一个 Object 类型的入参");
    }
    if (obj.toString() !== "[object Object]") {
      throw new TypeError("swapKeyValue 必须提供一个 Object 类型的入参");
    }
    // 需保证对象的值为基本类型或Symbol类型
    Object.values(obj).forEach((item) => {
      let notAllowType = ["object", "function"];
      if (~notAllowType.indexOf(typeof item)) {
        throw new TypeError(
          "swapKeyValue 的入参需保证对象的值为基本类型或Symbol类型"
        );
      }
    });
    // 需保证对象的每个值唯一，否则会发生键覆盖的现象
    let arr = Object.values(obj);
    let len = arr.length;
    if (aimObj.uniqueArr(arr).length !== len) {
      throw new Error(
        "swapKeyValue 需保证对象的每个值唯一，否则会发生键覆盖的现象"
      );
    }

    // 功能实现
    let obj1 = {};
    Object.entries(obj).forEach((item) => {
      obj1[item[1]] = item[0];
    });
    return obj1;
  };
  //   console.log(this, 1);
  return aimObj;
};

const obj = objUtilsA();
console.log(obj);
let testObj = { 0: "Chinese", 1: "English" };
console.log(obj.swapKeyValue(testObj));
// console.log(obj.uniqueArr([1, 1, 1, 2, 3, Symbol(), Symbol(), testObj, testObj]), testObj === testObj);
