const convertOddEvenValue = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("需要传入一个数组");
    return;
  }
  console.time();
  const map = new Map();
  const len = arr.length;
  //   数组转Map
  for (let i = 0; i < len; i += 2) {
    map.set(arr[i], arr[i + 1]);
  }
  //   Map交换键值对
  const map2 = new Map();
  for (const [key, val] of [...map.entries()]) {
    map2.set(val, key);
  }
  //   Map对象转数组，数组扁平化 tips: 对象转数组：Object.entries(obj)  Map对象转数组：[...map.entries()]
  let resArr = [...map2.entries()].flat(1);
  resArr = resArr.filter((item) => item !== undefined); // 数组去除undefined
  console.timeEnd();
  return resArr;
};
let arr = convertOddEvenValue(1);
console.log(arr);
