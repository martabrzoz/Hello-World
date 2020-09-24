
import LoginPage from '../pageObjects/LoginPage'
import DashboardPage from '../pageObjects/DashboardPage'
import ChannelsAddListing from '../pageObjects/ChannelsAddListing'
import Bulk from '../pageObjects/BulkUpddate'
import Move from '../pageObjects/MoveToTabs'
import Listing from '../pageObjects/ListingSingle'
import Filters from '../pageObjects/Filters'
import Onboarding from '../pageObjects/Onboarding'
import Diagnostic from '../pageObjects/DiagnosticTool'
import Actors from '../pageObjects/Actors'
import RemovalReason from '../pageObjects/RemovalReason'
import Translations from '../pageObjects/TranslationsEdit'



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
        loginOnPage.fillEmail(this.data.adminEmail)
        loginOnPage.fillPassword(this.data.adminPassword)
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
        let translate = new Translations()
        translate.editTranslations()
        translate.updateBtn()
        //translate.dashboardLabel()
        //translate.save()
        translate.typeDash('Dashboards')
        translate.save()
        translate.typeDash('Dashboards'.slice(0, -1))
        translate.save()

        translate.unclickEditTrans()
        let dashboard = new DashboardPage()
        dashboard.clickHamburgerMenu()
        //dashboard.selectAppStores()
        //dashboard.selectWebstores()
        dashboard.selectMarketplaces()
    })

    it('Marketplaces Add Listing', function () {
        let addNewListing = new ChannelsAddListing()
        addNewListing.selectClient()
        addNewListing.selectParticularClient()
        addNewListing.selectProject()
        addNewListing.selectParticularProject()
        cy.wait(1000)

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
        cy.wait(2000)
        addNewListing.save()
        addNewListing.listView()
        addNewListing.gridView()

    })


    it('Update listing', function () {

        //cy.get('div').contains('Ignore').click()

        let listing = new Listing()
        listing.expandArrow()
        cy.wait(2000)
        //listing.price()
        //listing.confirm()
        listing.logTab()
        listing.comment()
        listing.addComment()

        //listing.addComment()
        listing.docTab()
        listing.uploadDoc()
        cy.get('div[class="filesList__iconContainer"]').eq(0).should('be.visible')

    })

    it('Update in bulk', function () {
        let move = new Move()
        move.clientCheckTab()
        //cy.get('div').contains('Client Check').click()
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
        
        cy.get('div.removalReasonModal__removeContainer').click({ force: true })
        cy.waitFor(1000)
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
        filter.pickMarketplaces()
        filter.expandDetails()
        filter.pickRiskType()
        filter.clearAll()

    })


    it('Go to Actors', function () {
        let dash = new DashboardPage()
        dash.clickHamburgerMenu()
        let actors = new Actors()
        actors.selectActors()
        actors.selectProject()
        actors.associateActors()
        actors.filter()
        actors.continent()
        actors.platform()
        actors.sellerUsername()
        actors.removeFilter()
        actors.editFilter()
        actors.removeChips()
        actors.update()
    })


    it('Go to Diagnostic Tool', function () {

        let dash = new DashboardPage()
        dash.clickHamburgerMenu()
        let diagnostic = new Diagnostic()
        diagnostic.selectDiagnosticTool()
        diagnostic.generateReport()
        diagnostic.typeProjectName()
        diagnostic.typeProductName()
        diagnostic.addSearchString()
        diagnostic.chooseRegions()
        diagnostic.chooseCountries()
        diagnostic.chooseMarketplaces()
        diagnostic.createReport()
        cy.get('a[class="diagnosticToolReports__buttonContainer"]').should('contain', 'Generate new diagnostic report')

    })

    it('Go to Onboarding', function () {

        let dash = new DashboardPage()
        dash.clickHamburgerMenu()
        let onbaording = new Onboarding()
        onbaording.selectOnboarding()
        onbaording.editUnit()
        onbaording.addUnit()
        onbaording.selectClient()
        onbaording.editClient()
        onbaording.addClient()
        onbaording.selectUser()
        onbaording.editUser()
        onbaording.addUser()
    })

    it.only('Go to Removal Reason', function () {
        let dash = new DashboardPage()
        dash.clickHamburgerMenu()
        let removal = new RemovalReason()
        removal.selectRemovalReason()
        removal.addGeneralReason()
        removal.addCategory()
        removal.copyright()
        removal.typeTitle()
        removal.typeDdescription("Harry Megan")
        removal.create()
        cy.get('div[class="removalReasonColumn__actionIconContainer removalReasonColumn__actionIconContainer--move"]').eq(3).trigger('dragstart')
        cy.get('div[class="removalReasonColumn__actionIconContainer removalReasonColumn__actionIconContainer--move"]').eq(4).trigger('drop')
        //.drag('.removalReason__dustbinContainer', move({ x: 100, y: 100 }) )

        /* var MyDataTransfer = function () { };
         var dt = new MyDataTransfer();
         dt.types = [];
         let tab = cy.get('div[class="removalReasonBox__actionIconContainer removalReasonBox__actionIconContainer--move"]').eq(2).trigger("dragstart",{force:true}, { dataTransfer: dt })
 
         //tab.trigger("dragstart", { force: true })
         let table = cy.get('.removalReason__dustbinContainer').eq(3).trigger("drop",{force:true}, {dataTransfer:dt})
         //tab.trigger("drop", { force: true })
 
 
 const dataTransfer = new DataTransfer();
 cy.get('.shapes-parent-category')
     .click()
     .get('div[class="removalReasonBox__actionIconContainer removalReasonBox__actionIconContainer--move"]').eq(2)
     .trigger('mousedown')
     .trigger('dragstart', {
         dataTransfer: dataTransfer,
     })
     cy.get('.removalReason__dustbinContainer').eq(3).
     .trigger('dragenter', { dataTransfer: dataTransfer })
     .trigger('dragover', { dataTransfer: dataTransfer })
     .trigger('drop', { dataTransfer: dataTransfer });
 })
 */

    })
})



