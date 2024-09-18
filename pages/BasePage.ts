import test, { expect, Locator, Page } from "@playwright/test";

export default class BasePage{


    nextBtn: Locator;

    constructor(protected page: Page){

        this.nextBtn = page.locator('[class="ff-float-right ff-btn ff-btn-next ff-btn-secondary"]');

    }

    public async GoToUrl(url:string){
        await this.page.goto(url);
    }

    public async validatePageUrl(url: string) {
            await expect(this.page).toHaveURL(url)
    }

    public async validateElementText(element: Locator, expectedText: string) {
            await expect(element).toContainText(expectedText);

    }
        public async clickNext(index: number ){
            await this.nextBtn.nth(index).click();
        }
}