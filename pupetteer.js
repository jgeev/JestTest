const puppeteer = require("puppeteer");
async () => {
  try {
    //create a browser and open new page set the height and width of the page
    const browser = await puppeteer.launch();
    const page = browser.newPage();
    await page.setviewport({ width: 1920, height: 1008 });
    //goto add user page
    await page.goto("localhost:3000/addUser.html");
    await page.click("#adduser");

    //goto show all data page
    await page.goto("http://localhost:3000/data.html");
    await page.click("#showUser");

    //wait for data to populate the status div
    await page.waitForSelector("#status:not(:empty");

    // read status data
    let status = await page.$("#status");
    console.log(await status.evaluate((node) => node.innerHTML));

    //goto all users and take screenshot
    await page.goto("http://localhost:3000/data.html");
    await page.click("#showData");
    await page.waitForSelector("#status:not(:empty");
    await page.screenshot({ path: "screen.png" });

    browser.close();
  } catch (e) {
    console.log(e);
  }
};
