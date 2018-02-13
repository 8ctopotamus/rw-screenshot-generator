const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({width: 1200, height: 2000})
  await page.goto('https://realwealthmedia.com/jadeweekly',{"waitUntil" : "networkidle0"});
  await page.screenshot({path: 'screenshots/jadeweekly.jpg'});
  await browser.close();
  console.log('Your screenshot has been generated. 👍')
  console.log('You can find it in /screenshots.')
})();
