import {test} from '@playwright/test'

test.describe.configure({mode:'parallel'})

test('testme1',async ({page}) => {
    console.log("test1....");
})

test('testme2',async ({page}) => {
    console.log("test2....");
})

test('testme3',async ({page}) => {
    console.log("test3....");
})

