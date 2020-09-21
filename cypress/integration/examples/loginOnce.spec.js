import LoginPage from '../pageObjects/LoginPage'
import SettingsAccount from '../pageObjects/AccountInfo'
import LoginPassworddSettings from '../pageObjects/LoginPasswordSett'




describe('CustomSuite', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    before(function () {

        cy.visit('/')
        let loginOnPage = new LoginPage()
        cy.title().should('be.equal', 'Please log in... | EBRAND')
        loginOnPage.fillEmail(this.data.email)
        loginOnPage.fillPassword(this.data.password)
        loginOnPage.submit()
        cy.title().should('be.equal', 'Dashboard | EBRAND')
    })
    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    it('Go to Settings', function () {
        userNameMenu()
        //let settings = new SettingsAccount
        //settings.userNameMenu()
        //settings.accountInfo()
        //settings.firstName()
        //settings.lastName()
        //settings.eMail()
        //settings.phone()
        //settings.extension()
       // settings.save()
        //settings.userNameMenu()
    })

    it('Go to Login&Password', function () {

        
        let loginPassword = new LoginPassworddSettings
        loginPassword.loginAndPassword()
        loginPassword.oldPassword()
        loginPassword.newPassword()
        let settings = new SettingsAccount
        settings.save()
        settings.userNameMenu()
        loginPassword.signOut()
    })

})


function addPassword(){
    let pass = document.getElementById('#newpassword').value;
    let passSecondd = document.getElementById('#verifypassword').value;

    if (pass.value != passSecondd.value){

        document.getElementsByClassName('.accountSettings__error').is(':visible')
    }
}
