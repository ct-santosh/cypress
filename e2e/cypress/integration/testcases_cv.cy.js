describe('bajaj',()=>{
    
    it('unregisteredmobilenumber',()=>{
        cy.visit("https://stage_bajajloan.cartradeexchange.com/")
        cy.get('[style="position: relative;"] > #mobile').type('8999999998')
        cy.get('.login100-form-btn').click({force:true})
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('No Dealer Registered with given mobile number!');
         })

    })
    it('Mobilenumberstartedwith5(improperformat)',()=>{
        cy.visit("https://stage_bajajloan.cartradeexchange.com/")
        cy.get('[style="position: relative;"] > #mobile').type('5999999998')
        cy.get('.login100-form-btn').click({force:true})
        cy.get('.step-danger').should('exist')
    })
    it('emptymobilenumber',()=>{
        cy.visit("https://stage_bajajloan.cartradeexchange.com/")
        cy.get('[style="position: relative;"] > #mobile').type(' ')
        cy.get('.login100-form-btn').click({force:true})
        cy.get('.step-danger').should('exist')
        
    })
    it('Registeredmobilenumber',()=>{
        cy.visit("https://stage_bajajloan.cartradeexchange.com/")
        cy.get('[style="position: relative;"] > #mobile').type('7730066959')
        cy.get('.login100-form-btn').click({force:true})
    })
    it('Emptyotp',()=>{
        cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
        cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
        cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
        cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist') 
})
it('disabled blocks check',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
it('valid variant',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    
    cy.get('.p-1 > .btn').click({force:true})
    

})
it('valid variant with invalid onroadprice',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300')
    cy.get(':nth-child(8) > .p-1 > .error-msg > .step-danger').should('exist')
    cy.get('.p-1 > .btn').click({force:true})

})
it('Onroadprice mandatory validation check',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    // cy.get('#on_road_price').type(' ')
    cy.get('#title').select('Mr.')
    cy.get('.p-1 > .btn').click({force:true})
    cy.get(':nth-child(8) > .p-1 > .error-msg > .step-danger').should('exist')

})
it('invalidonroadprice',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
     cy.get('#on_road_price').type('253164')
     cy.get(':nth-child(8) > .p-1 > .error-msg > .step-danger').should('exist')
    cy.get('#title').select('Mr.')
    cy.get('.p-1 > .btn').click({force:true})
    

})
it('valid onroad price (should not show anyvalidation)',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('290000')
    cy.get('.p-1 > .btn').click({force:true})
    cy.get(':nth-child(8) > .p-1 > .error-msg > .step-danger').should('not.exist')
})
it('selectPrefix field validation',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Select Prefix')
    cy.get('.p-1 > .btn').click({force:true})
    cy.get(':nth-child(10) > .p-1 > .error-msg > .step-danger').should('exist')
})
it('Prefix mandatory validation check',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    cy.get('#model').should('exist')
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    // cy.get('#title').select('Select Prefix')
    cy.get('.p-1 > .btn').click({force:true})
    cy.get(':nth-child(10) > .p-1 > .error-msg > .step-danger').should('exist') 
})
it('validPrefix(should not show any validation)',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.get('.p-1 > .btn').click({force:true})
    cy.get(':nth-child(10) > .p-1 > .error-msg > .step-danger').should('not.exist')  
})
it('Firstname with alphanumeric characters',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.get('#fname').type('sdd33')
    cy.get(':nth-child(11) > .p-1 > .error-msg > .step-danger').should('exist')
    // cy.get('.p-1 > .btn').click({force:true})
     
})
it('Firstname with numeric values',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.get('#fname').type('02255')
    cy.get(':nth-child(11) > .p-1 > .error-msg > .step-danger').should('exist')
    // cy.get('.p-1 > .btn').click({force:true})
     
})
it('Empty firstname',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.get('#fname').type(' ')
    cy.get(':nth-child(11) > .p-1 > .error-msg > .step-danger').should('exist')
    // cy.get('.p-1 > .btn').click({force:true})
     
})
it('Firstname(mandatory validation check)',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    // cy.get('#fname').type(' ')
    cy.get('.p-1 > .btn').click({force:true})
    cy.get(':nth-child(11) > .p-1 > .error-msg > .step-danger').should('exist')    
})
it('valid firstname(should not show any validation)',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.get('.p-1 > .btn').click({force:true})
    cy.get(':nth-child(11) > .p-1 > .error-msg > .step-danger').should('not.exist')    
})

