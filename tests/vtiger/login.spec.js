import {test,expect} from '@playwright/test'
import { text } from 'stream/consumers';

test("login test",{tag:"@login"},async({page})=>{

   await page.goto("http://localhost:8888/");
   await page.locator("//input[@name='user_name']").fill('admin')
   await page.locator("//input[@name='user_password']").fill("admin");
   await page.locator('//input[@id="submitButton"]').click()

   //verify user logged in success
   const expectedTitle = " Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM"
   let actualTitle = await page.title()
  console.log(expectedTitle);
  await expect(expectedTitle).toEqual(actualTitle);

  await page.waitForTimeout(2000)
})

