/// <reference types="cypress" />

class RegisterPage {
                
        get fieldFirstName() {return cy.get('#firstname')};
        get fieldLastName() {return cy.get('#lastname')};
        get fieldEmail() {return cy.get('#email_address')};
        get fieldPassword() {return cy.get('#password')};
        get fieldConfirmPassword() {return cy.get('#password-confirmation')};
        get buttonCreateAccount() {return cy.get('[class="action submit primary"]')};
        get messageError () {return cy.get('.message-error > div')};
        get messageErrorFieldFirstName() {return cy.get('#firstname-error')};
        get messageErrorFieldLastName() {return cy.get('#lastname-error')};
        get messageErrorFieldEmail() {return cy.get("#email_address-error")};
        get messageErrorFieldPassword() {return cy.get('#password-error')};
        get messageErrorFieldConfirmPassword() {return cy.get('#password-confirmation-error')};

        goToRegister = () => {
               cy.visit('/customer/account/create', {timeout: 30000}); 
        }

        writeFieldsRegister = (firstName, lastName, email, password) => {
                this.fieldFirstName.type(firstName);
                this.fieldLastName.type(lastName);
                this.fieldEmail.type(email);
                this.fieldPassword.type(password);
                this.fieldConfirmPassword.type(password);
                this.buttonCreateAccount.click();
        }

        validateMessageErrorRequiredField = (message) =>{
            this.messageErrorFieldFirstName.should("have.text", message);
            this.messageErrorFieldLastName.should("have.text", message);
            this.messageErrorFieldEmail.should("have.text", message);
            this.messageErrorFieldPassword.should("have.text", message);
            this.messageErrorFieldConfirmPassword.should("have.text", message);
        }

} 

module.exports = new RegisterPage();