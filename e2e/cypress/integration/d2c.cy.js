describe('d2c',()=>{
    it('test1',()=>{
        cy.visit("https://stage_bajajloan.cartradeexchange.com/d2c_listing")
        cy.get('.tab-content-wrap > :nth-child(2)').click({force:true})
        cy.wait(2000)
        cy.get('#processed_btn').click({force:true})
        cy.wait(2000)
        cy.get('.col5 > .form-control').type('pavani')
        
        cy.get('.col6 > .form-control').type('8')
        // cy.get('#mobile').type('8')
        cy.get('.col6 > .form-control').type(userID_Alpha())
        function userID_Alpha() {
            var text = "";
            var possible = "1234567890";

            for (var i = 0; i < 9; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
        
        cy.get('#fld_bike_city').type('Kakinada,Andhra Pradesh,India')
        cy.get('button.detect-btn.ms-2').click({force:true})
        cy.wait(3000)
   
    })
})