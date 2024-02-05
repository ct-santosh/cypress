describe('idfc ktm',()=>{
    it('agechecksalaried',()=>{
        cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
        cy.get(':nth-child(2) > .img-zoom > .vehicle-img').click({force:true})
        // cy.get('.btn.btn-fill.proceed-btn.show').click({force:true})
        cy.get('.col5 > .form-control').type('test')
        cy.get('.col6 > .form-control').type('7')
        cy.get('.col6 > .form-control').type(userID_Alpha())
        function userID_Alpha() {
            var text = "";
            var possible = "1234567890";

            for (var i = 0; i < 9; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
        cy.get('.detect-btn').click({force:true})
        cy.get('.detect-btn').click({force:true})
    cy.get('#fld_bike_city').type('kakinada')
    cy.get('.pac-container > :nth-child(1)').click( {force: true})
    cy.wait(5000)
    cy.get('#dealers_selection.form-control.form-select').select(1)
    cy.get('#next_button').click({force:true})
        
        cy.wait(2000)
        cy.get('.mt-3 > .radio-wrapper-new > :nth-child(1) > .resident').click({force:true})
        cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.wait(1000)
        cy.get('.me-5 > .form-control').type('50000')
        // cy.xpath("//input[@type='date']").type('2002-10-13')
        cy.xpath("//input[@type='date']").type('2001-12-13',{force:true})
        cy.get('.mb-1 > .form-check-input').click({force:true})
        cy.get('#getofferbutton').click({force:true})
        cy.wait(3000)
        cy.get('.opt-blocks > :nth-child(1)').type('1')
        cy.get('.opt-blocks > :nth-child(2)').type('2')
        cy.get('.opt-blocks > :nth-child(3)').type('3')
        cy.get('.opt-blocks > :nth-child(4)').type('4')
        cy.wait(3000)
        cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
        cy.wait(3000)
  
        cy.url().should('contain','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_offer_screen?')
    })
})