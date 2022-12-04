const https = require("https");
const http = require("http");
const cheerio = require("cheerio"); // 服务器解析html,使用dom
const { writeFileSync } = require("fs");
const { resolve } = require("path");
const fs = require("fs");
const download = require("download");

// const filePath = resolve(__dirname, "../downloadFile/" + "teacher.html");

// // 创建请求对象
// let req = https.request(
//     "https://pvp.qq.com/web201605/herolist.shtml",
// //   "http://web.itheima.com/teacher.html",
//   (res) => {
//     // console.log(res);
//     let chunks = [];
//     // 监听data事件，获取数据片段
//     res.on("data", (chunk) => chunks.push(chunk));
//     // 监听end事件，获取数据片段完毕时触发，将数据片段转换成字符串（html）
//     res.on("end", () => {
//       let htmlStr = Buffer.concat(chunks).toString("utf-8");
//     //   writeFileSync(filePath, htmlStr);

//       //   let $ = cheerio.load(htmlStr);
//       //   console.log($(".herolist .clearfix").text());
//     });
//   }
// );

// // 发送请求
// req.end();

const data = require("./data.js");
// console.log(data);
let $ = cheerio.load(data.teacherData);
// console.log($(".tea_main .tea_con .tea_txt >ul li>img").attr("src"));
// console.log($(".tea_main .tea_con .tea_txt >ul li>img").length);
let urls = [];
// $(".tea_main .tea_con .tea_txt >ul li>img").each((index, item) => {
//   //   console.log("http://web.itheima.com/" + $(item).attr("src"));
//   let url = "http://web.itheima.com/" + $(item).attr("src");
//   urls.push(url);
// });
// urls = Array.prototype.map.call(
//   $(".tea_main .tea_con .tea_txt >ul li>img"),
//   (item) => "http://web.itheima.com/" + $(item).attr("src")
// );
urls = [...$(".tea_main .tea_con .tea_txt >ul li>img")].map(
  (item) => "http://web.itheima.com/" + $(item).attr("src")
);
// console.log(urls);

// 如果下载的url中包含中文，一定要用encodeURI进行base64编码（http协议如此）
const filenames = [];
encodeUrls = urls.map((item) => {
  // 文件名数组
  filenames.push(item.split("/").reverse()[0]);
  return encodeURI(item);
});
// console.log(encodeUrls);
// encodeUrls.forEach(async (item, index) => {
//   const filePath = resolve(__dirname, "../downloadFile/" + filenames[index]);
//   writeFileSync(filePath, await download(item));
// });
// decodeURI base64解码
(async () => {
  await Promise.all(
    encodeUrls.map(async (url) => {
      let filename = decodeURI(url.split("/").reverse()[0]);
      let filePath = resolve(__dirname, "../downloadFile/" + filename);
      return writeFileSync(filePath, await download(url));
    })
  );
})();
