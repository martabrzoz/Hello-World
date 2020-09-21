import DashboardPage from "./DashboardPage"

class Diagnostic extends DashboardPage {

    selectDiagnosticTool() {
        let diagnostic = cy.get('#item-7')
        diagnostic.click()
    }

    generateReport() {
        let generate = cy.get('a[class="diagnosticToolReports__buttonContainer"]')
        generate.click()
    }

    typeProjectName() {
        let project = cy.get('#companyName')
        project.type('Peanut Butter')
    }

    typeProductName() {
        let product = cy.get('#productName')
        product.type('jar')
    }

    addSearchString() {
        let string = cy.get('#addSearchString')
        string.type('nuts')
        let expandTranslations = cy.get('.css-kaqmzc-indicatorContainer').eq(0)
        expandTranslations.click()
        let transaltion = cy.get('.css-1mqdtzi-option').eq(2)
        transaltion.click()
        let add = cy.get('.button.button--defaultSize.button--default').eq(2)
        add.click()
    }

    chooseRegions(){
        let regionPick = cy.get('.css-1hwfws3').eq(1)
        regionPick.click()
        let region = cy.get('.css-1mqdtzi-option').eq(2)
        region.click()
        cy.focused().blur()
    }

    chooseCountries(){
        let countryPick = cy.get('.css-1hwfws3').eq(2)
        countryPick.click()
        let country = cy.get('.css-1mqdtzi-option').eq(2)
        country.click()
        cy.focused().blur()
    }

    chooseMarketplaces(){
        let marketPick = cy.get('.css-1hwfws3').eq(3)
        marketPick.click()
        let marketplace = cy.get('.css-1mqdtzi-option').eq(2)
        marketplace.click()
        cy.focused().blur()
    }

    createReport(){
        let createBtn = cy.get('button[class="button button--defaultSize button--default"]').eq(4)
        createBtn.click()
    }


}

export default Diagnostic