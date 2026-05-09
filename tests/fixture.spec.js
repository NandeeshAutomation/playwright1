import {test} from "@playwright/test"

test("fixtureDemo",async({browser,browserName})=>{

    //page will create one specific tab in the browser
    //await page.goto("https://www.amazon.in/")

   // console.log(browserName);

  let context =  await browser.newContext();
  let page = await context.newPage();
  console.log(page.viewportSize());
  await page.goto("https://www.google.com");
  await page.setViewportSize({width:1000,height:500})
  console.log(page.viewportSize());
  let time = new Date().getTime();
  await page.screenshot({path:`./screenshots/abc${time}}.png`});
  page.getByText()

})