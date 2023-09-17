import { type Locator, type Page, expect } from '@playwright/test';

export class ConsolePage{

    readonly page:Page;

    readonly title: RegExp;
    readonly sessionPopUp: Locator; 
    readonly sessionPopUpCloseIcon: Locator;
    readonly newButton: Locator;
    readonly newSecretMenu: Locator;
    readonly newSecretMenuItem: Locator;
    readonly staticSecretEditForm: Locator;
    readonly staticSecretNameTextBox: Locator;
    readonly staticSecretLocationTextBox: Locator;
    readonly staticSecretLocationPopUp: Locator;
    readonly staticSecretDescriptionTextArea: Locator;
    readonly deleteProtectedSwitch: Locator;
    readonly staticSecretValueTextArea: Locator;
    readonly finishButton: Locator;
    readonly staticSecretFolders: Locator;
    readonly staticSecretListForm: Locator;
    readonly staticSecretKeys: Locator;
    readonly editStaticSecretKeyForm: Locator;
    readonly editValueIcon: Locator;
    readonly saveValueIcon: Locator;
    readonly editStaticSecretTopDotMenu: Locator;
    readonly editStaticSecretTopDotMenuItems: Locator;
    readonly deleteprotectionswitch: Locator;
    readonly myCloudVaultLink: Locator;
    readonly staticSecretFolderRowMenu: Locator;
    readonly staticSecretFolderRowMenuDeleteItem: Locator;
    readonly staticSecretAcceptDeletePopUp: Locator;
    readonly staticSecretAcceptDeletePopUpFolderTextBox: Locator;
    readonly staticSecretAcceptDeletePopUpFolderDeleteButton: Locator;
    

    constructor (page: Page){
        this.page = page;             
        this.title = /Akeyless Security: Secrets & Keys/; 
        this.sessionPopUp = page.locator('//div[contains(@class,"MuiPaper-root") and contains(@class,"MuiPaper-rounded")]');    
        this.sessionPopUpCloseIcon = page.locator('//button[@class="MuiButtonBase-root MuiIconButton-root"]'); 
        this.newButton = page.locator('//button[@data-test = "testNewItemButton"]'); 
        this.newSecretMenu = page.locator('//ul[@class="MuiList-root MuiList-padding"]'); 
        //this.newSecretMenuItem = page.locator('//ul[@class="MuiList-root MuiList-padding"]//span[text()="Static Secret"]');
        this.staticSecretEditForm = page.locator('//div[contains(@class,"MuiDialog-paperWidthFalse MuiDialog-paperFullWidth MuiPaper-elevation24 MuiPaper-rounded")]');              
        this.staticSecretNameTextBox = page.locator('//input[@name="name"]');  
        this.staticSecretLocationTextBox = page.locator('//input[contains(@id,"location")]');  
        this.staticSecretLocationPopUp = page.locator('//ul[contains(@id,"location") and contains(@id,"popup")]'); 
        this.staticSecretDescriptionTextArea = page.locator('//textarea[@name="description"]');
        this.deleteProtectedSwitch = page.locator('//input[@name="isProtected"]');
        this.staticSecretValueTextArea = page.locator('//textarea[@name="value"]');
        this.finishButton = page.locator('//button[@data-test = "testCreateItemDialogApproveButton"]');
        this.staticSecretFolders = page.locator('//div[contains(@class,"BaseTable__row--customized")]//p[contains(@class,"MuiTypography-root")]');
        this.staticSecretListForm = page.locator('//div[@class="BaseTable__row-cell"]');  
        this.staticSecretKeys = page.locator('//div[@class="BaseTable__row-cell"]//p[conyains(@class,"MuiTypography-root")]');
        this.editStaticSecretKeyForm = page.locator('//div[contains(@class,"MuiGrid-root") and contains(@class, "MuiGrid-item")][2]'); 
        this.editValueIcon = page.locator('//button[@id="form-field-edit-icon"][4]'); 
        this.saveValueIcon = page.locator('//button[@data-test="updateFieldValue"]'); 
        this.editStaticSecretTopDotMenu = page.locator('//div[@data-test="detailsHeader"]//button[@class="MuiButtonBase-root MuiIconButton-root"]'); 
        this.editStaticSecretTopDotMenuItems = page.locator('//div[contains(@class,"MuiPaper-root MuiPopover-paper MuiPaper-elevation8 MuiPaper-rounded")]//ul[contains(@class,"MuiList-root") and contains(@class,"MuiList-padding")]'); 
        this.deleteprotectionswitch = page.locator('//div[contains(@class,"MuiPaper-root MuiPopover-paper MuiPaper-elevation8 MuiPaper-rounded")]//input[contains(@class,"MuiSwitch-input")]'); 
        this.myCloudVaultLink = page.locator('//p[text()="My Cloud Vault"]'); 
        this.staticSecretFolderRowMenu= page.locator('//ul[contains(@class="MuiList-root") and contains(@class,"MuiList-padding")]'); 
        this.staticSecretFolderRowMenuDeleteItem= page.locator('//ul[contains(@class, "MuiList-root") and contains(@class,"MuiList-padding")]/li/p[text()="Delete"]'); 
        this.staticSecretAcceptDeletePopUp = page.locator('//div[contains(@class,"MuiPaper-root MuiDialog-paper MuiDialog-paperScrollBody") and (@role="dialog")]'); 
        this.staticSecretAcceptDeletePopUpFolderTextBox= page.locator('//input[@class="MuiInputBase-input MuiInput-input"]'); 
        this.staticSecretAcceptDeletePopUpFolderDeleteButton= page.locator('//button[@data-test="saveBtn"]/span[text()="Delete"]'); 
    }

