export const createFormData = (obj) => {
  const fd = new FormData();
  for (const [key, value] of Object.entries(obj)) {
    fd.append(key, value);
  }
  return fd;
};

// 下载blob文件流
export const downloadBlob = (blob) => {
  // console.log("blob", blob);
  // 创建blob连接
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.style.display = "none";
  a.download = "";
  document.body.appendChild(a);
  // a.target = "_blank";
  a.click();

  document.body.removeChild(a);
  // 每次调用URL.createObjectURL,都会创建一个新的URL对象，浏览器内存中会保持对该对象的引用
  // 只有在document销毁时，才会释放此部分内存
  // 在考虑性能的情况下，在url使用结束后，最好释放此部分内存
  window.URL.revokeObjectURL(url);
};

// 数组扁平化
export const flatten = (arr) => {
  return arr.flat(Infinity); // depth 数组维数-1，默认是1
};

// 交换一维数组的奇偶位置的值
export const convertOddEvenValue = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("需要传入一个数组");
  }
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
  return resArr;
};

// 创建a标签并下载
export const downloadWithUrl = (url, filename) => {
  if (!url) return;
  const a = document.createElement("a");
  a.style.display = "none";
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
