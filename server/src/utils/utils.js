const iconv = require("iconv-lite");

// utf-8
let str = "/?中文=88";
// utf-8转GBK
let encoded = iconv.encode(str, "gbk");
console.log(encoded, encoded.toJSON());

// gbk转换成utf-8
str = iconv.decode(
  Buffer.from([47, 63, 214, 208, 206, 196, 61, 56, 56]),
  "gbk"
);
console.log("utf-8", str);
