import { Locator, Page } from "@playwright/test";

export default class MyAdsPage{

    searchBox: Locator;
    searchBtn: Locator;
    adRow:Locator;
    deleteAdBtn: Locator;

    constructor(protected page: Page){

        this.searchBox = page.locator('[name="s"]');
        this.searchBtn = page.locator('[id="search-submit"]');
        this.adRow = page.locator('[class="title column-title has-row-actions column-primary page-title"]');
        this.deleteAdBtn = page.locator('[class="trash"]');
    }

    public async searchAnAd(text: string){
        await this.searchBox.click();
        await this.searchBox.fill(text);
        await this.searchBtn.click();
    }

    public async deleteAd(){
        await this.adRow.hover();
        await this.deleteAdBtn.last().click();
    }
}