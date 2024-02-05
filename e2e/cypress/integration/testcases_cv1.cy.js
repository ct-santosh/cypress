describe('bajaj',()=>{
    beforeEach(() => {
        // Clear cookies before each test
        cy.clearCookies();
      });
    it('unregisteredmobilenumber',()=>{
        cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
        cy.get('[style="position: relative;"] > #mobile').type('8999999998')
        cy.get('.login100-form-btn').click({force:true})
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('No Dealer Registered with given mobile number!');
         })

    })
    it('Mobilenumberstartedwith5(improperformat)',()=>{
        cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
        cy.get('[style="position: relative;"] > #mobile').type('5999999998')
        cy.get('.login100-form-btn').click({force:true})
        cy.get('.step-danger').should('exist')
    })
    it('emptymobilenumber',()=>{
        cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
        cy.get('[style="position: relative;"] > #mobile').type(' ')
        cy.get('.login100-form-btn').click({force:true})
        cy.get('.step-danger').should('exist')
        
    })
    it('Registeredmobilenumber',()=>{
        cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
        cy.get('[style="position: relative;"] > #mobile').type('7730066959')
        cy.get('.login100-form-btn').click({force:true})
    })
    it('Emptyotp',()=>{
        cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
        cy.get('[style="position: relative;"] > #mobile').type('7730066959')
        cy.get('.login100-form-btn').click({force:true})
         cy.get('#otp').type(' ')
        cy.get('.submit_button').click({force:true})
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('OTP Should not be Empty');
         })
        cy.wait(1000)
        cy.get('#model').should('not.exist')
    })
    it('otp with 3 numbers ',()=>{
        cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
        cy.get('[style="position: relative;"] > #mobile').type('7730066959')
        cy.get('.login100-form-btn').click({force:true})
         cy.get('#otp').type('123')
        cy.get('.submit_button').click({force:true})
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('Incorrect OTP');
         })
        cy.wait(1000)
        cy.get('#model').should('not.exist')
    })
    it('otp with 6numbers but incorrect otp',()=>{
        cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
        cy.get('[style="position: relative;"] > #mobile').type('7730066959')
        cy.get('.login100-form-btn').click({force:true})
         cy.get('#otp').type('121212')
        cy.get('.submit_button').click({force:true})
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('Invalid OTP');
         })
        cy.wait(1000)
        cy.get('#model').should('not.exist')
    })
    it('otp with 6 numbers but one number incorrect',()=>{
        cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
        cy.get('[style="position: relative;"] > #mobile').type('7730066959')
        cy.get('.login100-form-btn').click({force:true})
         cy.get('#otp').type('223456')
         cy.get('.submit_button').click({force:true})
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('Invalid OTP');
         })
        cy.wait(1000)
        cy.get('#model').should('not.exist')
    })

it('validotp',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist') 
})
it('disabled blocks check',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
        cy.get('[style="position: relative;"] > #mobile').type('7730066959')
        cy.get('.login100-form-btn').click({force:true})
         cy.get('#otp').type('123456')
        cy.get('.submit_button').click({force:true})
        cy.wait(1000)  
        cy.get('#dealer_id').should('be.disabled')
        cy.get('#vehicle_type').should('be.disabled')
        cy.get('#make').should('be.disabled')
})
it('static values check for dealer,vehicle,make ',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
    cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)  
    cy.get('#dealer_id').should('be.disabled').contains('GRAND MOTORS')
    cy.get('#vehicle_type').should('be.disabled').contains('Commercial Vehicle')
    cy.get('#make').should('be.disabled').contains('Bajaj')
        

})
it('Without selecting model select variant ',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Select Model')
    cy.get('#variant').select('LPG')
    cy.on("fail", (err, runnable) => {
        console.log(err.message);
        return false;
      });
})
it('emptymodel(mandatory validation check)',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Select Model')
    cy.get('.p-1 > .btn').click({force:true})
    cy.get(':nth-child(5) > .p-1 > .error-msg > .step-danger').should('exist')
})
it('selecting  model maximaxw and variant lpg',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima XW')
    cy.get('#variant').select('LPG')
    
})
   
it('selecting  model RE and variant Petrol',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('RE')
    cy.get('#variant').select('Petrol')
    
})
   
it('selecting  model Cargo and variant Diesel',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Cargo')
    cy.get('#variant').select('DIESEL')
    
})
   
it('selecting  model maximaz and variant CNG',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('CNG')
    
})
   
it('Without selecting variant try to enter onroadprice ',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('Select Variant')
    cy.get('#on_road_price').type('300000')
    cy.on("fail", (err, runnable) => {
        console.log(err.message);
        return false;
      });
    })
it('emptyvariant(mandatory validation check)',()=>{
    cy.visit('https://php8-bajaj-loan.cartradeexchange.com/')
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('Select Variant')
    cy.get('#on_road_price').type('300000')
    cy.get('.p-1 > .btn').click({force:true})
    cy.get(':nth-child(6) > .p-1 > .error-msg > .step-danger').should('exist')

})


})


   
