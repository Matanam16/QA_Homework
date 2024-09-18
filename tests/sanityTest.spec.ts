import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NewAdStepOne from '../pages/NewAdStepOne';
import NewAdStepTwo from '../pages/NewAdStepTwo';
import PropertyDetailsPage from '../pages/PropertyDetailsPage';
import CostsPage from '../pages/CostsPage';
import UploadPictursPage from '../pages/UploadPictursPage';
import ButoonTopBarPage from '../pages/ButtonTopBarPage';
import AparmentPoolPage from '../pages/ApratmentPoolPage';
import BasePage from '../pages/BasePage';
import ContactDetailsPage from '../pages/ContactDetailsPage';
import MyAdsPage from '../pages/NyAdsPage';
import PersonalDetailsPage from '../pages/PersonalDetailsPage';


test.describe("Sanity Test", async () => {
  let basePage: BasePage;
  let homePage: HomePage;
  let butoonTopBarPage: ButoonTopBarPage;
  let loginPage: LoginPage;
  let newAdStepOne: NewAdStepOne;
  let newAdStepTwo: NewAdStepTwo;
  let propertyDetailsPage: PropertyDetailsPage;
  let costsPage: CostsPage;
  let uploadPictursPage: UploadPictursPage;
  let contactDetailsPage: ContactDetailsPage;
  let aparmentPoolPage: AparmentPoolPage;
  let personalDetailsPage: PersonalDetailsPage;
  let myAdsPage: MyAdsPage;
  const url = 'https://homme.co.il/';
  const username = 'tester';
  const password = 'tester123!@#qwe';
  const assetType = 'דירה, ';
  const status = 'משופץ';
  const city = ['כרמיאל', 'כרמיאל, '];
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
  const month = 'November';
  const startDate = '15';
  const imageName = 'house.JPG';
  const fullName = 'Matan Amsalem';
  const phoneNumber = '050-9220593';
  const address = 'כרמאיל 32'


  test.beforeEach(async ({page}) => {
   basePage = new BasePage(page);
   homePage = new HomePage(page);
   loginPage = new LoginPage(page);
   newAdStepOne = new NewAdStepOne(page);
   newAdStepTwo = new NewAdStepTwo(page);
   propertyDetailsPage = new PropertyDetailsPage(page);
   costsPage = new CostsPage(page);
   uploadPictursPage = new UploadPictursPage(page);
   contactDetailsPage = new ContactDetailsPage(page);
   butoonTopBarPage = new ButoonTopBarPage(page);
   aparmentPoolPage = new AparmentPoolPage(page);
   personalDetailsPage = new PersonalDetailsPage(page);
   myAdsPage = new MyAdsPage(page);
});

  test.afterEach(async ({context}) => {
    await context.clearCookies();
});

    test('test', async ({ page }) => {

      await test.step("Navigate to Apllication And Login", async () => {
          await basePage.GoToUrl(url);
          await basePage.validatePageUrl(url);
          await homePage.acceptPopup();
          await butoonTopBarPage.clickLogin();
          await loginPage.loginToApplication(username , password);
          await butoonTopBarPage.publishAD();
    });

    await test.step("Fill Status, City And Street Number", async () => {
          await newAdStepOne.selectAssetStatus(status);
          await newAdStepOne.selectCity(city[0]);
          await newAdStepOne.selectStreet(stretName);
          await newAdStepOne.fillHouseNumber(houosNumber);
          await basePage.clickNext(1);
    });

    await test.step("Fill Property Details", async () => {
      await newAdStepTwo.fillFloorNumber(floorNumber);
      await newAdStepTwo.fillAllFloorNumber(floorssNumber);
      await newAdStepTwo.fillRoomsNumber(roomssNumber);
      await newAdStepTwo.fillTerraceNumber(terraceNumber);
      await newAdStepTwo.fillParkingNumber(parkingNumber);
      await newAdStepTwo.fillBuildSquerMeterr(squerMeterr);
      await newAdStepTwo.selectElivatorOption(elivatorOption);
      await basePage.clickNext(2);
    });

    await test.step("Add Some Addes Value", async () => {
      await propertyDetailsPage.selectPropertyDetails(propertyDetails[0]);
      await propertyDetailsPage.selectPropertyDetails(propertyDetails[1]);
      await propertyDetailsPage.selectPropertyDetails(propertyDetails[2]);
      await basePage.clickNext(3);
    });

    await test.step("Fill The Property Costs", async () => {
      await costsPage.fillnumberOfPayments(paymentNumber);
      await costsPage.fillHouseCommittee(houosCommittee);
      await costsPage.fillTaxAsset(taxAsset);
      await costsPage.fillPrice(price);
      await costsPage.fillStartDate(month, startDate);
      await basePage.clickNext(4);
    });

    await test.step("Add Some Pictures", async () => {
      await uploadPictursPage.uploadPhoto(imageName);
      await basePage.clickNext(4);
    });

    await test.step("Add Pesonal Details And Publih The AD", async () => {
      await ContactDetailsPage.fillFullName(fullName);
      await ContactDetailsPage.fillFphoneNumber(phoneNumber);
      await ContactDetailsPage.publishTheAD();
    });

    await test.step("Validate That The AD Published", async () => {
      await butoonTopBarPage.clickOnApartmentPool();
      await aparmentPoolPage.serchYoursADByStreetName(stretName);
      await aparmentPoolPage.validateApartmentDetalis(assetType, city[1], stretName, houosNumber, roomssNumber, squerMeterr, floorNumber);
      
    });

    await test.step("Delete AD", async () => {
      await butoonTopBarPage.goToPersonalDetails();
      await personalDetailsPage.clickOnManageMyAdsButton();
      await myAdsPage.searchAnAd(address);
      await myAdsPage.deleteAd();
    });

  });
});