import { type Locator, type Page, expect } from '@playwright/test';

export class LoginPage{

    readonly page:Page;

    readonly emailTextBox: Locator;
    readonly signInButton: Locator; 
    readonly title: RegExp;
    readonly passwordTextBox: Locator;    

    constructor (page: Page){
        this.page = page;
        this.emailTextBox = page.locator('//input[@name="email"]'); 
        this.signInButton = page.locator('//button[.//span[contains(text(),"Sign In")]]');   
        //this.loginButton = page.getByRole('button', {name:'Sign In'}); 
        this.title = /Akeyless Security: Sign in/;    
        this.passwordTextBox = page.locator('//input[@name="password"]'); 
    }

    async assertLoginPageTitle(){
        await expect(this.page).toHaveTitle(this.title);
    }

    async setEmailTextBox(email:string){
        await this.emailTextBox.fill(email);
    }

    async clickSignInButtonButton(){
        await this.signInButton.click();
    }

    async setPasswordlTextBox(password:string){
        await this.passwordTextBox.fill(password);
    }
}

export default LoginPage;