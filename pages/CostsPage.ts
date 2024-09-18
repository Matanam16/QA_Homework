import { Locator, Page } from "@playwright/test";

export default class CostsPage{

    numberOfPaymentsFiled: Locator;
    houseCommitteeFiled: Locator;
    taxAssetFiled: Locator;
    priceFiled: Locator;
    startDateFiled: Locator;

    constructor(protected page: Page){
        
        this.numberOfPaymentsFiled = page.locator('[data-name="credits"]');
        this.houseCommitteeFiled = page.locator('[data-name="house_committee"]');
        this.taxAssetFiled = page.locator('[data-name="tax_asset"]');
        this.priceFiled = page.locator('[data-name="price""]');
        this.startDateFiled = page.locator('[data-name="date_start"]');
    }

    public async fillnumberOfPayments(number:string){
        await this.numberOfPaymentsFiled.click();
        await this.numberOfPaymentsFiled.fill(number);

    }

    public async fillHouseCommittee(houseCommittee:string){
        await this.houseCommitteeFiled.click();
        await this.houseCommitteeFiled.fill(houseCommittee);

    }

    public async fillTaxAsset(taxAsset:string){
        await this.taxAssetFiled.click();
        await this.taxAssetFiled.fill(taxAsset);

    }

    public async fillPrice(price:string){
        await this.priceFiled.click();
        await this.priceFiled.fill(price);

    }

    public async fillStartDate(startDate:string){
        await this.startDateFiled.click();
        await this.page.getByRole('img').nth(3).click();
        await this.page.getByLabel(startDate).click();

    }

}

