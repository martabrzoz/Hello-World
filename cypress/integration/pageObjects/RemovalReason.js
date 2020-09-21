import DashboardPage from "./DashboardPage"

class RemovalReason extends DashboardPage {

    selectRemovalReason() {
        let removal = cy.get('#item-10')
        removal.click()
    }

    addGeneralReason()  {
        let generalBtn = cy.get('.removalReason__chip.removalReason__chip--big.removalReason__chip--marginRight')
        generalBtn.click()
    }

    addCategory(){
        let category = cy.get('#addNewGeneralRemovalReasonCategory')
        category.click()
    }

    copyright(){
        let copy = cy.get('li').contains('copyright')
        copy.click()
    }

    typeTitle(){
        let title = cy.get('#addNewGeneralRemovalReasonTitle')
        title.type('picture')
    }

    typeDdescription(text){
        let description = cy.get('#addNewGeneralRemovalReasonDescription').type(text)
        //description.type('Harry')
    }

    create(){
        let createBtn = cy.get('button').contains('Create')
        createBtn.click({force:true})
    }

  
}

export default RemovalReason
