
import LoginPage from '../pageObjects/LoginPage'
import DashboardPage from '../pageObjects/DashboardPage'
import ChannelsAddListing from '../pageObjects/ChannelsAddListing'
import Bulk from '../pageObjects/BulkUpddate'
import Move from '../pageObjects/MoveToTabs'
import Listing from '../pageObjects/ListingSingle'
import Filters from '../pageObjects/Filters'
import Actors from '../pageObjects/Actors'


describe('CustomSuite', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    before(function () {

        cy.visit('/')
        let loginOnPage = new LoginPage()
        cy.title().should('be.equal', 'Please log in... | EBRAND')
        loginOnPage.fillEmail(this.data.email)
        loginOnPage.fillPassword(this.data.password)
        loginOnPage.submit()
        cy.title().should('be.equal', 'Dashboard | EBRAND')
    })
    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    it('Dashboard', function () {
        let dashboard = new DashboardPage()
        dashboard.clickHamburgerMenu()
        dashboard.selectMarketplaces()
    })

    it('Marketplaces Add Listing', function () {
        let addNewListing = new ChannelsAddListing()
        //addNewListing.selectClient()
        //addNewListing.selectParticularClient()
        //addNewListing.selectProject()
        //addNewListing.selectParticularProject()

        addNewListing.newListingAdd()
        cy.get('.filterBar__row>p').should('contain', 'Add New Listing')
        addNewListing.addPic()
        addNewListing.typeUrl()
        addNewListing.selectMarketplace()
        addNewListing.typeProductName()
        addNewListing.typePrice()
        addNewListing.typeListingId()
        addNewListing.selectPriceCurrency()
        addNewListing.selectSellerName()
        addNewListing.save()
        addNewListing.listView()
        addNewListing.gridView()
        addNewListing.close()

    })


    it('Update listing', function () {

        let listing = new Listing()
        listing.expandArrow()
        cy.wait(2000)
        //listing.price()
        //listing.confirm()
        listing.sellerTab()
        listing.logTab()
        listing.comment()
        listing.addComment()
        listing.docTab()
        listing.uploadDoc()
        cy.wait(8000)


        //cy.get('div[class="filesList__iconContainer"]').eq(0).should('be.visible')

    })

    it('Update in bulk', function () {
        let bulk = new Bulk()
        bulk.bulkBtn()
        bulk.clickRemovalReason()
        bulk.selectRemovalReason()
        bulk.update()
        bulk.confirm()
        cy.wait(10000)
        bulk.clikOnSeller()
        bulk.clickOnDdocs()

    })

    it('Move item to another tab', function () {
        //cy.get('div[class="actionBarItem__text"]').eq(6).click()
        let move = new Move()
        move.selectCheckBox()
        move.ignore()
        move.selectCheckBox()
        move.investigate()
        move.selectCheckBox()
        move.report()
        move.ignoreTab()
        move.investigatingTab()
        move.clientCheckTab()
        move.reportedTab()
        move.removedTab()
        move.allListingsTab()

    })

    it('Filters items', function () {

        let filter = new Filters()
        filter.filter()
        filter.expandSeller()
        filter.pickLocation()
        filter.expandProduct()
        filter.pickItemCondition()
        filter.expandDate()
        filter.pickDdateCaptured()
        filter.expandMarketplaces()
        //filter.pickMarketplaces()
        filter.expandDetails()
        filter.pickRiskType()
        filter.clearAll()

    })


    it('Go to Actors', function () {
        let dash = new DashboardPage()
        dash.clickHamburgerMenu()
        let actors = new Actors()
        actors.selectActors()
        cy.wait(10000)
        actors.associateActors()
    })
})
