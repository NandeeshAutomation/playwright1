import { expect, Locator, test } from '@playwright/test'
import { log } from 'node:console';

test('register user', async ({ page }) => {

    //naviagte to url 
    await page.goto('https://demo.automationtesting.in/')
    await expect(page).toHaveURL('https://demo.automationtesting.in/');

    //click on skip sign in button
    await page.getByRole('button', { name: 'Skip Sign In' }).click()
    await expect(page).toHaveTitle("Register");

    //identify the registration feilds and enter data
    await page.getByPlaceholder('First Name', { exact: true }).fill("kiran")
    await page.getByRole("textbox", { name: 'Last Name' }).fill("kumar")

    //text area
    await page.locator('//textarea').fill("gdshgkjhlfjd aksdhfgadf")

    //email
    await page.locator("//input[@type='email']").fill("aaaa@gmail.com")

    //phone number

    await page.locator('//input[@type="tel"]').fill('9897656787')

    //radio button
    await page.getByLabel(' Male ',{exact:true}).check()

    //checkbox
    const hobbies:string[] = ['Cricket','Movies']

    // await page.getByLabel('Cricket',{exact:true}).check()
    // await page.getByLabel('Movies',{exact:true}).check()
    // await page.getByLabel('Hockey',{exact:true}).check()

    // const hobbieslocators : Locator[] = await page.locator("//input[@type='checkbox']").all();
    // for(let hobbie of hobbieslocators)
    // {
    //     let h : string | null = await hobbie.getAttribute("value")
    //     if(hobbies.includes(`${h}`))
    //     {
    //         await hobbie.click()
    //     }
    // }

    await page.mouse.wheel(0, 100);

    const languages : string[] = ['Hindi','English']

    const skill : string ='C++';


    //skills 
   let skiloc : Locator = page.locator("//select[@id='Skills']");
    await skiloc.selectOption(`${skill}`)

    //country
    await page.locator("//span[@role='combobox']").click();
    await page.locator("//input[@role='textbox']").fill("India");
    
    await page.keyboard.press('Enter')

    await page.waitForTimeout(20000)

})