class LanguageCurrency{
    changeLanguage(){
        let language = cy.get('#changeLocaleSelect')
        language.click()
        let select = cy.get('ul[class="menu"] > li:nth-child(2)')
        select.click()
    }

    changeCurrency(){
        let currency = cy.get('#currencySelect')
        currency.click()
        let selectt = cy.get('li[class="menu__item"]').eq(1)
        selectt.click({force:true})
    }
}

export default LanguageCurrency