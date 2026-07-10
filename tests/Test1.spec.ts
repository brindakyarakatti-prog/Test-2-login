import {test,expect} from "@playwright/test";

/*
test("title",()=>{


})*/

test("Verifying the page title", async ({page}) => {

    await page.goto("https://www.flipkart.com");
    const title = await page.title();
    expect(title).toBe("flipkart");

})
