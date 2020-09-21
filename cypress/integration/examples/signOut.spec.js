import LoginPage from '../pageObjects/LoginPage'
import SettingsAccount from '../pageObjects/AccountInfo'
import LoginPassworddSettings from '../pageObjects/LoginPasswordSett'
import LanguageAndCurrency from '../pageObjects/LanguageAndCurrency'
import LanguageCurrency from '../pageObjects/LanguageAndCurrency'




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

    it('Change language and currency', function () {
        let settings = new SettingsAccount
        settings.userNameMenu()
        let languageCurrency = new LanguageCurrency
        languageCurrency.changeLanguage()
        languageCurrency.changeCurrency()

    })

    it('Go to Settings', function () {
        let settings = new SettingsAccount
        //settings.userNameMenu()
        settings.accountInfo()
        settings.firstName('Freaky')
        cy.focused().rightclick()
        settings.lastName()
        settings.eMail()
        settings.phone() 
        settings.extension('elo melo piec ddwa zero')
        settings.save()
        settings.userNameMenu()
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
        cy.get('.loginPage>form > button').should('be.visible')

    })

})