    async assertConsolePageTitle(){
        await expect(this.page).toHaveTitle(this.title);
    }

    async assertSessionPopUp(){
        await this.sessionPopUp.isVisible;
    }

    async clickSessionPopUpCloseIcon(){
        await this.sessionPopUpCloseIcon.click();
    }

    async clickNewButton(){
        await this.newButton.click();
    }

    async assertNewSecretMenuShown(){
        await this.newSecretMenu.isVisible;
    }

    async clickNewSecretMenuItem(itemName:string){
        await this.page.locator('//ul[@class="MuiList-root MuiList-padding"]//span[text()="'+itemName+'"]').click();
    }

    async assertStaticSecretFormShown(){
        await this.staticSecretEditForm.isVisible;
    }

    async setStaticSecretNameTextBox(staticSecretName:string){
        await this.staticSecretNameTextBox.fill(staticSecretName);
    }

    async setStaticSecretLocationTextBox(staticSecretLocation:string){

        await this.staticSecretLocationTextBox.fill(staticSecretLocation);

        if(await this.staticSecretLocationPopUp.isVisible){

        await this.staticSecretLocationPopUp.click();

        }  
    }

    async setStaticSecretDescriptionTextArea(staticSecretDescription:string){
        await this.staticSecretDescriptionTextArea.fill(staticSecretDescription);
    }

    async clickDeleteProtectedSwitch(){
        await this.deleteProtectedSwitch.click();
    }

    async setStaticSecretValueTextArea(staticSecretValue:string){
        await this.staticSecretValueTextArea.fill(staticSecretValue);
    }

    async clickFinishButton(){
        await this.finishButton.click();
    }

    async assertStaticSecretFolderCreated(folderName:string){

        const rows = await this.staticSecretFolders.allTextContents();

        let flgFound = false;

        for (let i = 0; i < rows.length;i++)
        {
            if(rows[i].trim() === folderName)
            {
                console.log("FolderName '"+rows[i]+"' found in list")  
                flgFound = true;  
                break;       
            }
        }

        if(!flgFound){             
            console.log("FolderName " +folderName+ "not found in list"); //throw new Error
        }
    }

