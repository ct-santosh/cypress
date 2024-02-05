describe('tests',()=>{
    it('Valid pan',()=>{
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
        cy.get('.w-50 > #valid_aadhar').click({force:true})
        cy.get('.w-25 > #valid_pan').click({force:true})
        cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
        cy.get('#pan').type('asdpf4444d')
    })
    it('Invalid pan',()=>{
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
        cy.get('.w-50 > #valid_aadhar').click({force:true})
        cy.get('.w-25 > #valid_pan').click({force:true})
        cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
        cy.get('#pan').type('asd56564444d')
        cy.get(':nth-child(10) > .p-1 > .error-msg > .step-danger').should('exist')
    })
    it('Dob with min. age',()=>{
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
    })