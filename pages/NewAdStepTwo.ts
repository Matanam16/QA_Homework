import { Locator, Page } from "@playwright/test";

export default class NewAdStepTwo{
    floorFiled: Locator;
    allFloorsFiled: Locator;
    roomNumber: Locator;
    numberOfTerrace: Locator;
    numberOfParkings: Locator;
    squareMeterFiled: Locator;
    elivatorSelector: Locator;
    nextBtn: Locator;
    
     constructor(protected page: Page){
        this.floorFiled = page.locator('[data-name="floor"]');
        this.allFloorsFiled = page.locator('[data-name="floors"]');
        this.roomNumber = page.locator('[name="room_num"]');
        this.numberOfTerrace = page.locator('[name="terrace"]');
        this.numberOfParkings = page.locator('[name="_parking"]');
        this.squareMeterFiled = page.locator('[data-name="built_mr"]');
        this.elivatorSelector = page.locator('[name="elevator_1"]');
        this.nextBtn = page.getByRole('button', { name: 'הבא' }).nth(1);
     }

     public async fillFloorNumber(number:string){
        await this.floorFiled.click();
        await this.floorFiled.fill(number);

    }

    public async fillAllFloorNumber(number:string){
        await this.allFloorsFiled.click();
        await this.allFloorsFiled.fill(number);

    }

    public async fillRoomsNumber(number:string){
        await this.page.waitForTimeout(1500);
        await this.roomNumber.selectOption(number);

    }

    public async fillTerraceNumber(number:string){
        await this.page.waitForTimeout(1500);
        await this.numberOfTerrace.selectOption(number);

    }

    public async fillParkingNumber(number:string){
        await this.page.waitForTimeout(1500);
        await this.numberOfParkings.selectOption(number);

    }

    public async fillBuildSquerMeterr(number:string){
        await this.squareMeterFiled.click();
        await this.squareMeterFiled.fill(number);

    }

    public async selectElivatorOption(option:string){
        await this.page.waitForTimeout(1500);
        await this.elivatorSelector.selectOption(option);

    }

    public async clickNext(){
        await this.nextBtn.click();
    }
}

  
