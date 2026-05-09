import {BrowserContext, Locator, Page, test} from '@playwright/test'


test("Register-Page", async ({browser,page}) => {

//    const ctx : BrowserContext =  await browser.newContext()
//    let page : Page= await ctx.newPage()
   await page.goto("https://demo.automationtesting.in/Register.html")
   await page.waitForLoadState();
   let headingLocators =  page.locator('//ul[@class="nav navbar-nav"]/li/a');
   
   //console.log(await headingLocators.count())

   const count:number = await headingLocators.count();

//    for(let i=0;i<count;i++)
//    {
//     //console.log(await headingLocators.nth(i).innerText())
//     //console.log(await headingLocators.nth(i).textContent())
//    }

//    const alltext1 : String[] = await headingLocators.allInnerTexts();
//    const alltext2 : String[] = await headingLocators.allTextContents();

//    console.log("allInnerTexts : " , alltext1);
//    console.log("allTextContents : ",alltext2);
   

// const allLocatorsHeadingarray:Locator[] = await headingLocators.all();

// console.log(allLocatorsHeadingarray);

// for(let heading of allLocatorsHeadingarray)
// {
//     console.log("heading " , heading, await heading.innerText(), await heading.textContent());
// }


    
})