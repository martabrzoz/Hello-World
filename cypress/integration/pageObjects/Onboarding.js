import DashboardPage from "./DashboardPage"


class Onboarding extends DashboardPage {

    selectOnboarding() {
        let onboarding = cy.get('#item-9')
        onboarding.click()
    }

    selectUnit() {
        let unit = cy.get('button.tabsContainer__tab').eq(0)
        unit.click()

    }

    editUnit() {
        cy.wait(1000)
        let existingUnit = cy.get('#existingUnitSelect')
        existingUnit.click()
        let unit = cy.get('li.menu__item').eq(1)
        unit.click()

        let expandArrow = cy.get('.css-kaqmzc-indicatorContainer:nth-of-type(2)')
        expandArrow.click()
        let adminSelect = cy.get('.css-1mqdtzi-option').eq(2)
        adminSelect.click()
        //let pickUnitAdmin = cy.get('.css-1k3sskr')
        //pickUnitAdmin.click()

        cy.focused().blur()
        let saveBtn = cy.get('button.button.button--defaultSize.button--default').eq(1)
        saveBtn.click()
        let unitAdminRemove = cy.get('.css-1k3sskr').eq(1)
        unitAdminRemove.click()
        let saveBtnn = cy.get('button.button.button--defaultSize.button--default').eq(1)
        saveBtnn.click()
    }

    addUnit() {
        let addBtn = cy.contains("Add")
        addBtn.click()
        let unitName = cy.get("#name")
        unitName.type('Porto')
        let unitAdminExpand = cy.get('div[class=" css-kaqmzc-indicatorContainer"]').eq(0)
        unitAdminExpand.click()
        let adminSelect = cy.get('.css-1mqdtzi-option').eq(2)
        adminSelect.click()
        cy.focused().blur()
        let saveBtn = cy.get('button.button.button--defaultSize.button--default').eq(1)
        saveBtn.click()

    }

    selectClient() {
        let client = cy.get('button.tabsContainer__tab').eq(1)
        client.click()
    }

    editClient() {
        let editBtn = cy.contains("Edit")
        editBtn.click()
        let existingUnit = cy.get('#existingUnitSelect')
        existingUnit.click({ force: true })
        let pickUnit = cy.get('li[class="menu__item"]').eq(1)
        pickUnit.click()
        cy.wait(1000)
        let existingClient = cy.get('#existingClientSelect')
        existingClient.click({ force: true })
        let pickClient = cy.get('li[class="menu__item"]').eq(1)
        pickClient.click()
        let country = cy.get('[id="addresses.addresses.business_country"]')
        country.clear()
        country.type('Spain')
        let address = cy.get('[id="addresses.addresses.business_address1"]')
        address.type('Madrid')
        let postalCode = cy.get('[id="addresses.addresses.business_postal_code"]')
        postalCode.clear()
        postalCode.type('00-100')
        let contactPerson = cy.get('[id="addresses.addresses.short_business_name"]')
        contactPerson.type('Celina')
        let phoneNr = cy.get('[id="addresses.addresses.business_phone"]')
        phoneNr.type('784221547')
        let email = cy.get('[id="addresses.addresses.business_primary_email"]')
        email.clear()
        email.type('emi@emi.com')
        let website = cy.get('[id="addresses.addresses.business_website"]')
        website.clear()
        website.type('https://emi.com')
        let copyDatacheck = cy.get('input[class="checkbox__input"]').eq(8)
        copyDatacheck.check()
        let saveBtn = cy.get('button.button.button--defaultSize.button--default').eq(1)
        saveBtn.click()
    }

    addClient() {
        let add = cy.contains("Add")
        //cy.get('button[class="multiButtons__button multiButtons__button--default"]')
        add.click()
        let selectUnit = cy.get('#existingUnitSelect')
        selectUnit.click()
        let pickUnit = cy.get('li[class="menu__item"]').eq(1)
        pickUnit.click()
        let clientName = cy.get('#name')
        clientName.type('Mama')
        let brand = cy.get('#brands')
        brand.type('iPhone')
        let address = cy.get('[id="addresses.addresses.business_address1"]')
        address.type('USA')
        let contactPerson = cy.get('[id="addresses.addresses.short_business_name"]')
        contactPerson.type('John')
        let phoneNumber = cy.get('[id="addresses.addresses.business_phone"]')
        phoneNumber.clear()
        phoneNumber.type('784551248')
        let email = cy.get('[id="addresses.addresses.business_primary_email"]')
        email.type('wp@wp.pl')
        let useMyProfDet = cy.get('input.checkbox__input').eq(0)
        useMyProfDet.click()
        let periodOfTime = cy.get('p').contains('1 year')
        periodOfTime.click()
        let noticePeriod = cy.get('#noticePeriodSelect')
        noticePeriod.click()
        let selectPeriod = cy.get('span').contains('1 month')
        selectPeriod.click()
        let saveBtn = cy.get('button.button.button--defaultSize.button--default').eq(1)
        saveBtn.click()


    }

    selectUser() {
        let user = cy.get('button.tabsContainer__tab').eq(2)
        user.click()
    }

    editUser() {
        //let editBtn = cy.contains("Edit")
        //editBtn.click()
        let existingUnit = cy.get('input[id="existingUnitSelect"]')
        existingUnit.click({ force: true })
        let unit = cy.get('li[class="menu__item"]').eq(1)
        unit.click()
        let existingClient = cy.get('input[id="existingClientSelect"')
        existingClient.click({ force: true })
        cy.wait(1000)
        let client = cy.get('li[class="menu__item"]').eq(2)
        client.click()
        let existingUser = cy.get('[id="existingUserSelect"]')
        existingUser.click({force:true})
        cy.wait(1000)
        let user = cy.get('li[class="menu__item"]').eq(0)
        user.click()
        let name = cy.get('#first_name')
        name.clear()
        name.type('Jamie')
        let extension = cy.get('#extension')
        extension.clear()
        extension.type('2')
        let saveBtn = cy.get('button.button.button--defaultSize.button--default').eq(1)
        saveBtn.click()
    }

    addUser() {
        let addBtn = cy.contains("Add")
        //get('button.multiButtons__button.multiButtons__button--default').eq(0)
        addBtn.click()
        let existingUnit = cy.get('input[id="existingUnitSelect"]')
        existingUnit.click({ force: true })
        let unit = cy.get('li[class="menu__item"]').eq(1)
        unit.click()
        cy.wait(1000)
        let existingClient = cy.get('input[id="existingClientSelect"')
        existingClient.click({ force: true })
        cy.wait(1000)
        let client = cy.get('li[class="menu__item"]:nth-child(3)')
        client.click({force:true})
        let firstName = cy.get('#first_name')
        firstName.type('Johny')
        let lastName = cy.get('#last_name')
        lastName.type('Movepick')
        let eMail = cy.get('#email')
        eMail.type('test@wp.pl' + 1)
        let saveBtn = cy.get('button.button.button--defaultSize.button--default').eq(1)
        saveBtn.click()

    }

}

export default Onboarding