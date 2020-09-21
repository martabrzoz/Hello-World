import DashboardPage from "./DashboardPage"

class Translations extends DashboardPage {

    editTranslations() {
        let editBtn = cy.get('.tooltip__button > div[class="topMenu__moderation"]')
        editBtn.click()
    }

    updateBtn() {
        let btn = cy.get('div[class="languageProvider__tooltipContainer"] > div').eq(0)
        btn.click({ force: true })
    }

    dashboardLabel() {
        let dash = cy.get('#Dashboard')
        dash.type('s') 
    }

    save() {
        let savee = cy.get('button.button.button--smallSize.button--default')
        savee.click()
        
    }

    closeBtn(){
        let btn = cy.get('[class="languageProvider__iconCloseContainer"')
        btn.click()
    }

    typeDash(str){
        let dash = cy.get('#Dashboard')
        dash.clear()
        var str
        dash.type(str)
        //let savee = cy.get('button.button.button--smallSize.button--default')
        //savee.click()
      // dash.type(str.slice(0,-1))

        //str = str.substring(2, str.length-1)
        //console.log(str)
    }

    removeLastCharacter(){

    }

    unclickEditTrans(){
        let editBtn = cy.get('[class="topMenu__moderationIcon topMenu__moderationIcon--translation"]')
        editBtn.click()
    }

    




        //then(elem => {
        // elem is the underlying Javascript object targeted by the .get() command.
        //const xyz = Cypress.$(elem).val()
        //xyz.slice(0,-1)

        //        if (textBox1.TextLength > 0) {
        //          textBox1.Text = textBox1.Text.Substring(0, (textBox1.TextLength - 1))

    }


export default Translations