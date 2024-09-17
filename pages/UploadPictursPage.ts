import { Locator, Page } from "@playwright/test";
import path from "path";

export default class UploadPictursPage{

    uploadPictureBtn: Locator;
    nextBtn:  Locator;

    constructor(protected page: Page){

        this.uploadPictureBtn = page.locator('[class="ff_file_upload_holder"]');
        this.nextBtn = page.locator('[class="ff-float-right ff-btn ff-btn-next ff-btn-secondary"]');

    }

    public async uploadPhoto(photoName: string){
        await this.uploadPictureBtn.setInputFiles(path.join(__dirname, `../../tests/House_Photo/${photoName}`));
    }

    public async clickNext(){
        await this.nextBtn.last().click();
    }

}