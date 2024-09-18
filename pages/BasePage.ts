import test, { expect, Locator, Page } from "@playwright/test";
import { text } from "stream/consumers";

export default class BasePage{

    element: Locator;
    nextBtn: Locator;

    constructor(protected page: Page){

        this.nextBtn = page.locator('[]');

    }

    public async validatePageUrl(url: string) {
        await test.step(`Validating that a correct value of URL is ${url}`, async () => {
            await expect(this.page).toHaveURL(url)
        });
    }

    public async validateElementText(element: Locator, expectedText: string) {
        await test.step(`Validating that a correct element text is  ${expectedText}`, async () => {
            await expect(element).toContainText(expectedText)
        });

    }
        public async clickNext(){
            await this.nextBtn.click();
        }
}