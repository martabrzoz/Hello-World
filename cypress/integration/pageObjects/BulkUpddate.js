class Bulk {

    bulkBtn() {
        let bulk = cy.get('.topBar__iconImg.topBar__iconImg--bulkUpdate').eq(1)
        bulk.click({ force: true })
    }

    clickRemovalReason() {
        let removal = cy.get('input[id="0[object Object]"')
        removal.click()
    }

    selectRemovalReason() {
        let reason = cy.get('li[class="menu__item"]:nth-child(2) > span')
        reason.click()
    }


    update() {
        let updateBtn = cy.get('div#app div:nth-child(1) > div > div.newListing__buttonsContainer > button.button.button--defaultSize.button--default')
        updateBtn.click()
    }

    confirm() {
        let updateUpdate = cy.get('div#portals button.button.button--defaultSize.button--warning')
        updateUpdate.click()
    }

    clikOnSeller() {
        let seller = cy.get('span[class="newListing__tabTitle"]').eq(1)
        seller.click()
    }

    clickOnDdocs(){
        let docs = cy.get('span[class="newListing__tabTitle"]').eq(2)
        docs.click()
    }

}

export default Bulk