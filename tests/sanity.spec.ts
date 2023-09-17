import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/loginPage';
import {ConsolePage} from '../pages/consolePage';


const url = "https://console.akeyless.io/";
const staticSecretName = "TestSS";
const username = "ygpanzer@gmail.com"; //process.env.USERNAME;
const password = "+HZmKYY&m*U7>iR"; //process.env.PASSWORD;

let loginPage: LoginPage;
let consolePage: ConsolePage;

test.beforeAll(async ({playwright}) => {

});

test.beforeEach(async ({page}, testInfo) => {

  console.log("Running " + testInfo.title)  

  await page.goto(url);

});

test('Akeyless', async ({ page }) => {
  
  await test.step('Login to console', async () => {

    loginPage = new LoginPage(page);

    await loginPage.assertLoginPageTitle();
            
    await loginPage.setEmailTextBox(username);

    await loginPage.clickSignInButtonButton();
        
    await loginPage.setPasswordlTextBox(password);

    await loginPage.clickSignInButtonButton();

  });

  await test.step('Close session warning popup', async () => {

    consolePage = new ConsolePage(page);

    await consolePage.assertConsolePageTitle();

    await consolePage.assertSessionPopUp();

    await consolePage.clickSessionPopUpCloseIcon();

  });

  await test.step('Create a new Static Secret', async () => {

    await consolePage.clickNewButton();

    await consolePage.assertNewSecretMenuShown();
    
    await consolePage.clickNewSecretMenuItem("Static Secret");


    await consolePage.assertStaticSecretFormShown();
    
    await consolePage.setStaticSecretNameTextBox(staticSecretName + ' name');
    
    await consolePage.setStaticSecretLocationTextBox(staticSecretName);
    
    await consolePage.setStaticSecretDescriptionTextArea(staticSecretName + ' description');
    
    //await page.locator('//input[contains(@id,"mui")]').fill('Hello tags');//can't catch disapeared popup because of session limitation
    
    await consolePage.clickDeleteProtectedSwitch();
    
    await consolePage.setStaticSecretValueTextArea(staticSecretName + ' value');
    
    await consolePage.clickFinishButton();    

  });  

  await test.step('Validate and Edit new Static Secret created', async () => {

    await page.waitForTimeout(8000);

    await consolePage.assertStaticSecretFolderCreated(staticSecretName);

    await consolePage.clickStaticSecretFolder(staticSecretName);

    await consolePage.assertStaticSecretKeyListFormShown();

    await consolePage.assertStaticSecretKeyExists(staticSecretName);

    await consolePage.clickStaticSecretKey(staticSecretName);

    await consolePage.assertEditStaticSecretKeyFormShown();

    await consolePage.clickEditValueIcon();

    await consolePage.setStaticSecretValueTextArea(staticSecretName + ' NEW value');
    
    await consolePage.clickSaveValueIcon();    

  });

  await test.step('Validate previously secret key value', async () => {
    
    //Version tab can't find on the UI for validation of secret key previous value 
    
  });

  await test.step('Remove previously created secret key and validate its missing', async () => {
    
    await consolePage.clickEditStaticSecretTopDotMenu();

    await consolePage.assertEditStaticSecretTopDotMenuItemsShown();
    
    await consolePage.clickDeleteprotectionswitch();
        
    await page.waitForTimeout(5000);

    await consolePage.clickMyCloudVaultLink();

    await consolePage.clickStaticSecretFolderDotMenu(staticSecretName);

    await consolePage.assertStaticSecretFolderDotMenuShown();
    
    await consolePage.clickStaticSecretFolderRowMenuDeleteItem();

    await consolePage.assertStaticSecretAcceptDeletePopUpShown();

    await consolePage.setStaticSecretAcceptDeletePopUpFolderTextBox(staticSecretName);

    await consolePage.clickStaticSecretAcceptDeletePopUpFolderDeleteButton();

    await page.waitForTimeout(5000);

    await consolePage.assertStaticSecretFolderRemoved(staticSecretName);
    
  });
  
  
});

test.afterEach(async ({page}, testInfo) => {

  await page.waitForTimeout(5000);
  console.log("Finished test " + testInfo.title + " with status " + testInfo.status);  

});

test.afterAll(async ({playwright}) => {

  console.log("Execution finished");  
  
});