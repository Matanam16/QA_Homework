import { Locator, Page } from "@playwright/test";

export default class PropertyDetailsPage{

    propertyDetails: Locator;

    constructor(protected page: Page){

        this.propertyDetails = this.page.locator('[data-name="asset_characteristics"]');

    }

    public async selectPropertyDetails(value:string){
        await this.propertyDetails.getByText(value).click();
        }

}
