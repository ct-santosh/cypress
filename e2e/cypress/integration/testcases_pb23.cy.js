describe('tests',()=>{
    beforeEach(() => {
        // Clear cookies before each test
        cy.clearCookies();
      });
    it('aadhar radio buttons check(yes)',()=>{
        // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
        cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
        cy.get('[style="position: relative;"] > #mobile').type('9999999996')
        cy.get('.login100-form-btn').click({force:true})
         cy.get('#otp').type('123456')
        cy.get('.submit_button').click({force:true})
        cy.wait(1000)
        cy.get('#model').should('exist')
        cy.get('#make').select('KTM')
        cy.get('#model').select('ADV')
        cy.get('#variant').select('390')
        cy.get('#ex_price').should('be.disabled')
        cy.get('#on_road_price').should('be.disabled')
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
        // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
        cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
        cy.get('[style="position: relative;"] > #mobile').type('9999999996')
        cy.get('.login100-form-btn').click({force:true})
         cy.get('#otp').type('123456')
        cy.get('.submit_button').click({force:true})
        cy.wait(1000)
        cy.get('#model').should('exist')
        cy.get('#make').select('KTM')
        cy.get('#model').select('ADV')
        cy.get('#variant').select('390')
        cy.get('#ex_price').should('be.disabled')
        cy.get('#on_road_price').should('be.disabled')
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
        // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
        cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
        cy.get('[style="position: relative;"] > #mobile').type('9999999996')
        cy.get('.login100-form-btn').click({force:true})
         cy.get('#otp').type('123456')
        cy.get('.submit_button').click({force:true})
        cy.wait(1000)
        cy.get('#model').should('exist')
        cy.get('#make').select('KTM')
        cy.get('#model').select('ADV')
        cy.get('#variant').select('390')
        cy.get('#ex_price').should('be.disabled')
        cy.get('#on_road_price').should('be.disabled')
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
        // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
        cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
        cy.get('[style="position: relative;"] > #mobile').type('9999999996')
        cy.get('.login100-form-btn').click({force:true})
         cy.get('#otp').type('123456')
        cy.get('.submit_button').click({force:true})
        cy.wait(1000)
        cy.get('#model').should('exist')
        cy.get('#make').select('KTM')
        cy.get('#model').select('ADV')
        cy.get('#variant').select('390')
        cy.get('#ex_price').should('be.disabled')
        cy.get('#on_road_price').should('be.disabled')
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
        // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
        cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
        cy.get('[style="position: relative;"] > #mobile').type('9999999996')
        cy.get('.login100-form-btn').click({force:true})
         cy.get('#otp').type('123456')
        cy.get('.submit_button').click({force:true})
        cy.wait(1000)
        cy.get('#model').should('exist')
        cy.get('#make').select('KTM')
        cy.get('#model').select('ADV')
        cy.get('#variant').select('390')
        cy.get('#ex_price').should('be.disabled')
        cy.get('#on_road_price').should('be.disabled')
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
        // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
        cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
        cy.get('[style="position: relative;"] > #mobile').type('9999999996')
        cy.get('.login100-form-btn').click({force:true})
         cy.get('#otp').type('123456')
        cy.get('.submit_button').click({force:true})
        cy.wait(1000)
        cy.get('#make').select('KTM')
        cy.get('#model').select('ADV')
        cy.get('#variant').select('390')
        cy.get('#ex_price').should('be.disabled')
        cy.get('#on_road_price').should('be.disabled')
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
    })