it('Lastname with alphanumeric values',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.get('#lname').type('ddd44')
    cy.get(':nth-child(13) > .p-1 > .error-msg > .step-danger').should('exist')
    // cy.get('.p-1 > .btn').click({force:true})
     
})
it('Lastname with numeric values',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.get('#lname').type('02255')
    cy.get(':nth-child(13) > .p-1 > .error-msg > .step-danger').should('exist')
    // cy.get('.p-1 > .btn').click({force:true})
     
})
it('Empty lastname',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
it('mobileno. start with 5',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.get('.p-1 > #mobile').type('5565655650')//start with 5
    cy.get('.step-danger').should('exist')
    cy.get('.p-1 > .btn').click({force:true})         
})
it('mobileno. start with 6',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.get('.p-1 > #mobile').type('6565655650')//start with 6
    cy.get('.step-danger').should('not.exist')
    cy.get('.p-1 > .btn').click({force:true})         
})
it('mobileno. start with 7',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.get('.p-1 > #mobile').type('7565655650')//start with 7
    cy.get('.step-danger').should('not.exist')
    cy.get('.p-1 > .btn').click({force:true})         
})
it('mobileno. start with 8',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.get('.p-1 > #mobile').type('8565655650')//start with 8
    cy.get('.step-danger').should('not.exist')
    cy.get('.p-1 > .btn').click({force:true})         
})
it('mobileno. start with 9',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.get('.p-1 > #mobile').type('9565655650')//start with 9
    cy.get('.step-danger').should('not.exist')
    cy.get('.p-1 > .btn').click({force:true})   

})
it('empty otpverification',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.get('.p-1 > #mobile').type('9565655650')
    cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type(' ')
    cy.get('#verify_otp').click({force:true})
    cy.get('.step-danger').should('exist')
       

})
it('otp with alphabets',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.get('.p-1 > #mobile').type('9565655650')
    cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('rryy')
    cy.get('#verify_otp').click({force:true})
    cy.get('.step-danger').should('exist')
       

})
it('otp with less numbers(3)',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.get('.p-1 > #mobile').type('9565655650')
    cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('123')
    
    cy.get('.step-danger').should('exist')
    cy.get('#verify_otp').click({force:true})
       

})
it('otp with 1 incorrect number',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.get('.p-1 > #mobile').type('9565655650')
    cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1230')
    cy.get('#verify_otp').click({force:true})
    cy.get('.step-danger').should('exist')

       

})
it('valid otp(should not show any validation)',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
    cy.get('.p-1 > #mobile').type('9565655650')
    cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1234')
    
    cy.get('.step-danger').should('not.exist')
    cy.get('#verify_otp').click({force:true})
       

})


