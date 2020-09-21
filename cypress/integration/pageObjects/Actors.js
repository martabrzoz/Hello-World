import DashboardPage from "./DashboardPage"
class Actors extends DashboardPage {

    selectActors(){
        let actors = cy.get('#item-6')
        actors.click()
        
    }

    selectProject(){
        let project = cy.get('#selectProject')
        project.click()
        let demo = cy.get('li[class="menu__item"]').eq(2)
        demo.click()
        cy.wait(4000)
    }

    associateActors(){
        let checkbox = cy.get('input.checkbox__input').eq(2)
        checkbox.check()
        let checkboxS = cy.get('input.checkbox__input').eq(3)
        checkboxS.check()
        let associateBtn = cy.get('button.button.button--defaultSize.button--warning')
        associateBtn.click()
    }

    filter(){
        let icon = cy.get('button.tooltip__button > div.topBar__icon.topBar__icon--filter')
        icon.click()
    }

    continent(){
        let continent = cy.get('#Continent')
        continent.click()
        let pick = cy.get('p.listItem__text')
        pick.click()
        let apply = cy.get('button.button.button--smallSize.button--default.button--withDefaultMargin')
        apply.click()
    }

    platform(){
        let platform = cy.get('#Platform')
        platform.click()
        let pick = cy.get('p.listItem__text').eq(2)
        pick.click()
        let apply = cy.get('button.button.button--smallSize.button--default.button--withDefaultMargin')
        apply.click()

    }

    sellerUsername(){
        let userName = cy.get('[id="Seller Username"]')
        userName.click()
        let pick = cy.get('p.listItem__text').eq(1)
        pick.click()
        let apply = cy.get('button.button.button--smallSize.button--default.button--withDefaultMargin')
        apply.click()

    }

    removeFilter(){
        let trash = cy.get('button.tooltip__button > div.activeFilters__containerIcon').eq(1)
        trash.click()
    }

    editFilter(){
        let edit = cy.get('div.activeFilters__containerIcon').eq(0)
        edit.click()
    }

    removeChips(){
        let chips = cy.get('.chip__removeIconContainer')
        chips.click()
    }

    update(){
        let updateBtn = cy.get('button.button.button--smallSize.button--default.button--withDefaultMargin')
        updateBtn.click()
    }
}

export default Actors