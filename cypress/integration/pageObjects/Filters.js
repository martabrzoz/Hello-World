class Filters {



    filter() {
        let filterBtn = cy.get('button.tooltip__button > div[class="topBar__icon topBar__icon--filter"]')
        filterBtn.click()
    }

    expandSeller() {
        let expandBtn = cy.get('.expandFilter__expandArrowContainer').eq(0)
        expandBtn.click()
    }

    pickLocation() {
        let location = cy.get('div').contains('Seller Location')
        location.click()
        let loc = cy.get('.listItem:nth-child(1)')
        loc.click()
        let apply = cy.get('button.button.button--smallSize.button--default.button--withDefaultMargin').eq(0)
        apply.click()
    }


    expandProduct() {
        let expandBtn = cy.get('.expandFilter__expandArrowContainer').eq(1)
        expandBtn.click()
    }

    pickItemCondition() {
        let condition = cy.get('div').contains('Item Condition')
        condition.click()
        let cond = cy.get('p.listItem__text').eq(0)
        cond.click()
        let apply = cy.get('button.button.button--smallSize.button--default.button--withDefaultMargin').eq(0)
        apply.click()

    }



    expandDate() {
        let expandBtn = cy.get('.expandFilter__expandArrowContainer').eq(2)
        expandBtn.click()

    }

    pickDdateCaptured() {
        let captured = cy.get('[id="Date Captured"]')
        captured.click()
        let startDate = cy.get('input[class="calendar__input"]').eq(0)
        //let timestamp = Date.now()
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth()
        const month2 = ('0' + (month + 1)).slice(-2)
        const day = today.getDate()
        startDate.type(year + '-' + month2 + '-' + (day - 1))
        let endDdate = cy.get('input[class="calendar__input"]').eq(1)
        endDdate.type(year + '-' + month2 + '-' + day)
        let apply = cy.get('button.button.button--smallSize.button--default.button--withDefaultMargin').eq(0)
        apply.click()
    }

    expandMarketplaces() {
        let expandBtn = cy.get('.expandFilter__expandArrowContainer').eq(3)
        expandBtn.click()
    }

    pickMarketplaces(){
        let marketplaces = cy.get('[id="Site"]')
        marketplaces.click()
        let market = cy.get('li[class="listItem"]')
        market.click()
        let apply = cy.get('button.button.button--smallSize.button--default.button--withDefaultMargin').eq(0)
        apply.click()
    }

    expandDetails() {
        let expandBtn = cy.get('.expandFilter__expandArrowContainer').eq(4)
        expandBtn.click()

    }

    pickRiskType(){
        let riskType = cy.get('[id="Risk Title"')
        riskType.click()
        let type = cy.get('li[class="listItem"]').eq(0)
        type.click()
        let apply = cy.get('button.button.button--smallSize.button--default.button--withDefaultMargin').eq(0)
        apply.click()
    }

    clearAll(){
        let clearBtn = cy.get('button[class="button button--defaultSize button--secondary"]')
        clearBtn.click()
    }
}

export default Filters