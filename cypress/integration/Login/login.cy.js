/// <reference types="Cypress" />

import { LoginPageActions } from "../../../PageObjects/PageActions/LoginPageActions";
import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";

const loginPageActions = new LoginPageActions();

    Given('User is on the login page',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    When('user provides username',()=>{
        loginPageActions.username('admin');
    })

    And('user provides passoword',()=>{
        loginPageActions.password('admin123');
    })

    Then('user click on login button',()=>{
        loginPageActions.login();   
    })
