import LanguageCurrency from "./LanguageAndCurrency"


class SettingsAccount extends LanguageCurrency {

    userNameMenu() {
        let nameLabel = cy.get('.topMenu__username')
        nameLabel.click()
    }

    accountInfo() {
        let infoAccount = cy.get('.settingsBar__item.settingsBar__item--normalLink').eq(0)
        infoAccount.click()
    }


    firstName(string) {
        let name = cy.get('#first_name')
        name.clear()
        name.type(string)
    }

    lastName() {
        let surname = cy.get('#last_name')
        surname.clear()
        surname.type('Freaky')
    }

    eMail() {
        let mail = cy.get('#email')
        mail.clear()
        mail.type('brzmart+1@gmail.com')
    }

    phone() {
        let numberPhone = cy.get('#phone')
        numberPhone.clear()
        numberPhone.type("12345678")
    }

    extension(text) {
        let ext = cy.get('#extension').clear().type(text)
        //ext.clear()
        //ext.type('0000')
    }

    save() {
        let saveBtn = cy.get('.button.button--defaultSize.button--default.button--centered')
        saveBtn.click()
    }


}

export default SettingsAccount