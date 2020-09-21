class DashboardPage
{
    clickHamburgerMenu()
    {
        let hamburger = cy.get('.topMenu__hamburger')
        hamburger.click()
    }

    selectMarketplaces()
    {
        let channel = cy.get('a[name="name-2"]')
        channel.click()
    }

    
}

export default DashboardPage