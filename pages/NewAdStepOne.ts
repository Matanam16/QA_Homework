import { Locator, Page } from "@playwright/test";

export default class NewAdStepOne{

    assetStatus: Locator;
    houseNumberFiled: Locator;
    nextBtn: Locator;

    constructor(protected page: Page){

        this.assetStatus = this.page.locator('#ff_8_asset_status');
        this.houseNumberFiled = this.page.locator('[name="street_number"]');
        this.nextBtn = this.page.locator('div').filter({ hasText: /^הבא$/ }).getByRole('button');

    }

    public async selectAssetStatus(status: string){
        await this.page.waitForTimeout(1500);
        await this.assetStatus.selectOption(status);
    }

    public async selectCity(city:string){
        await this.page.getByText('- בחר ישוב -Remove item').click();
        await this.page.getByLabel('- בחר ישוב -').click();
        await this.page.getByLabel('- בחר ישוב -').fill(city);
        await this.page.getByRole('option', { name: 'כרמיאל Press to select' }).click();


    }

    public async selectStreet(street:string){
        await this.page.locator('div').filter({ hasText: /^- בחר רחוב -Remove item$/ }).first().click();
        await this.page.getByLabel('- בחר רחוב -').click();
        await this.page.getByLabel('- בחר רחוב -').fill('אטד');
        await this.page.getByLabel('- בחר רחוב -').press('Enter');

    }

    public async fillHouseNumber(number:string){
        await this.houseNumberFiled.click();
        await this.houseNumberFiled.fill(number);

    }

    public async clickNext(){
        await this.nextBtn.click();
    }
}