it('aadhar radio buttons check(yes)',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
cy.get('.p-1 > #mobile').type('8')
        // cy.get('#mobile').type('8')
        cy.get('.p-1 > #mobile').type(userID_Alpha())
        function userID_Alpha() {
            var text = "";
            var possible = "1234567890";

            for (var i = 0; i < 9; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
        cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1234')
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-25 > #valid_aadhar').click({force:true})
       

})
it('aadhar radio buttons check(no)',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
cy.get('.p-1 > #mobile').type('8')
        // cy.get('#mobile').type('8')
        cy.get('.p-1 > #mobile').type(userID_Alpha())
        function userID_Alpha() {
            var text = "";
            var possible = "1234567890";

            for (var i = 0; i < 9; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
        cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1234')
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-50 > #valid_aadhar').click({force:true})
       

})
it('aadhar mandatory validation check',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
cy.get('.p-1 > #mobile').type('8')
       // // cy.get('#mobile').type('8')
        cy.get('.p-1 > #mobile').type(userID_Alpha())
        function userID_Alpha() {
            var text = "";
            var possible = "1234567890";

            for (var i = 0; i < 9; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
        cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1234')
 
    cy.get('#verify_otp').click({force:true})
    // cy.get('.w-50 > #valid_aadhar').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    cy.get(':nth-child(8) > .p-1 > .error-msg > .step-danger').should('exist')
       

})
it('Pan radio button check(yes)',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
   cy.get('.p-1 > #mobile').type('8')
        cy.get('.p-1 > #mobile').type(userID_Alpha())
        function userID_Alpha() {
            var text = "";
            var possible = "1234567890";

            for (var i = 0; i < 9; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
        cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1234')
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-50 > #valid_aadhar').click({force:true})
    cy.get('.w-25 > #valid_pan').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    
       

})
it('Pan radio button check(no)',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
cy.get('.p-1 > #mobile').type('8')
    
  cy.get('.p-1 > #mobile').type(userID_Alpha())
  function userID_Alpha() {
      var text = "";
      var possible = "1234567890";

      for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
}
cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1234')
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-50 > #valid_aadhar').click({force:true})
    cy.get('.w-50 > #valid_pan').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    
       

})
it('pan mandatory validation check',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Mr.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
  cy.get('.p-1 > #mobile').type(userID_Alpha())
  function userID_Alpha() {
      var text = "";
      var possible = "1234567890";

      for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
}
cy.get('.p-1 > .btn').click({force:true})

    cy.get('#otp').type('1234')
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-50 > #valid_aadhar').click({force:true})
    // cy.get('.w-25 > #valid_pan')
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    cy.get(':nth-child(9) > .p-1 > .error-msg > .step-danger').should('exist')
  
})
it('Valid pan',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
     cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Mr.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
  cy.get('.p-1 > #mobile').type(userID_Alpha())
  function userID_Alpha() {
      var text = "";
      var possible = "1234567890";

      for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
}
cy.get('.p-1 > .btn').click({force:true})

    cy.get('#otp').type('1234')
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-50 > #valid_aadhar').click({force:true})
    cy.get('.w-25 > #valid_pan').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    
    cy.get('#pan').type('asdpf4444d')

})
it('Invalid pan',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
    cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Mr.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
  cy.get('.p-1 > #mobile').type(userID_Alpha())
  function userID_Alpha() {
      var text = "";
      var possible = "1234567890";

      for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
}
cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1234')
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-50 > #valid_aadhar').click({force:true})
    cy.get('.w-25 > #valid_pan').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    
    cy.get('#pan').type('asd56564444d')
    cy.get(':nth-child(10) > .p-1 > .error-msg > .step-danger').should('exist')

})
it('Dob with min. age',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
    cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Mr.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
  cy.get('.p-1 > #mobile').type(userID_Alpha())
  function userID_Alpha() {
      var text = "";
      var possible = "1234567890";

      for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
}
cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1234')
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-50 > #valid_aadhar').click({force:true})
    cy.get('.w-25 > #valid_pan').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    
    cy.get('#pan').type('asdpj6666h')
    const currentDate = new Date();

        // Set the desired date components
        const year = 2001;
        const month = 8; // Months are 0-indexed, so August is 7
        const day = 21;

        // Set the Date object to the desired date
        currentDate.setFullYear(year);
        currentDate.setMonth(month);
        currentDate.setDate(day);
        cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});

    

})
it('Dob with max.age',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
    cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Mr.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
  cy.get('.p-1 > #mobile').type(userID_Alpha())
  function userID_Alpha() {
      var text = "";
      var possible = "1234567890";

      for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
}
cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1234')
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-50 > #valid_aadhar').click({force:true})
    cy.get('.w-25 > #valid_pan').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    
    cy.get('#pan').type('asdpj6666h')
    const currentDate = new Date();

        // Set the desired date components
        const year = 1966;
        const month = 8; // Months are 0-indexed, so August is 7
        const day = 21;

        // Set the Date object to the desired date
        currentDate.setFullYear(year);
        currentDate.setMonth(month);
        currentDate.setDate(day);
        cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});

})
it('Dob mandatory validation check',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
    cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Mr.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
  cy.get('.p-1 > #mobile').type(userID_Alpha())
  function userID_Alpha() {
      var text = "";
      var possible = "1234567890";

      for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
}
cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1234')
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-50 > #valid_aadhar').click({force:true})
    cy.get('.w-25 > #valid_pan').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    
    cy.get('#pan').type('asdpj6666h')
    // const currentDate = new Date();

    //     // Set the desired date components
    //     const year = 1966;
    //     const month = 8; // Months are 0-indexed, so August is 7
    //     const day = 21;

    //     // Set the Date object to the desired date
    //     currentDate.setFullYear(year);
    //     currentDate.setMonth(month);
    //     currentDate.setDate(day);
    //     cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    cy.get('#dob_error').should('exist')
})
it('maritalstatus radiobutton check(single)',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
    cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Mr.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
  cy.get('.p-1 > #mobile').type(userID_Alpha())
  function userID_Alpha() {
      var text = "";
      var possible = "1234567890";

      for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
}
cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1234')
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-50 > #valid_aadhar').click({force:true})
    cy.get('.w-25 > #valid_pan').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    
    cy.get('#pan').type('asdpj6666h')
    const currentDate = new Date();

        // Set the desired date components
        const year = 1966;
        const month = 8; // Months are 0-indexed, so August is 7
        const day = 21;

        // Set the Date object to the desired date
        currentDate.setFullYear(year);
        currentDate.setMonth(month);
        currentDate.setDate(day);
    cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
    cy.get('.w-25 > #m_status').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    cy.get(':nth-child(15) > .p-1 > .error-msg > .step-danger').should('not.exist')

})
it('maritalstatus radiobutton check(married)',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
    cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Mr.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
  cy.get('.p-1 > #mobile').type(userID_Alpha())
  function userID_Alpha() {
      var text = "";
      var possible = "1234567890";

      for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
}
cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1234')
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-50 > #valid_aadhar').click({force:true})
    cy.get('.w-25 > #valid_pan').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    
    cy.get('#pan').type('asdpj6666h')
    const currentDate = new Date();

        // Set the desired date components
        const year = 1966;
        const month = 8; // Months are 0-indexed, so August is 7
        const day = 21;

        // Set the Date object to the desired date
        currentDate.setFullYear(year);
        currentDate.setMonth(month);
        currentDate.setDate(day);
    cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
    cy.get('.w-50 > #m_status').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    cy.get(':nth-child(15) > .p-1 > .error-msg > .step-danger').should('not.exist')

})
it('maritalstatus mandatory validation check',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
    cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Mr.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
  cy.get('.p-1 > #mobile').type(userID_Alpha())
  function userID_Alpha() {
      var text = "";
      var possible = "1234567890";

      for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
}
cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1234')
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-50 > #valid_aadhar').click({force:true})
    cy.get('.w-25 > #valid_pan').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    
    cy.get('#pan').type('asdpj6666h')
    const currentDate = new Date();

        // Set the desired date components
        const year = 1966;
        const month = 8; // Months are 0-indexed, so August is 7
        const day = 21;

        // Set the Date object to the desired date
        currentDate.setFullYear(year);
        currentDate.setMonth(month);
        currentDate.setDate(day);
    cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
   // cy.get('.w-50 > #m_status').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    cy.get(':nth-child(15) > .p-1 > .error-msg > .step-danger').should('exist')

})
it('idproof (when no aadhar)mandatory validation check',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
    cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Mr.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
  cy.get('.p-1 > #mobile').type(userID_Alpha())
  function userID_Alpha() {
      var text = "";
      var possible = "1234567890";

      for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
}
cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1234')
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-50 > #valid_aadhar').click({force:true})
    cy.get('.w-25 > #valid_pan').click({force:true})
    cy.wait(1000)
    
    
    cy.get('#pan').type('asdpj6666h',{force:true})
    const currentDate = new Date();

        // Set the desired date components
        const year = 1966;
        const month = 8; // Months are 0-indexed, so August is 7
        const day = 21;

        // Set the Date object to the desired date
        currentDate.setFullYear(year);
        currentDate.setMonth(month);
        currentDate.setDate(day);
    cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
   cy.get('.w-50 > #m_status').click({force:true})

   cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
  cy.get('.step-danger').should('exist')
})
it('residential details validation check',()=>{
  cy.visit("https://stage_bajajloan.cartradeexchange.com/")
  cy.get('[style="position: relative;"] > #mobile').type('7730066959')
  cy.get('.login100-form-btn').click({force:true})
  cy.get('#otp').type('123456')
  cy.get('.submit_button').click({force:true})
  cy.wait(1000)
  
  cy.get('#model').select('Maxima Z')
  cy.get('#variant').select('LPG')
  cy.get('#on_road_price').type('300000')
  cy.get('#title').select('Mr.')
  cy.get('#fname').type('pav')
  cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
  cy.get('.p-1 > #mobile').type(userID_Alpha())
  function userID_Alpha() {
      var text = "";
      var possible = "1234567890";

      for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
}
cy.get('.p-1 > .btn').click({force:true})
  cy.get('#otp').type('1234')

  cy.get('#verify_otp').click({force:true})
  cy.get('.w-25 > #valid_aadhar').click({force:true})
  cy.get('.w-25 > #valid_pan').click({force:true})
  cy.wait(1000)
  
  
  cy.get('#pan').type('asdpj6666h',{force:true})
  const currentDate = new Date();

      // Set the desired date components
      const year = 1966;
      const month = 8; // Months are 0-indexed, so August is 7
      const day = 21;

      // Set the Date object to the desired date
      currentDate.setFullYear(year);
      currentDate.setMonth(month);
      currentDate.setDate(day);
  cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
 cy.get('.w-50 > #m_status').click({force:true})

 cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').type('{selectall}{backspace}')
cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Self-Owned',{force:true})
cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').clear(' ',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').clear(' ',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').clear(' ')
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').clear(' ',{force:true})
 cy.get('#current_since').clear(' ',{force:true})
cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
cy.get(':nth-child(2) > .p-1 > .error-msg > .step-danger').should('exist')
cy.get(':nth-child(3) > .p-1 > .error-msg > .step-danger').should('exist')
cy.get(':nth-child(4) > .p-1 > .error-msg > .step-danger').should('exist')
cy.get(':nth-child(5) > .p-1 > .error-msg > .step-danger').should('exist')
//cy.get('#current_since_error').should('exist')//error 
})
it('Valid residential details(should not show any validation )',()=>{
  cy.visit("https://stage_bajajloan.cartradeexchange.com/")
  cy.get('[style="position: relative;"] > #mobile').type('7730066959')
  cy.get('.login100-form-btn').click({force:true})
  cy.get('#otp').type('123456')
  cy.get('.submit_button').click({force:true})
  cy.wait(1000)
  
  cy.get('#model').select('Maxima Z')
  cy.get('#variant').select('LPG')
  cy.get('#on_road_price').type('300000')
  cy.get('#title').select('Mr.')
  cy.get('#fname').type('pav')
  cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
  cy.get('.p-1 > #mobile').type(userID_Alpha())
  function userID_Alpha() {
      var text = "";
      var possible = "1234567890";

      for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
}
cy.get('.p-1 > .btn').click({force:true})
  cy.get('#otp').type('1234')

  cy.get('#verify_otp').click({force:true})
  cy.get('.w-25 > #valid_aadhar').click({force:true})
  cy.get('.w-25 > #valid_pan').click({force:true})
  cy.wait(1000)
  
  
  cy.get('#pan').type('asdpj6666h',{force:true})
  const currentDate = new Date();

      // Set the desired date components
      const year = 1966;
      const month = 8; // Months are 0-indexed, so August is 7
      const day = 21;

      // Set the Date object to the desired date
      currentDate.setFullYear(year);
      currentDate.setMonth(month);
      currentDate.setDate(day);
  cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
 cy.get('.w-50 > #m_status').click({force:true})

 cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Self-Owned',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').type('postal colony',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').type('burial grounds',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').type('kakinada')
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').type('533001',{force:true})
 cy.get('#current_since').type('3',{force:true})
})
it('Employment details validation check',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
    cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Mr.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
  cy.get('.p-1 > #mobile').type('8')
      
    cy.get('.p-1 > #mobile').type(userID_Alpha())
    function userID_Alpha() {
        var text = "";
        var possible = "1234567890";
  
        for (var i = 0; i < 9; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
  
        return text;
  }
  cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1234')
  
    cy.get('#verify_otp').click({force:true})
     cy.get('.w-25 > #valid_aadhar').click({force:true})
    cy.get('.w-25 > #valid_pan').click({force:true})
    cy.wait(1000)
    
    
    cy.get('#pan').type('asdpj6666h',{force:true})
    const currentDate = new Date();
  
        // Set the desired date components
        const year = 1966;
        const month = 8; // Months are 0-indexed, so August is 7
        const day = 21;
  
        // Set the Date object to the desired date
        currentDate.setFullYear(year);
        currentDate.setMonth(month);
        currentDate.setDate(day);
    cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
   cy.get('.w-50 > #m_status').click({force:true})
  
   cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Owned by Family',{force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').type('postal colony',{force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').type('burial grounds',{force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').type('kakinada')
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').type('533001',{force:true})
   cy.get('#current_since').type('3',{force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
   cy.get('.px-3 > :nth-child(2) > .step-footer > .btn').click({force:true})
   cy.get(':nth-child(1) > .p-1 > .error-msg > .step-danger').should('exist')
   cy.get(':nth-child(2) > .p-1 > .error-msg > .step-danger').should('exist')
   cy.get(':nth-child(3) > .p-1 > .error-msg > .step-danger').should('exist')
   cy.get(':nth-child(6) > .p-1 > .error-msg > .step-danger').should('exist')
   cy.get('.form-check > .error-msg > .step-danger').should('exist')
})
it('Gross monthly income with alphabets  ',()=>{
  cy.visit("https://stage_bajajloan.cartradeexchange.com/")
  cy.get('[style="position: relative;"] > #mobile').type('7730066959')
  cy.get('.login100-form-btn').click({force:true})
  cy.get('#otp').type('123456')
  cy.get('.submit_button').click({force:true})
  cy.wait(1000)
  
  cy.get('#model').select('Maxima Z')
  cy.get('#variant').select('LPG')
  cy.get('#on_road_price').type('300000')
  cy.get('#title').select('Mr.')
  cy.get('#fname').type('pav')
  cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
  cy.get('.p-1 > #mobile').type(userID_Alpha())
  function userID_Alpha() {
      var text = "";
      var possible = "1234567890";

      for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
}
cy.get('.p-1 > .btn').click({force:true})
  cy.get('#otp').type('1234')

  cy.get('#verify_otp').click({force:true})
   cy.get('.w-25 > #valid_aadhar').click({force:true})
  cy.get('.w-25 > #valid_pan').click({force:true})
  cy.wait(1000)
  
  
  cy.get('#pan').type('asdpj6666h',{force:true})
  const currentDate = new Date();

      // Set the desired date components
      const year = 1966;
      const month = 8; // Months are 0-indexed, so August is 7
      const day = 21;

      // Set the Date object to the desired date
      currentDate.setFullYear(year);
      currentDate.setMonth(month);
      currentDate.setDate(day);
  cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
 cy.get('.w-50 > #m_status').click({force:true})

 cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Owned by Family',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').type('postal colony',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').type('burial grounds',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').type('kakinada')
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').type('533001',{force:true})
 cy.get('#current_since').type('3',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(1) > .p-1 > .select-bg > .form-select').select('First Time Buyer')
 cy.get(':nth-child(2) > .p-1 > .select-bg > .form-select').select('Under Graduate')
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(3) > .p-1 > .form-control').type('dfsdf')
 cy.get('.px-3 > :nth-child(2) > .step-footer > .btn').click({force:true})
 cy.get(':nth-child(3) > .p-1 > .error-msg > .step-danger').should('exist')


})
it('Emi repayment mode radio buttons check ',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
    cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Mr.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
  cy.get('.p-1 > #mobile').type('8')
      
    cy.get('.p-1 > #mobile').type(userID_Alpha())
    function userID_Alpha() {
        var text = "";
        var possible = "1234567890";
  
        for (var i = 0; i < 9; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
  
        return text;
  }
  cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1234')
  
    cy.get('#verify_otp').click({force:true})
     cy.get('.w-25 > #valid_aadhar').click({force:true})
    cy.get('.w-25 > #valid_pan').click({force:true})
    cy.wait(1000)
    
    
    cy.get('#pan').type('asdpj6666h',{force:true})
    const currentDate = new Date();
  
        // Set the desired date components
        const year = 1966;
        const month = 8; // Months are 0-indexed, so August is 7
        const day = 21;
  
        // Set the Date object to the desired date
        currentDate.setFullYear(year);
        currentDate.setMonth(month);
        currentDate.setDate(day);
    cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
   cy.get('.w-50 > #m_status').click({force:true})
  
   cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Owned by Family',{force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').type('postal colony',{force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').type('burial grounds',{force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').type('kakinada')
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').type('533001',{force:true})
   cy.get('#current_since').type('3',{force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(1) > .p-1 > .select-bg > .form-select').select('First Time Buyer')
   cy.get(':nth-child(2) > .p-1 > .select-bg > .form-select').select('Under Graduate')
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(3) > .p-1 > .form-control').type('60000')
   cy.get('.w-25 > #payment_type').click({force:true})
   cy.get('.w-40 > #payment_type').click({force:true})
   cy.get('.w-55 > #payment_type').click({force:true})
  })
it('Employment details with all valid details(should not show any validations) ',()=>{
  cy.visit("https://stage_bajajloan.cartradeexchange.com/")
  cy.get('[style="position: relative;"] > #mobile').type('7730066959')
  cy.get('.login100-form-btn').click({force:true})
  cy.get('#otp').type('123456')
  cy.get('.submit_button').click({force:true})
  cy.wait(1000)
  
  cy.get('#model').select('Maxima Z')
  cy.get('#variant').select('LPG')
  cy.get('#on_road_price').type('300000')
  cy.get('#title').select('Mr.')
  cy.get('#fname').type('pav')
  cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
  cy.get('.p-1 > #mobile').type(userID_Alpha())
  function userID_Alpha() {
      var text = "";
      var possible = "1234567890";

      for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
}
cy.get('.p-1 > .btn').click({force:true})
  cy.get('#otp').type('1234')

  cy.get('#verify_otp').click({force:true})
   cy.get('.w-25 > #valid_aadhar').click({force:true})
  cy.get('.w-25 > #valid_pan').click({force:true})
  cy.wait(1000)
  
  
  cy.get('#pan').type('asdpj6666h',{force:true})
  const currentDate = new Date();

      // Set the desired date components
      const year = 1966;
      const month = 8; // Months are 0-indexed, so August is 7
      const day = 21;

      // Set the Date object to the desired date
      currentDate.setFullYear(year);
      currentDate.setMonth(month);
      currentDate.setDate(day);
  cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
 cy.get('.w-50 > #m_status').click({force:true})

 cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Owned by Family',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').type('postal colony',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').type('burial grounds',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').type('kakinada')
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').type('533001',{force:true})
 cy.get('#current_since').type('3',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(1) > .p-1 > .select-bg > .form-select').select('First Time Buyer')
 cy.get(':nth-child(2) > .p-1 > .select-bg > .form-select').select('Under Graduate')
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(3) > .p-1 > .form-control').type('50000')
 cy.get('.w-25 > #payment_type').click({force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(7) > .p-1 > .form-check').click({force:true})
 cy.get('#flexCheckDefault3').click({force:true})
 cy.get('.px-3 > :nth-child(2) > .step-footer > .btn').click({force:true})
 cy.wait(6000)
 cy.get('.editemi-blk').click({force:true})

})
it('offer screen',()=>{
  cy.visit("https://stage_bajajloan.cartradeexchange.com/")
  cy.get('[style="position: relative;"] > #mobile').type('7730066959')
  cy.get('.login100-form-btn').click({force:true})
  cy.get('#otp').type('123456')
  cy.get('.submit_button').click({force:true})
  cy.wait(1000)
  
  cy.get('#model').select('Maxima Z')
  cy.get('#variant').select('LPG')
  cy.get('#on_road_price').type('300000')
  cy.get('#title').select('Mr.')
  cy.get('#fname').type('pav')
  cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
  cy.get('.p-1 > #mobile').type(userID_Alpha())
  function userID_Alpha() {
      var text = "";
      var possible = "1234567890";

      for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
}
cy.get('.p-1 > .btn').click({force:true})
  cy.get('#otp').type('1234')

  cy.get('#verify_otp').click({force:true})
   cy.get('.w-25 > #valid_aadhar').click({force:true})
  cy.get('.w-25 > #valid_pan').click({force:true})
  cy.wait(1000)
  
  
  cy.get('#pan').type('asdpj6666h',{force:true})
  const currentDate = new Date();

      // Set the desired date components
      const year = 1966;
      const month = 8; // Months are 0-indexed, so August is 7
      const day = 21;

      // Set the Date object to the desired date
      currentDate.setFullYear(year);
      currentDate.setMonth(month);
      currentDate.setDate(day);
  cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
 cy.get('.w-50 > #m_status').click({force:true})

 cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Owned by Family',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').type('postal colony',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').type('burial grounds',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').type('kakinada')
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').type('533001',{force:true})
 cy.get('#current_since').type('3',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(1) > .p-1 > .select-bg > .form-select').select('First Time Buyer')
 cy.get(':nth-child(2) > .p-1 > .select-bg > .form-select').select('Under Graduate')
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(3) > .p-1 > .form-control').type('50000')
 cy.get('.w-25 > #payment_type').click({force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(7) > .p-1 > .form-check').click({force:true})
 cy.get('#flexCheckDefault3').click({force:true})
 cy.get('.px-3 > :nth-child(2) > .step-footer > .btn').click({force:true})
 cy.wait(6000)
 cy.get('.editemi-blk').click({force:true})
 cy.get('.t-months > #loan_amount').click({force:true})

/cy.get('.t-months > #loan_amount').clear().type(12)
})
it('editemi',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
    cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Mr.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
  cy.get('.p-1 > #mobile').type('8')
      
    cy.get('.p-1 > #mobile').type(userID_Alpha())
    function userID_Alpha() {
        var text = "";
        var possible = "1234567890";
  
        for (var i = 0; i < 9; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
  
        return text;
  }
  cy.get('.p-1 > .btn').click({force:true})
    cy.get('#otp').type('1234')
  
    cy.get('#verify_otp').click({force:true})
     cy.get('.w-25 > #valid_aadhar').click({force:true})
    cy.get('.w-25 > #valid_pan').click({force:true})
    cy.wait(1000)
    
    
    cy.get('#pan').type('asdpj6666h',{force:true})
    const currentDate = new Date();
  
        // Set the desired date components
        const year = 1966;
        const month = 8; // Months are 0-indexed, so August is 7
        const day = 21;
  
        // Set the Date object to the desired date
        currentDate.setFullYear(year);
        currentDate.setMonth(month);
        currentDate.setDate(day);
    cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
   cy.get('.w-50 > #m_status').click({force:true})
  
   cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Owned by Family',{force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').type('postal colony',{force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').type('burial grounds',{force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').type('kakinada')
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').type('533001',{force:true})
   cy.get('#current_since').type('3',{force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(1) > .p-1 > .select-bg > .form-select').select('First Time Buyer')
   cy.get(':nth-child(2) > .p-1 > .select-bg > .form-select').select('Under Graduate')
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(3) > .p-1 > .form-control').type('50000')
   cy.get('.w-25 > #payment_type').click({force:true})
   cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(7) > .p-1 > .form-check').click({force:true})
   cy.get('#flexCheckDefault3').click({force:true})
   cy.get('.px-3 > :nth-child(2) > .step-footer > .btn').click({force:true})
   cy.wait(6000)
   cy.get('.editemi-blk').click({force:true})
   cy.get('.t-months > #loan_amount').click({force:true})
  
  /cy.get('.t-months > #loan_amount').clear().type(12)
  
   cy.get('.rupee-icon > #loan_amount').type('0')
  //  cy.get(':nth-child(1) > .value').should('have.value',calculateEMI())
  // //  function tenure(){
  // //      var  $n=12 ;    
  // //      var  $r= 8.90 ;
  // //      var  $p= 300000;
  // //      var   $e = $p * $r ;
  // //      var  $f=((1+$r)^$n)  /  ((1+$r)^$n - 1) ;
  // //      var  $E=$e*$f;
  
  // //       return $E;
  
  // // }
  // function calculateEMI(P, annualInterestRate, loanTenureInMonths) {
  //   // Convert annual interest rate to monthly interest rate
  //   const monthlyInterestRate = annualInterestRate / 12 / 100; // Convert percentage to decimal
  
  //   // Calculate (1 + r)^n
  //   const powerTerm = Math.pow(1 + monthlyInterestRate, loanTenureInMonths);
  
  //   // Calculate EMI using the formula
  //   const EMI =
  //     (P * monthlyInterestRate * powerTerm) / (powerTerm - 1);
  
  //   return  EMI;
  // }
  
  // // Example usage:
  // const principalAmount = 300000; // Replace with your principal loan amount
  // const annualInterestRate = 8.90; // Replace with your annual interest rate
  // const loanTenureInMonths = 12; // Replace with your loan tenure in months
  
  // const EMI = calculateEMI(principalAmount, annualInterestRate, loanTenureInMonths);
  // // console.log(`Your EMI is: ${EMI.toFixed(2)}`);
  
  
  })

})


   
