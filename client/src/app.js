import { UPLOAD_INFO, CHUNK_SIZE, UPLOAD_URL } from "./config";
import { createFormData } from "./utils";
import axios from "axios";
import { nanoid } from "nanoid";

((doc) => {
  const oSelect = doc.querySelector("#upload-select");
  const oInfo = doc.querySelector("#upload-info");
  const oProgress = doc.querySelector("#upload-progress");
  const oBtn = doc.querySelector("#upload-btn");

  const init = () => {
    bindEvents();
  };
  const bindEvents = () => {
    oBtn.addEventListener("click", uploadFile);
  };
  const uploadFile = async () => {
    // console.log("", oSelect.files);
    const {
      files: [file],
    } = oSelect;
    if (!file) {
      oInfo.innerText = UPLOAD_INFO["NO_FILE"];
      return;
    }
    const { lastModifiedDate, name, size, type } = file;
    let uploadSize = 0;
    oInfo.innerText = "";
    const chunks = Math.ceil(size / CHUNK_SIZE); // 总分片数
    // 进度条 progress max
    oProgress.max = chunks;

    let chunk = 0; // 第几片
    // let fileChunk = file.slice(uploadSize, uploadSize + CHUNK_SIZE); // 文件分片
    let fileChunk;
    const loadNext = () => {
      let blobSlice =
        File.prototype.slice ||
        File.prototype.mozSlice ||
        File.prototype.webkitSlice;
      let start = chunk * CHUNK_SIZE;
      let end =
        start + CHUNK_SIZE >= file.size ? file.size : start + CHUNK_SIZE;
      fileChunk = blobSlice.call(file, start, end);
    };

    const filename = nanoid() + "~_~" + name; // 整体文件唯一名
    while (chunk < chunks) {
      loadNext();
      // await 需要用try catch包裹起来
      try {
        const formData = createFormData({
          lastModifiedDate,
          name,
          size,
          type,
          fileChunk,
          chunk,
          chunks,
          uploadSize,
          filename,
        });
        const uploadResult = await axios.post(UPLOAD_URL, formData);
        // console.log("uploadResult", uploadResult);
        chunk += 1;
        uploadSize += CHUNK_SIZE;
        // progress value
        oProgress.value = chunk;
      } catch (e) {
        console.log("error", e);
        oInfo.innerText = UPLOAD_INFO["UPLOAD_FAILED"];
        return;
      }
    }
    // console.log("chunk", chunk, chunks, uploadSize, size);
    oInfo.innerText = UPLOAD_INFO["UPLOAD_SUCCESS"];
  };
  init();
})(document);
