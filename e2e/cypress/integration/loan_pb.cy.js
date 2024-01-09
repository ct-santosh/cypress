describe('bajaj',()=>{
    it('pb',()=>{
        cy.visit("https://stage_bajajloan.cartradeexchange.com/")
        cy.get('[style="position: relative;"] > #mobile').type('9999999996')
        cy.get('.login100-form-btn').click({force:true})
        cy.get('#otp').type('123456')
        cy.get('.submit_button').click({force:true})
        cy.wait(2000)
        cy.get('#dealer_id').should('be.disabled').contains('Sai Service Pvt. Ltd.(12390)')
        cy.get('#vehicle_type').should('be.disabled').contains('Pro-Biking')
        cy.get('#make').select('KTM')
        cy.get('#model').select('ADV')
        cy.get('#variant').select('390')
        cy.get('#title').select('Mr.')
        cy.get('#fname').type('pavani')
        cy.get('#mname').type('vasudha')
        cy.get('#lname').type('naramamidi')
        cy.get('.p-1 > #mobile').type('9')
        
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
       
        
        //   cy.get('#verify_otp').click({force:true})
        
        // cy.get("button#verify_otp.btn.otherbank-offers.varify_otp.mt-3").click({force:true})
        cy.get('#verify_otp').click({force:true})
        cy.wait(2000)
        cy.get('#email').click().type('asd@gmail.com')
        cy.get('.w-25 > #valid_aadhar').click({force:true})
        cy.get('.w-25 > #valid_pan').click({force:true})
        cy.get('#pan').click({force:true}).type('asdph4444h')
        cy.get('#dob').click({force:true})
        cy.get('.datepicker-days > .table-condensed > thead > :nth-child(2) > .datepicker-switch').click({force:true})
        cy.get('.datepicker-months > .table-condensed > thead > :nth-child(2) > .datepicker-switch').click({force:true})
        cy.get('.datepicker-years > .table-condensed > tbody > tr > td > .old').click({force:true})
        cy.get('.datepicker-months > .table-condensed > tbody > tr > td > :nth-child(5)').click({force:true})
        cy.get('[data-date="925603200000"]').click({force:true})
        
        cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({foece:true})
        cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Rented')
        cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').type('vidyut nagar')
        cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').click({force:true}).type('near hdfc bank')
        cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').click({force:true}).type('kakinada')
        cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').click({force:true}).type('533001')
        cy.get('#res_since').type('4')
        cy.get('#current_since').type("4")
        cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
        cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Salaried')
        cy.get(':nth-child(2) > .p-1 > .select-bg > .form-select').select('Graduate')
        cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(3) > .p-1 > .form-control').click({force:true}).type('dxc')
        cy.get(':nth-child(4) > .p-1 > .select-bg > .form-select').select('CFO')
        cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(5) > .p-1 > .form-control').click({force:true}).type('90000')
        cy.get(':nth-child(2) > .list-group-item').click({force:true})
        cy.get('#join_date').click({force:true})
        cy.get('.datepicker-months > .table-condensed > tbody > tr > td > :nth-child(1)').click({force:true})
        cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(7) > .p-1 > .form-control').type('35')
        cy.get(':nth-child(8) > .p-1 > .form-control').type('0')
        cy.get(':nth-child(9) > .p-1 > .form-control').type('brahmanagar')
        cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(10) > .p-1 > .form-control').type('opt burial grounds')
        cy.get(':nth-child(11) > .p-1 > .form-control').type('kakinada')
        cy.get(':nth-child(12) > .p-1 > .form-control').type(400001)
        cy.get('.w-25 > #payment_type').click({force:true})
        cy.get('#flexCheckDefault3').click({force:true})
        cy.get('.px-3 > :nth-child(2) > .step-footer > .btn').click({force:true})
        cy.wait(5000)        
        
    })
})