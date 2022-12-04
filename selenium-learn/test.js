const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    // 自动打开百度
    await driver.get("https://www.baidu.com");
    // 找到元素，向里面发送一个关键字，并按下回车
    await driver.findElement(By.id("kw")).sendKeys("webdriver", Key.RETURN);
    // 验证是否搜索成功
    // await driver.wait(until.titleIs('webdriver - 百度搜索'), 1000);
  } finally {
    // 退出
    // await driver.quit();
  }
})();
