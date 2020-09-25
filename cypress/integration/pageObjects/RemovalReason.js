
import DashboardPage from "./DashboardPage"

class RemovalReason extends DashboardPage {

    selectRemovalReason() {
        let removal = cy.get('#item-10')
        removal.click()
    }

    addGeneralReason() {
        let generalBtn = cy.get('.removalReason__chip.removalReason__chip--big.removalReason__chip--marginRight')
        generalBtn.click()
    }

    addCategory() {
        let category = cy.get('#addNewGeneralRemovalReasonCategory')
        category.click()
    }

    copyright() {
        let copy = cy.get('li').contains('copyright')
        copy.click()
    }

    typeTitle() {
        let title = cy.get('#addNewGeneralRemovalReasonTitle')
        //title.type('picture')
        let generateRandomString = function () {
            return Math.random().toString(20).substr(2, 6)
        }
        title.type('picture' + generateRandomString())

    }



    typeDdescription(text) {
        let description = cy.get('#addNewGeneralRemovalReasonDescription').type(text)
        //description.type('Harry')
    }

    create() {
        let createBtn = cy.get('button').contains('Create')
        createBtn.click({ force: true })
    }

    removeReason(){
        let trash = cy.get('div:nth-child(5) [class="removalReasonColumn__actionIconContainer removalReasonColumn__actionIconContainer--trash"]')
        //cy.get('div[class="removalReasonColumn__actionIconContainer removalReasonColumn__actionIconContainer--trash"]').eq(2)
        trash.click()
    }

    accept(){
        let acceptBtn = cy.get('button').contains('Accept')
        acceptBtn.click({force:true})
    }




}

export default RemovalReason
