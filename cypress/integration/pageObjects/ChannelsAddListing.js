import Listing from "./ListingSingle"

class ChannelsAddListing extends Listing {
    selectClient() {
        let unit = cy.get('#selectUnit')
        unit.click()
    }

    selectParticularClient() {
        let particular = cy.get('li').contains('Demo Account')
        //cy.get('.menu>div>div>li:nth-child(5)')
        particular.click()
    }

    selectProject() {
        let project = cy.get('#selectProject')
        project.click()
        cy.wait(2000)
        
    }

    selectParticularProject() {
        let projectParticular = cy.get('li[class="menu__item menu__item--active"]')
        // cy.get('li').contains('bol test')
        //('.menu>li:nth-child(2)')
        projectParticular.click()
       
    }

    newListingAdd() {
        let addListing = cy.get('.topBar__iconImg.topBar__iconImg--newListing.topBar__iconImg--newListingFilled')
        addListing.click({ force: true })
        cy.wait(1000)

    }

    addPic() {

        let file = 'marcinek.jpg'
        cy.get('.dragAndDrop').attachFile(file,  { subjectType: 'drag-n-drop' })

    }

    typeUrl() {
        let url = cy.get('#newItemUrlurl')
        url.type('https://wp.pl')
    }

    selectMarketplace()
    {
        let marketplaces = cy.get('.newListing__searchableSelectContainer').eq(0)
        marketplaces.click()
        let select = cy.get('.menu__item').eq(0)
        select.click()
    }

    typeProductName()
    {
        let product = cy.get('#title')
        product.type('iphone')
    }

    typePrice()
    {
        let price = cy.get('input[id="salesDetails.price"]')
        price.type('20')
    }

    typeListingId()
    {
        let listingId = cy.get('#internalId')
        listingId.type('123')
    }

    selectPriceCurrency()
    {
        let currency = cy.get('.newListing__searchableSelectContainer').eq(1)
        currency.click()
        let select = cy.get('.menu__item:nth-child(1)')
        select.click()
    }

    selectSellerName()
    {
        let sellerName = cy.get('input[id="seller.username"]')
        sellerName.type('mamu')
    }

    save()
    {
       let saveBtn = cy.get('div[class="newListing__buttonsContainer"] > button:nth-child(1)')
       saveBtn.click()
    }

    close(){
        let closeBtn = cy.get('.filterBar__iconCloseContainer')
        closeBtn.click()
    }

    listView()
    {
        let listBtn = cy.get('div[class="toggle__secondIcon"]')
        listBtn.click()
    }

    gridView(){
        let gridBtn = cy.get('div[class="toggle__firstIcon"]')
        gridBtn.click()
    }


}
export default ChannelsAddListing