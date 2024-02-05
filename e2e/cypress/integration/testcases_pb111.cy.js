describe('testcasessplit',()=>{
    beforeEach(() => {
        // Clear cookies before each test
        cy.clearCookies();
      });
it('Make ktm model RC GP variant 390',()=>{
    // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
        cy.get('[style="position: relative;"] > #mobile').type('9999999996')
        cy.get('.login100-form-btn').click({force:true})
         cy.get('#otp').type('123456')
        cy.get('.submit_button').click({force:true})
        cy.wait(1000)  
        cy.get('#dealer_id').should('be.disabled')
        cy.get('#vehicle_type').should('be.disabled')
        cy.get('#make').select('KTM')
        cy.get('#model').select('RC GP')
        cy.get('#variant').select('390')
})
it('Make ktm model RC GP variant 200',()=>{
    // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
        cy.get('[style="position: relative;"] > #mobile').type('9999999996')
        cy.get('.login100-form-btn').click({force:true})
         cy.get('#otp').type('123456')
        cy.get('.submit_button').click({force:true})
        cy.wait(1000)  
        cy.get('#dealer_id').should('be.disabled')
        cy.get('#vehicle_type').should('be.disabled')
        cy.get('#make').select('KTM')
        cy.get('#model').select('RC GP')
        cy.get('#variant').select('200')
})
it('Make Husqvarna model Vitpilen variant 250',()=>{
    // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
        cy.get('[style="position: relative;"] > #mobile').type('9999999996')
        cy.get('.login100-form-btn').click({force:true})
         cy.get('#otp').type('123456')
        cy.get('.submit_button').click({force:true})
        cy.wait(1000)  
        cy.get('#dealer_id').should('be.disabled')
        cy.get('#vehicle_type').should('be.disabled')
        cy.get('#make').select('Husqvarna')
        cy.get('#model').select('Vitpilen')
        cy.get('#variant').select('250')
})
it('Make Husqvarna model Svartpilen variant 250',()=>{
    // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
        cy.get('[style="position: relative;"] > #mobile').type('9999999996')
        cy.get('.login100-form-btn').click({force:true})
         cy.get('#otp').type('123456')
        cy.get('.submit_button').click({force:true})
        cy.wait(1000)  
        cy.get('#dealer_id').should('be.disabled')
        cy.get('#vehicle_type').should('be.disabled')
        cy.get('#make').select('Husqvarna')
        cy.get('#model').select('Svartpilen')
        cy.get('#variant').select('250')
})
it('static values check for dealer,vehicle,make ',()=>{
    // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('9999999996')
    cy.get('.login100-form-btn').click({force:true})
    cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)  
    cy.get('#dealer_id').should('be.disabled').contains('Sai Service Pvt. Ltd.(12390)')
    cy.get('#vehicle_type').should('be.disabled').contains('Pro-Biking')
})
it('Without selecting make select model',()=>{
    // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('9999999996')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#make').should('exist')
    cy.get('#make').select('Select Make')
    cy.get('#model').select('ADV')
    cy.on("fail", (err, runnable) => {
        console.log(err.message);
        return false;
      });
})
it('Without selecting model select variant ',()=>{
    // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('9999999996')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Select Model')
    cy.get('#variant').select('390')
    cy.on("fail", (err, runnable) => {
        console.log(err.message);
        return false;
      });
})
it('emptymodel(mandatory validation check)',()=>{
    // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('9999999996')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Select Model')
    cy.get('.p-1 > .btn').click({force:true})
    cy.get(':nth-child(5) > .p-1 > .error-msg > .step-danger').should('exist')
})
it('selecting make KTM model adv and variant 390',()=>{
    // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('9999999996')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#make').should('exist')
    cy.get('#make').select('KTM')
    cy.get('#model').should('exist')
    cy.get('#model').select('ADV')
    cy.get('#variant').select('390')
})
it('selecting make Husqvarna mode vitpilen and variant 250',()=>{
    // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('9999999996')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#make').should('exist')
    cy.get('#make').select('Husqvarna')
    cy.get('#model').should('exist')
    cy.get('#model').select('Vitpilen')
    cy.get('#variant').select('250')
})   
it('selecting make KTM model adv and variant 390',()=>{
    // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('9999999996')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#make').should('exist')
    cy.get('#make').select('KTM')
    cy.get('#model').should('exist')
    cy.get('#model').select('ADV')
    cy.get('#variant').select('390')
})
it('emptyvariant(mandatory validation check)',()=>{
    // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('9999999996')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#make').should('exist')
    cy.get('#make').select('KTM')
    cy.get('#model').should('exist')
    cy.get('#model').select('ADV')
    cy.get('#variant').select('Select Variant')
    cy.get('.p-1 > .btn').click({force:true})
    cy.get(':nth-child(6) > .p-1 > .error-msg > .step-danger').should('exist')
})
})