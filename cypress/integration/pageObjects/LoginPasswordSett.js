import SettingsAccount from "./AccountInfo"

class LoginPasswordSettings extends SettingsAccount{
/*
    addPassword(){
        let pass = document.getElementById('#newpassword')
        let passSecondd = document.getElementById('#verifypassword')
    
        if (pass = passSecondd){
    
            document.getElementsByClassName('.accountSettings__error').is(':visible')
        }
    }  */

    loginAndPassword(){
        let loginPassword = cy.get('.settingsBar__item.settingsBar__item--normalLink').eq(1)
        loginPassword.click()
    }

    oldPassword(){
        let password = cy.get('#oldpassword')
        password.type('Hello1234!')
    }

    newPassword(){
        let newPass = cy.get('#newpassword')
        newPass.type('Hello123!')
        let newPassSecond = cy.get('#verifypassword')
        newPassSecond.click({force:true})
        newPassSecond.type('Hello123!')
    }

    signOut(){
        let signOutBtn = cy.get('button[class="button button--defaultSize button--default"]')
        signOutBtn.click()
    }

}

export default LoginPasswordSettings