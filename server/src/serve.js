const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const uploader = require("express-fileupload");
const { extname, resolve } = require("path"); // 获取后缀名
const { existsSync, appendFileSync, writeFileSync } = require("fs");

const app = express();
const PORT = 9991;
const HOST = "http://localhost:";

app.use(cors());
app.use(uploader());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static("./upload_tmp")); // 访问 '/' 路由，就是访问/upload_tmp文件夹下的资源

app.get("/", (req, res) => {
  res.send({
    code: 200,
    msg: "test",
  });
});

app.post("/upload_file", (req, res) => {
  // console.log("req.body", req.body);
  const {
    lastModifiedDate,
    name,
    size,
    type,
    chunk,
    chunks,
    uploadSize,
    filename,
  } = req.body;
  const { fileChunk } = req.files;

  if (!fileChunk) {
    res.send({
      code: 1001,
      msg: "No file upload",
    });
    return;
  }

  const filePath = resolve(__dirname, "../upload_tmp/" + filename);
  // 判断何时需要写入文件/继续写入文件
  if (chunk !== "0") {
    // 不是第一片，但第一片文件不存在
    if (!existsSync(filePath)) {
      res.send({
        code: 1002,
        msg: "No file exists",
      });
      return;
    }
    appendFileSync(filePath, fileChunk.data);
    if (Number(chunk) + 1 === Number(chunks)) {
      res.send({
        success: true,
        code: 200,
        msg: "合并完成",
        url: `${HOST}${PORT}/${filename}`,
      });
      return;
    }
    res.send({
      code: 200,
      msg: "Append",
    });
    return;
  }
  // 首次写入
  writeFileSync(filePath, fileChunk.data);
  // console.log(req.files);
  res.send({
    code: 200,
    msg: "首次写入",
  });
});

app.listen(PORT, () => {
  console.log("listening on PORT: " + PORT);
});
