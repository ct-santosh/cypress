describe('testcases2',()=>{
    beforeEach(() => {
        // Clear cookies before each test
        cy.clearCookies();
      });
    it('Empty lastname',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Ms.')
    cy.get('#fname').type('swathi')
    cy.get('#lname').type(' ')
    cy.get(':nth-child(13) > .p-1 > .error-msg > .step-danger').should('exist')
    // cy.get('.p-1 > .btn').click({force:true})
     
})
it('Lastname mandatory validation check',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Ms.')
    // cy.get('#lname').type(' ')
    cy.get('.p-1 > .btn').click({force:true})
    cy.get(':nth-child(13) > .p-1 > .error-msg > .step-danger').should('exist')    
})
it('valid lastname and firstname',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Ms.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
    cy.get('.p-1 > .btn').click({force:true})
    cy.get(':nth-child(13) > .p-1 > .error-msg > .step-danger').should('not.exist')    
})
it('Customermobile mandatory validation check',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Ms.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
    cy.get('.p-1 > .btn').click({force:true})
    cy.get(':nth-child(14) > .p-1 > .error-msg > .step-danger').should('exist')

      
})
it('Customer mobile with alphabets',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Ms.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
    cy.get('.p-1 > #mobile').type('sadsadas')
    cy.get('.p-1 > .btn').click({force:true})         
})
it('mobileno. started with 0',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Ms.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
    cy.get('.p-1 > #mobile').type('0347874332')
    cy.get('.step-danger').should('exist')
    cy.get('.p-1 > .btn').click({force:true})         
})
it('9 digits mobile number',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Ms.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
    cy.get('.p-1 > #mobile').type('956565565')//9numbers
    cy.get('.step-danger').should('exist')
    cy.get('.p-1 > .btn').click({force:true})         
})
it('mobileno. start with 1',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Ms.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
    cy.get('.p-1 > #mobile').type('1565655650')//start with 1
    cy.get('.step-danger').should('exist')
    cy.get('.p-1 > .btn').click({force:true})         
})
it('mobileno. start with 2',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Ms.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
    cy.get('.p-1 > #mobile').type('2565655650')//start with 2
    cy.get('.step-danger').should('exist')
    cy.get('.p-1 > .btn').click({force:true})         
})
it('mobileno. start with 3',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Ms.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
    cy.get('.p-1 > #mobile').type('3565655650')//start with 3
    cy.get('.step-danger').should('exist')
    cy.get('.p-1 > .btn').click({force:true})         
})
it('mobileno. start with 4',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Ms.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
    cy.get('.p-1 > #mobile').type('465655650')//start with 4
    cy.get('.step-danger').should('exist')
    cy.get('.p-1 > .btn').click({force:true})         
})
})