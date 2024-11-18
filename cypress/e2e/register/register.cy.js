/// <reference types="cypress" />

const registerPage = require("../../support/pages/register.page");
const myAccountPage = require("../../support/pages/myaccount.page");
const {firstname, lastname, email, password} = require("../../fixtures/dataUser.json");

const numberRandom = Math. floor(Math. random() * 10000000);

describe('Validar fluxo de cadastro', () => {
    beforeEach(() => {
        registerPage.goToRegister();
    });

    it('Cadastro com Sucesso', () => {
        registerPage.writeFieldsRegister(firstname, lastname, "testdot"+numberRandom+"@mailinator.com", password);
        myAccountPage.messageSucess.contains("Thank you for registering with Main Website Store.");
    });

    it('Validação de Campos Obrigatórios', () => {
        registerPage.buttonCreateAccount.click();
        registerPage.validateMessageErrorRequiredField("This is a required field.");
    });

    it('Validação de Formato de E-mail', () => {
        registerPage.fieldEmail.type("teste@gmail");
        registerPage.buttonCreateAccount.click();
        registerPage.messageErrorFieldEmail.should("have.text", "Please enter a valid email address (Ex: johndoe@domain.com).");
    });

    it('Validação de senha', () => {
        registerPage.fieldPassword.type("teste");
        registerPage.messageErrorFieldPassword.should("have.text", "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.");

    });

    it('Validação confirmação de senha', () => {
        registerPage.fieldPassword.type("C0nnect@");
        registerPage.fieldConfirmPassword.type("C0nnect@23");
        registerPage.buttonCreateAccount.click();
        registerPage.messageErrorFieldConfirmPassword.should("have.text", "Please enter the same value again.")
    });

    it('Validação de cadastro com e-mail já cadastrado', () => {
        registerPage.writeFieldsRegister(firstname, lastname, email, password);
        registerPage.messageError.should("have.text", "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.");

    });
});