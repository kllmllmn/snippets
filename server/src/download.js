const https = require("https");
const http = require("http");
const cheerio = require("cheerio"); // 服务器解析html,使用dom
const { writeFileSync } = require("fs");
const { resolve } = require("path");
const fs = require("fs");
const download = require("download");
const iconv = require("iconv-lite"); // 编码方式转换

// const filePath = resolve(__dirname, "../downloadFile/" + "heroList.html");

// // 创建请求对象
// let req = https.request(
//   "https://pvp.qq.com/web201605/herolist.shtml",
//   //   "http://web.itheima.com/teacher.html",
//   (res) => {
//     // console.log(res);
//     let chunks = [];
//     // 监听data事件，获取数据片段
//     res.on("data", (chunk) => chunks.push(chunk));
//     // 监听end事件，获取数据片段完毕时触发，将数据片段转换成字符串（html）
//     res.on("end", () => {
//       let htmlStr = Buffer.concat(chunks);
//       writeFileSync(filePath, htmlStr);

//       //   let $ = cheerio.load(htmlStr);
//       //   console.log($(".herolist .clearfix").text());
//     });
//   }
// );

// // 发送请求
// req.end();

const data = require("./data.js");
let $ = cheerio.load(data.heroList);
let urls = [];

urls = [
  ...$(".zkcontent .zk-con-box .herolist-content .herolist  li>a>img"),
].map((item) => "https:" + $(item).attr("src"));
// console.log(urls);
let filenames = [
  ...$(".zkcontent .zk-con-box .herolist-content .herolist  li>a"),
].map((item) => iconv.encode($(item).text(), "gbk"));
// console.log(filenames);
// 如果下载的url中包含中文，一定要用encodeURI进行base64编码（http协议如此）
// const filenames = [];
// encodeUrls = urls.map((item) => {
//   // 文件名数组
//   filenames.push(item.split("/").reverse()[0]);
//   return encodeURI(item);
// });

// decodeURI base64解码
(async () => {
  await Promise.all(
    urls.map((url, index) => {
      // let filename = decodeURI(url.split("/").reverse()[0]);
      // let filePath = resolve(__dirname, "../downloadFile/" + filenames[index]);
      return download(url, "dist");
    })
  );
})();
