import Move from "./MoveToTabs"

class Listing extends Move {
    expandArrow() {
        let arrow = cy.get('.productBox__arrowContainer.productBox__arrowContainer--right').eq(2)
        arrow.click()
    }

    price() {
        let priceField = cy.get('input[name="salesDetails.internalPrice"]')
        priceField.clear()
        priceField.type('8')
        cy.wait(1000)
    }

    confirm() {
        let confirm = cy.get('button[class="button button--defaultSize button--default button--iconOnly button--default"]')
        confirm.click()
        cy.wait(1000)
    }

    sellerTab(){
        let seller = cy.get('span').contains('Seller')
        seller.click()
    }

    logTab() {
       
        let log = cy.get('button[class="tabsContainer__tab"]').eq(1)
        log.click()
        cy.wait(1000)
    }

    comment() {
        let comm = cy.get('.textInput__input.textInput__input--multiline')
        comm.type('Cookies')
        cy.wait(1000)
        
    }

    addComment() {
        
        let add = cy.get('button').contains('Add')
        add.click({force:true})
       // cy.wait(2000)
    }

    docTab() {
        cy.wait(1000)
        let docs = cy.get('button[class="tabsContainer__tab"]').eq(2)
        docs.click()
    }

    uploadDoc(){
        let doc = 'ice.jpg'
        cy.get('div.dragAndDrop').attachFile(doc, {subjectType: 'drag-n-drop'})
        

    }
}

export default Listing