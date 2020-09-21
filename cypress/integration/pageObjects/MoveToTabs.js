import Bulk from "./BulkUpddate"

class Move extends Bulk {

    selectCheckBox(){
        cy.wait(2000)
        let checkbox = cy.get('input.checkbox__input').eq(2)
        checkbox.check()
    }

    ignore(){
        let ignoreBtn = cy.get('button.button.button--defaultSize.button--positiveDark')
        ignoreBtn.click()
    }

    investigate(){
        let investigateBtn = cy.get('button.button.button--defaultSize.button--warningDark')
        investigateBtn.click()
    }

    report(){
        let reportBtn = cy.get('button.button.button--defaultSize.button--errorDark')
        reportBtn.click()
    }

    ignoreTab(){
        let ignoreTab = cy.get('div:nth-child(2) > div.actionBarItem__text')
        ignoreTab.click({force:true})
        
    }

    investigatingTab(){
        let investigatingTab = cy.get('div:nth-child(3) > div.actionBarItem__text')
        investigatingTab.click()
    }

    clientCheckTab(){
        let clientCheckTab = cy.get('div:nth-child(4) > div.actionBarItem__text')
        clientCheckTab.click()
    }

    reportedTab(){
        let reported = cy.get('div:nth-child(5) > div.actionBarItem__text')
        reported.click()
    }

    removedTab(){
        let removed = cy.get('div:nth-child(6) > div.actionBarItem__text')
        removed.click()
    }

    allListingsTab(){
        let allListings = cy.get('div:nth-child(7) > div.actionBarItem__text')
        allListings.click()
    }





}

export default Move