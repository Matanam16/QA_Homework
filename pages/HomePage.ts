import { Locator, Page } from "@playwright/test";

export default class HomePage{

    popupAgreeBtn: Locator;
   

    constructor(protected page: Page) {
     this.popupAgreeBtn =this.page.getByRole('link', { name: 'אני מסכים לתנאי השימוש באתר' });
    
    }

    public async acceptPopup(){
        await this.popupAgreeBtn.click();

    }

    
   
}