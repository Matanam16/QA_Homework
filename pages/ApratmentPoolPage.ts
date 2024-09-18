import { expect, Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

export default class AparmentPoolPage{

    serchStreetFiled: Locator;
    apartmentDetails: Locator;
    assetDetails:Locator;
    basePage: any;

    constructor(protected page: Page){

        this.serchStreetFiled = page.locator('[name="street"]');
        this.apartmentDetails = page.locator('[class="elementor-icon-list-items elementor-inline-items"][class="elementor-icon-list-item elementor-inline-item"]');
        this.assetDetails = page.locator('[class="elementor-element elementor-element-3c7aa752 e-con-full e-flex e-con e-child"] [class="elementor-heading-title elementor-size-default"]');
    }

    public async serchYoursADByStreetName(streetName: string){
        await this.serchStreetFiled.last().click();
        await this.serchStreetFiled.fill(streetName);
    }

    public async validateApartmentDetalis(assetType: string, city: string, streetName: string, houosNumber: string, roomNumber: string, squerMeterr: string, floorNumber:string){
       await this.basePage.validateElementText.apartmentDetails.nth(5)(assetType);
       await this.basePage.validateElementText.apartmentDetails.nth(6)(city);
       await this.basePage.validateElementText.apartmentDetails.nth(7)(streetName);
       await this.basePage.validateElementText.apartmentDetails.nth(8)(houosNumber);
       await this.basePage.validateElementText.assetDetails.nth(1)(roomNumber);
       await this.basePage.validateElementText.assetDetails.nth(3)(squerMeterr);
       await this.basePage.validateElementText.assetDetails.nth(5)(floorNumber);

    }
}