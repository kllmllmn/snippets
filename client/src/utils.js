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
  document.body.appendChild(a);
  a.target = "_blank";
  a.click();

  document.body.removeChild(a);
  // 每次调用URL.createObjectURL,都会创建一个新的URL对象，浏览器内存中会保持对该对象的引用
  // 只有在document销毁时，才会释放此部分内存
  // 在考虑性能的情况下，在url使用结束后，最好释放此部分内存
  window.URL.revokeObjectURL(url);
};
