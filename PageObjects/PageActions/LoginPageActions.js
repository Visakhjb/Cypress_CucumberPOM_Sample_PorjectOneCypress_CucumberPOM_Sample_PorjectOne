const loginpageelements = require('../PageElements/LoginPageElements.json')

export class LoginPageActions{

    username(uname){
        cy.get(loginpageelements.LoginPageLocators.username_locator)
        .type(uname);
        return
    }

    password(pwd){

        cy.get(loginpageelements.LoginPageLocators.password_locator)
        .type(pwd);
        return

    }

    login(){
        cy.get(loginpageelements.LoginPageLocators.login_locator).click();
        return
    }

}
