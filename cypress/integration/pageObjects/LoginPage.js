

class LoginPage

{    
   // data(){
       // cy.fixture('example').then(function(data){
        //    this.data=data
      //  })

   // }
   // visit()
   // {
    //   cy.visit('https://staging-marketplace.ul2.net/login')
   // }

fillEmail(data){
    const field = cy.get('#username')
    field.type(data)
    return this
}

fillPassword(data)
{
    const field = cy.get('#password')
    field.type(data)
    return this
}

submit()
{
    const submitBtn = cy.get('.loginPage>form > button')
    submitBtn.click()
}

}

export default LoginPage