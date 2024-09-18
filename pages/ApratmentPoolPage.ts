import { expect, Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

export default class AparmentPoolPage extends BasePage{

    serchStreetFiled: Locator;
    apartmentDetails: Locator;
    assetDetails:Locator;

    constructor(protected page: Page){

        super(page);
        this.serchStreetFiled = page.locator('[name="street"]');
        this.apartmentDetails = page.locator('[class="elementor-icon-list-text"]');
        this.assetDetails = page.locator('[class="elementor-element elementor-element-3c7aa752 e-con-full e-flex e-con e-child"] [class="elementor-heading-title elementor-size-default"]');
    }

    public async serchYoursADByStreetName(streetName: string){
        await this.serchStreetFiled.first().click();
        await this.serchStreetFiled.first().fill(streetName);
        
    }

    public async validateApartmentDetalis(assetType: string, city: string, streetName: string, houosNumber: string, roomNumber: string, squerMeterr: string, floorNumber:string){
      await expect (this.apartmentDetails.nth(4)).toHaveText(assetType);
      await expect (this.apartmentDetails.nth(5)).toHaveText(city);
      await expect (this.apartmentDetails.nth(6)).toHaveText(streetName);
      await expect (this.apartmentDetails.nth(7)).toHaveText(houosNumber);
      await expect (this.assetDetails.nth(0)).toHaveText(roomNumber);
      await expect (this.assetDetails.nth(2)).toHaveText(squerMeterr);
      await expect (this.assetDetails.nth(4)).toHaveText(floorNumber);
    //    await this.validateElementText.apartmentDetails.nth(5)(assetType);
    //    await this.validateElementText.apartmentDetails.nth(6)(city);
    //    await this.validateElementText.apartmentDetails.nth(7)(streetName);
    //    await this.validateElementText.apartmentDetails.nth(8)(houosNumber);
    //    await this.validateElementText.assetDetails.nth(4)(roomNumber);
    //    await this.validateElementText.assetDetails.nth(6)(squerMeterr);
    //    await this.validateElementText.assetDetails.nth(8)(floorNumber);

    }
}