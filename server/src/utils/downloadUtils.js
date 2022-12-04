const cheerio = require("cheerio");
const path = require("path");
const fs = require("fs");
const http = require("http");
const https = require("https");
const iconv = require("iconv-lite");
const download = require("download");

module.exports = {
  /**
   *@description: 下载
   *@param: url String，selectors String (通过选择器获取要下载文件的url伪数组)，HOST 图片url不全，需要拼接的字符串
   */
  downloadFile: (url, selectors, HOST) => {
    if (!url) throw new Error("downloadFile need an url");
    let protocol;
    if (url.split(":")[0] === "http") {
      protocol = http;
    } else {
      protocol = https;
    }

    // // 常见域名
    // let HOST = ""; //网站名
    // const domains = [".com", ".cn", ".net", ".org"];
    // let len = domains.length;
    // for (let i = 0; i < len; i++) {
    //   let tmp = domains[i];
    //   if (url.indexOf(tmp) > -1) {
    //     HOST = url.split(tmp)[0] + tmp + "/";
    //     i = len;
    //   }
    // }
    // // console.log(HOST);

    // 创建请求对象
    let chunks = [];
    let req = protocol.request(url, (res) => {
      res.on("data", (chunk) => {
        chunks.push(chunk);
      });
      res.on("end", () => {
        let htmlStr = Buffer.concat(chunks).toString("utf-8");
        // console.log(Buffer.concat(chunks).toString("utf-8"));
        let $ = cheerio.load(htmlStr);
        let urls = [...$(selectors)].map((item) => {
          let src = $(item).attr("src");
          if (src.indexOf("http") > -1) {
            return encodeURI(src); //base64 encoded
          } else {
            return HOST + encodeURI(src);
          }
        });
        // console.log(urls);
        // 批量下载
        (async () => {
          await Promise.all(
            urls.map(async (url, index) => {
              let filename = decodeURI(url.split("/").reverse()[0]);
              // 下载文件的存放位置
              const filePath = path.resolve(
                __dirname,
                "../../downloadFile/" + filename
              );
              // return download(url, "../dist");
              return fs.writeFileSync(filePath, await download(url));
            })
          );
        })();
      });
      //   TODO 是否要转码utf-8 gbk
    });
    // 发送请求
    req.end();
  },
};
