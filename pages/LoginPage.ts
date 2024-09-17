import { Locator, Page } from "@playwright/test";

export default class LoginPage{

    usernameFiled: Locator;
    passwordFiled:Locator;
    loginBtn: Locator;

    constructor(protected page: Page) {

        this.usernameFiled = this.page.getByPlaceholder('שם משתמש או כתובת אימייל');
        this.passwordFiled = this.page.getByPlaceholder('סיסמא');
        this.loginBtn = this.page.locator('[name="wp-submit"]');
        
        
    }

    public async loginToApplication(usernameFiled: string, passwordFiled: string){
        await this.usernameFiled.click();
        await this.usernameFiled.fill(usernameFiled);
        await this.passwordFiled.click();
        await this.passwordFiled.fill(passwordFiled);
        await this.loginBtn.click();
    }
}
