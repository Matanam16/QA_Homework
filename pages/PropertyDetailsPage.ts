import { Locator, Page } from "@playwright/test";

export default class PropertyDetailsPage{

    propertyDetails: Locator;
    nextBtn: Locator;

    constructor(protected page: Page){

        this.propertyDetails = this.page.locator('[data-name="asset_characteristics"]');
        this.nextBtn = page.getByRole('button', { name: 'הבא' }).nth(2);

    }

    public async selectPropertyDetails(value:string){
        await this.propertyDetails.getByText(value).click();
        }

        public async clickNext(){
            await this.nextBtn.click();
        }

}
