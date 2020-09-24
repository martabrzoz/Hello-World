class DashboardPage
{
    clickHamburgerMenu()
    {
        let hamburger = cy.get('.topMenu__hamburger')
        hamburger.click()
    }

    selectWebstores(){
        let webstores = cy.get('#item-1')
        webstores.click()
    }

    selectMarketplaces()
    {
        let channel = cy.get('a[name="name-2"]')
        channel.click()
    }

    selectSocialMedia(){
        let social = cy.get('#item-3')
        social.click()

    }

    selectWebsites(){
        let websites = cy.get('#item-4')
        websites.click()

    }

    selectAppStores(){
        let stores = cy.get('#item-5')
        stores.click()

    }



    
}

export default DashboardPage