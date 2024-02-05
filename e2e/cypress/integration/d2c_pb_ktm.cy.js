describe('brerules',()=>{
    it('test1',()=>{
        cy.visit('https://stage_bajajloan.cartradeexchange.com/d2c_listing/PB/KTM')
        cy.get('.tab-content-wrap > :nth-child(1)').click({force:true})
        cy.wait(2000)
        cy.get('#processed_btn').click({force:true})
        cy.wait(2000)
        cy.get('.col5 > .form-control').type('testing')
        cy.get('.col6 > .form-control').type('7')
        // cy.get('#mobile').type('8')
        cy.get('.col6 > .form-control').type(userID_Alpha())
        function userID_Alpha() {
            var text = "";
            var possible = "1234567890";

            for (var i = 0; i < 9; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
         
        cy.get('#fld_bike_city').click({force:true}).type('Raja')
        cy.get('.pac-container > :nth-child(2)').click( {force: true})

        // cy.get('.detect-btn').click({force:true})
        cy.wait(5000)
        // cy.get('[disabled]').click({force: true}).
        //  cy.get('#dealers_selection').click({force:true})

        cy.get('#dealers_selection.form-control.form-select').select(1)
        cy.get('#next_button').click({force:true})
        cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(1) > .resident').click({force:true})
        cy.get('.me-5 > .form-control').click().type('50000')
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').click({force:true})
        // cy.get(':nth-child(3) > :nth-child(2) > .form-control').Date(1990-2-5)
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('2001-12-13')
        // cy.xpath("//input[@type='date']").type('2001-12-13')
        cy.get('#flexRadioDefault1').click({force:true})
        cy.get('#flexRadioDefault3').click({force:true})
        cy.get('.mb-1 > .form-check-input').click({force:true})
        cy.get('#getofferbutton').click({force:true})
        cy.wait(3000)
        cy.get('.opt-blocks > :nth-child(1)').type('1')
        cy.get('.opt-blocks > :nth-child(2)').type('2')
        cy.get('.opt-blocks > :nth-child(3)').type('3')
        cy.get('.opt-blocks > :nth-child(4)').type('4')
        cy.wait(2000)
        cy.get('#otp_block > .main-block > .col-12.mt-3 > .btn').click({force:true})
       // cy.get(':nth-child(2) > .card-body > :nth-child(6) > .btn').click({force:true})
        // cy.get('.steps-block > :nth-child(4)').click({force:true})

        

    
    })
})