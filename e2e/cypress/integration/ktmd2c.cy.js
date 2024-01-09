describe('bajaj ktm',()=>{
    it('test1',()=>{
        // cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
        //cy.visit('http://BajajKTMWeb:80/')
        cy.visit('http://localhost:8594/')
        cy.get(':nth-child(1) > .img-zoom > .vehicle-img').click({force:true})
        cy.wait(5000)
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
        cy.wait(3000)
        cy.get('.detect-btn').click({force:true})
            cy.get('#fld_bike_city').type('kakinada')
            cy.get('.pac-container > :nth-child(1)').click( {force: true})
            cy.wait(5000)
            cy.get('#dealers_selection.form-control.form-select').select(1)
            cy.get('#next_button').click({force:true})
            cy.wait(2000)
        cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.me-5 > .form-control').type('50000')
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('2000-11-11')
        // cy.xpath("//input[@type='date']").type('2001-12-13')
        cy.get('.mb-1 > .form-check-input').click({force:true})
        cy.get('#getofferbutton').click({force:true})
        cy.wait(4000)
        cy.get('.opt-blocks > :nth-child(1)').type('1')
        cy.get('.opt-blocks > :nth-child(2)').type('2')
        cy.get('.opt-blocks > :nth-child(3)').type('3')
        cy.get('.opt-blocks > :nth-child(4)').type('4')
        //cy.xpath('div[id='otp_block'] button[class='btn btn-main w-100']')
        cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
        cy.wait(3000)
    
        


    })


})
