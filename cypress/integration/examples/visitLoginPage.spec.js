/// <reference types='cypress' />

describe('CustomSuite', function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it('Login Test', function(){
        cy.visit('https://staging-marketplace.ul2.net/login')
            .title().should('be.equal', 'Please log in... | EBRAND')
            .get('#username').type(this.data.adminEmail)
            .get('#password').type(this.data.adminPassword)
            .get('div.login__right > div > form > button').click()
            .title().should('be.equal', 'Dashboard | EBRAND')
            .get('.topMenu__hamburger').click()
            .get('a[name="name-2"]').click()
            .get('#selectUnit').click()
            .get('.menu>div>div>li:nth-child(5)').click()
            .get('#selectProject').click()
            .get('.menu>li:nth-child(1)').click()
            .get('.topBar__iconImg.topBar__iconImg--newListing.topBar__iconImg--newListingFilled').click() //add new listing
            .get('.filterBar__row>p').should('contain', 'Add New Listing')

        
            .get('#newItemUrlurl').type('htps:/wp.pl')
            //.get('.fieldError.fieldError--inputType').should('contain', 'URL is not valid')
            //.get('#newItemUrlurl').clear()
            //.get('.fieldError.fieldError--inputType').should('not.be.visible')
            cy.get('.newListing__searchableSelectContainer').eq(0).click()
        
            .get('.menu__item:nth-child(1)').click()
            .get('#title').type('MacBook')
            .get('p[class=dragAndDrop__text]').click()

            
        
        
        
        
        
    })

   // it('Logged in', function(){
        //cy.get('.topMenu__hamburger').click()

   // })
})