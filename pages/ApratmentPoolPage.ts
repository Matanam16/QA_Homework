import { expect, Locator, Page } from "@playwright/test";

export default class AparmentPoolPage{

    serchStreetFiled: Locator;
    apartmentDetails: Locator;
    assetDetails:Locator;

    constructor(protected page: Page){

        this.serchStreetFiled = page.locator('[name="street"]');
        this.apartmentDetails = page.locator('[class="elementor-icon-list-items elementor-inline-items"][class="elementor-icon-list-item elementor-inline-item"]');
        this.assetDetails = page.locator('[class="elementor-element elementor-element-3c7aa752 e-con-full e-flex e-con e-child"] [class="elementor-heading-title elementor-size-default"]');
    }

    public async serchYoursADByStreetName(streetName: string){
        await this.serchStreetFiled.first().click();
        await this.serchStreetFiled.fill(streetName);
    }

    public async validateApartmentDetalis(assetType: string, city: string, streetName: string, houosNumber: string, roomNumber: string, squerMeterr: string, floorNumber:string){
        await this.apartmentDetails.textContent();
        expect(this.apartmentDetails.nth(5)).toBe(assetType); 
        expect(this.apartmentDetails.nth(6)).toBe(city); 
        expect(this.apartmentDetails.nth(7)).toBe(streetName); 
        expect(this.apartmentDetails.nth(8)).toBe(houosNumber); 
        await this.assetDetails.textContent();
        expect(this.assetDetails.nth(1)).toBe(roomNumber);
        expect(this.assetDetails.nth(1)).toBe(squerMeterr);
        expect(this.assetDetails.nth(1)).toBe(floorNumber);

    }
}