import { Locator, Page } from "@playwright/test";
import path from "path";

export default class UploadPictursPage{

    uploadPictureBtn: Locator;

    constructor(protected page: Page){

        this.uploadPictureBtn = page.locator('[class="ff_file_upload_holder"]');

    }

    public async uploadPhoto(photoName: string){
        await this.uploadPictureBtn.setInputFiles(path.join(__dirname, `../../tests/House_Photo/${photoName}`));
    }

}