    async clickStaticSecretFolder(folderName:string){

        this.page.getByText(folderName).click(); 
        //this.page.locator('//div[contains(@class,"BaseTable__row--customized")]//p[contains(@class,"MuiTypography-root") and (contains(text(),"'+folderName+'"))]//..//..//..//..//..//..').hover();
        //this.page.locator('//div[contains(@class,"BaseTable__row--customized")]//p[contains(@class,"MuiTypography-root") and (contains(text(),"'+folderName+'"))]//..//..//..//..//..//..').click;
    }

    async assertStaticSecretKeyListFormShown(){
        await this.staticSecretListForm.isVisible;
    }

    async assertStaticSecretKeyExists(keyName:string){
//div[@class="BaseTable__row-cell"]//p[conyains(@class,"MuiTypography-root")]
        const rows = await this.staticSecretKeys.allTextContents();

        let flgFound = false;

        for (let i = 0; i < rows.length;i++)
        {
            if(rows[i].trim() === keyName)
            {
                console.log("KeyName '"+rows[i]+"' found in list")  
                flgFound = true;  
                break;       
            }
        }

        if(!flgFound){             
            console.log("KeyName " +keyName+ "not found in list");
        }
    }

    async clickStaticSecretKey(secretKey:string){
        
        this.page.locator('//div[contains(@class,"BaseTable__row-cell")]//p[contains(@class,"MuiTypography-root") and text()="'+secretKey+'"]//..//..//..//..//..').click;
    }

    async assertEditStaticSecretKeyFormShown(){
        await this.editStaticSecretKeyForm.isVisible;
    }

    async clickEditValueIcon(){
        await this.editValueIcon.click();
    }

    
    async clickSaveValueIcon(){
        await this.saveValueIcon.click();
    }

    async clickEditStaticSecretTopDotMenu(){
        await this.editStaticSecretTopDotMenu.click();
    }
    
    async assertEditStaticSecretTopDotMenuItemsShown(){
        await this.editStaticSecretTopDotMenuItems.isVisible;
    }
    
    async clickDeleteprotectionswitch(){
        await this.deleteprotectionswitch.click();
    }
    
    async clickMyCloudVaultLink(){
        await this.myCloudVaultLink.click();
    }
    
    async clickStaticSecretFolderDotMenu(secretKey:string){
        this.page.locator('//div[contains(@class,"BaseTable__row--customized")]//p[contains(@class,"MuiTypography-root") and text()="'+secretKey+'"]//..//..//..//..//..//..').hover();
        await this.page.waitForTimeout(1000);
        this.page.locator('//div[contains(@class,"BaseTable__row--customized")]//p[contains(@class,"MuiTypography-root") and text()="'+secretKey+'"]//..//..//..//..//..//..').click();
    }

    async assertStaticSecretFolderDotMenuShown(){
        await this.staticSecretFolderRowMenu.isVisible;
    }

    async clickStaticSecretFolderRowMenuDeleteItem(){
        await this.staticSecretFolderRowMenuDeleteItem.click();
    }
    
    async assertStaticSecretAcceptDeletePopUpShown(){
        await this.staticSecretAcceptDeletePopUp.isVisible;
    }
    
    async setStaticSecretAcceptDeletePopUpFolderTextBox(folderName:string){
        await this.staticSecretAcceptDeletePopUpFolderTextBox.fill(folderName);
    }

    async clickStaticSecretAcceptDeletePopUpFolderDeleteButton(){
        await this.staticSecretAcceptDeletePopUpFolderDeleteButton.click();
    }
    
    async assertStaticSecretFolderRemoved(folderName:string){

        const rows = await this.page.locator('//div[contains(@class,"BaseTable__row--customized")]//p[contains(@class,"MuiTypography-root")]').allTextContents();

        let flgFound = false;

        for (let i = 0; i < rows.length;i++)
        {
            if(rows[i].trim() === folderName)
            {                
                flgFound = true;                      
            }
        }

        if(!flgFound){             
            console.log("FolderName '"+folderName+"' not found in list")  
        }else{
            console.log("FolderName " +folderName+ " found in list");
        }
    }
}

export default ConsolePage;

