import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NewAdStepOne from '../pages/NewAdStepOne';
import NewAdStepTwo from '../pages/NewAdStepTwo';
import PropertyDetailsPage from '../pages/PropertyDetailsPage';
import CostsPage from '../pages/CostsPage';
import UploadPictursPage from '../pages/UploadPictursPage';
import PersonalDetailsPage from '../pages/PersonalDetailsPage';
import ButoonTopBarPage from '../pages/ButtonTopBarPage';
import AparmentPoolPage from '../pages/ApratmentPoolPage';


test.describe("Sanity Test", async () => {
  let homePage: HomePage;
  let butoonTopBarPage: ButoonTopBarPage;
  let loginPage: LoginPage;
  let newAdStepOne: NewAdStepOne;
  let newAdStepTwo: NewAdStepTwo;
  let propertyDetailsPage: PropertyDetailsPage;
  let costsPage: CostsPage;
  let uploadPictursPage: UploadPictursPage;
  let personalDetailsPage: PersonalDetailsPage;
  let aparmentPoolPage: AparmentPoolPage;
  const url = 'https://homme.co.il/';
  const username = 'tester';
  const password = 'tester123!@#qwe';
  let assetType = 'דירה';
  const status = 'משופץ';
  const city = 'כרמיאל';
  const stretName = 'אטד';
  const houosNumber = '32';
  const floorNumber = '2';
  const floorssNumber = '6';
  const roomssNumber = '5';
  const parkingNumber = '1';
  const terraceNumber = '1';
  const squerMeterr = '120';
  const elivatorOption = 'עם';
  const propertyDetails = ['גישה לנכים', 'מיזוג', 'ממ"ד'];
  const paymentNumber = '12';
  const houosCommittee = '300';
  const taxAsset = '1200';
  const price = '4500';
  const startDate = '01/01/2025';
  const imageName = 'house';
  const fullName = 'Matan Amsalem';
  const phoneNumber = '050-9220593';


  test.beforeEach(async ({page}) => {
   homePage = new HomePage(page);
   loginPage = new LoginPage(page);
   newAdStepOne = new NewAdStepOne(page);
   newAdStepTwo = new NewAdStepTwo(page);
   propertyDetailsPage = new PropertyDetailsPage(page);
   costsPage = new CostsPage(page);
   uploadPictursPage = new UploadPictursPage(page);
   personalDetailsPage = new PersonalDetailsPage(page);
   butoonTopBarPage = new ButoonTopBarPage(page);
   aparmentPoolPage = new AparmentPoolPage(page);
});

  test.afterEach(async ({context}) => {
    await context.clearCookies();
});

    test('test', async ({ page }) => {

      await test.step("Navigate to Apllication And Login", async () => {
        await page.goto(url);
          await homePage.acceptPopup();
          await butoonTopBarPage.clickLogin();
          await loginPage.loginToApplication(username , password);
          await butoonTopBarPage.publishAD();
    });

    await test.step("Fill Status, City And Street Number", async () => {
          await newAdStepOne.selectAssetStatus(status);
          await newAdStepOne.selectCity(city);
          await newAdStepOne.selectStreet(stretName);
          await newAdStepOne.fillHouseNumber(houosNumber);
          await newAdStepOne.clickNext();
    });

    await test.step("Fill Property Details", async () => {
      await newAdStepTwo.fillFloorNumber(floorNumber);
      await newAdStepTwo.fillAllFloorNumber(floorssNumber);
      await newAdStepTwo.fillRoomsNumber(roomssNumber);
      await newAdStepTwo.fillTerraceNumber(terraceNumber);
      await newAdStepTwo.fillParkingNumber(parkingNumber);
      await newAdStepTwo.fillBuildSquerMeterr(squerMeterr);
      await newAdStepTwo.selectElivatorOption(elivatorOption);
      await newAdStepTwo.clickNext();
    });

    await test.step("Add Some Addes Value", async () => {
      await propertyDetailsPage.selectPropertyDetails(propertyDetails[0]);
      await propertyDetailsPage.selectPropertyDetails(propertyDetails[1]);
      await propertyDetailsPage.selectPropertyDetails(propertyDetails[2]);
      await propertyDetailsPage.clickNext();
    });

    await test.step("Fill The Property Costs", async () => {
      await costsPage.fillnumberOfPayments(paymentNumber);
      await costsPage.fillHouseCommittee(houosCommittee);
      await costsPage.fillTaxAsset(taxAsset);
      await costsPage.fillPrice(price);
      await costsPage.fillStartDate(startDate);
      await costsPage.clickNext();
    });

    await test.step("Add Some Pictures", async () => {
      await uploadPictursPage.uploadPhoto(imageName);
      await uploadPictursPage.clickNext();
    });

    await test.step("Add Pesonal Details And Publih The AD", async () => {
      await personalDetailsPage.fillFullName(fullName);
      await personalDetailsPage.fillFphoneNumber(phoneNumber);
      await personalDetailsPage.publishTheAD();
    });

    await test.step("Validate That The AD Published", async () => {
      await butoonTopBarPage.clickOnApartmentPool();
      await aparmentPoolPage.serchYoursADByStreetName(stretName);
      await aparmentPoolPage.validateApartmentDetalis(assetType,city, stretName, houosNumber, roomssNumber, squerMeterr, floorNumber);
      
    });

  });
});