const { downloadFile } = require("./utils/downloadUtils");
// downloadFile({
//   url: "https://pvp.qq.com/web201605/herolist.shtml",
//   selectors: ".zkcontent .zk-con-box .herolist-content .herolist  li>a>img",
//   HOST: "https:",
// });
downloadFile({
  url: "http://web.itheima.com/teacher.html",
  selectors: ".tea_main .tea_con .tea_txt >ul li>img",
  HOST: "http://web.itheima.com/",
});
