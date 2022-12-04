const iconv = require("iconv-lite");

// utf-8
let str = "��Ѷ��Ϸ������";
// utf-8转GBK
let encoded = iconv.encode(str, "gbk");
console.log(encoded, encoded.toJSON());

// gbk转换成utf-8
str = iconv.decode(
  Buffer.from([63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63]),
  "gbk"
);
console.log("utf-8", str);
