import { Locator, Page } from "@playwright/test";

export default class ContactDetailsPage{
    static publishTheAD() {
      throw new Error('Method not implemented.');
    }
    static fillFphoneNumber(phoneNumber: string) {
      throw new Error('Method not implemented.');
    }
    static fillFullName(fullName: string) {
      throw new Error('Method not implemented.');
    }

    fullNameFiled: Locator;
    phoneNumberFiled: Locator;
    publishBtn: Locator;

    constructor(protected page: Page){

        this.fullNameFiled = page.locator('[data-name="name_full"]');
        this.phoneNumberFiled = page.locator('[data-name="phone_number"]');
        this.publishBtn = page.locator('[class="ff-btn ff-btn-submit ff-btn-md publish-asset ff_btn_style"]');

    }

    public async fillFullName(fullName: string){
        await this.fullNameFiled.click();
        await this.fullNameFiled.fill(fullName);
    }

    public async fillFphoneNumber(phoneNumber: string){
        await this.phoneNumberFiled.click();
        await this.phoneNumberFiled.fill(phoneNumber);
    }

    public async publishTheAD(){
        await this.publishBtn.click();
    }
}