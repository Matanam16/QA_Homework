import { Locator, Page } from "@playwright/test";

export default class ButoonTopBarPage{

    loginBtn: Locator;
    publishADBtn: Locator;
    apartmentPool:Locator;

    constructor(protected page: Page){

        this.loginBtn = this.page.getByRole('link', { name: 'התחבר' });
        this.publishADBtn = this.page.getByRole('link', { name: 'פרסם מודעה' });
        this.apartmentPool = this.page.getByRole('link', { name: 'מאגר דירות' });
        
    }

    public async clickLogin(){
        await this.loginBtn.click();

    }

    public async publishAD(){
        await this.page.waitForTimeout(2000); 
        await this.publishADBtn.isEnabled();
        await this.publishADBtn.click();

   }

   public async clickOnApartmentPool(){
    await this.apartmentPool.first().click();
   }
}