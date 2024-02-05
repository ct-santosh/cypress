describe('tests',()=>{
    it('residential details validation check',()=>{
        cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
        cy.get('#email').type('pavani@gmail.com')
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
    //    cy.get('.w-50 > #m_status').click({force:true})
       cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
      cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').type('{selectall}{backspace}')
      cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Owned by Self/Spouse',{force:true})
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
        cy.get('#email').type('pavani@gmail.com')
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
    //    cy.get('.w-50 > #m_status').click({force:true})
      
       cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
       cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Owned by Self/Spouse',{force:true})
       cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').type('postal colony',{force:true})
       cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').type('burial grounds',{force:true})
       cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').type('kakinada')
       cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').type('533001',{force:true})
       cy.get('#current_since').type('3',{force:true})
      })
      it('Employment details validation check',()=>{
          cy.visit("https://stage_bajajloan.cartradeexchange.com/")
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
        cy.get('#email').type('pavani@gmail.com')
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
        //  cy.get('.w-50 > #m_status').click({force:true})
        
         cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
         cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Owned by Parent/Children',{force:true})
         cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').type('postal colony',{force:true})
         cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').type('burial grounds',{force:true})
         cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').type('kakinada')
         cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').type('533001',{force:true})
         cy.get('#res_since').type('3')
         cy.get('#current_since').type('3',{force:true})
         cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
         cy.get('.px-3 > :nth-child(2) > .step-footer > .btn').click({force:true})
         cy.get(':nth-child(1) > .p-1 > .error-msg > .step-danger').should('exist')
         cy.get(':nth-child(2) > .p-1 > .error-msg > .step-danger').should('exist')
         cy.get(':nth-child(4) > .p-1 > .error-msg > .step-danger').should('exist')
         cy.get('.form-check > .error-msg > .step-danger').should('exist')
      })
})