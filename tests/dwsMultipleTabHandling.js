import { test } from '@playwright/test'

test("redbus contact us", { tag: '@redtest' }, async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/")
    let launchPage = 'Twitter'
    const followusLocators = await page.locator("//div[@class='column follow-us']//li//a").all()
    let tpage;
    for (let locator of followusLocators) {
        if ((await locator.innerText()).match(launchPage)) {
            console.log(await locator.innerText())
            let [page2] = await Promise.all(
                [page.waitForEvent('popup'),
                locator.click()])
            console.log(page2.url())
            tpage = page2
            break;
        }
    }

    console.log(tpage.url())

})