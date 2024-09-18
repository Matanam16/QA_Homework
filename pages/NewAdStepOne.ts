import { Locator, Page } from "@playwright/test";

export default class NewAdStepOne{

    assetStatus: Locator;
    houseNumberFiled: Locator;
    citySelection: Locator;
    streetSelector: Locator;

    constructor(protected page: Page){

        this.assetStatus = this.page.locator('#ff_8_asset_status');
        this.houseNumberFiled = this.page.locator('[name="street_number"]');
        this.citySelection  = this.page.locator('[data-name="city"]');
        this.streetSelector = this.page.locator('[data-name="street_1"]');

    }

    public async selectAssetStatus(status: string){
        await this.page.waitForTimeout(1500);
        await this.assetStatus.selectOption(status);
    }

    public async selectCity(city:string){
        await this.citySelection.selectOption(city);


    }

    public async selectStreet(street:string){
        await this.streetSelector.selectOption(street);

    }

    public async fillHouseNumber(number:string){
        await this.houseNumberFiled.click();
        await this.houseNumberFiled.fill(number);

    }
}




