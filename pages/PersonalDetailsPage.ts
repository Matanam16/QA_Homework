import { Locator, Page } from "@playwright/test";

export default class PersonalDetailsPage{

    manageMyAdsBtn: Locator;

    constructor(protected page: Page){

        this.manageMyAdsBtn = page.locator('[class="elementor-icon elementor-animation-grow"][class="far fa-user-circle"]');

    }

    public async clickOnManageMyAdsButton(){
        await this.manageMyAdsBtn.last().click();
    }
}