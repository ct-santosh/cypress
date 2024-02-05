describe('cttestcases',()=>{
    it('+ve',()=>{
        cy.visit('https://stage-bajaj-chetak.cartradeexchange.com/')
        cy.get(':nth-child(1) > .img-zoom > .vehicle-img').click({force:true})
        cy.wait(1000)
        cy.get(':nth-child(2) > .checkmark').should('exist')
        cy.get(':nth-child(3) > .checkmark').click({force:true})
        cy.get(':nth-child(4) > .checkmark').click({force:true})
        cy.get('#processed_btn').click({force:true})
        cy.get('.col5 > .form-control').type('234423')
        cy.get('.step-danger').should('exist')
        cy.get('.col5 > .form-control').clear().type('2dfdsf4423')
        cy.get('.step-danger').should('exist')
        cy.get('.col5 > .form-control').clear().type('name')
        cy.get('.step-danger').should('not.exist')   
        cy.get('.col6 > .form-control').type('dfsdsf',{force:true})
        cy.get('.col6 > .form-control').type('9')
        // cy.get('#mobile').type('8')
        cy.get('.col6 > .form-control').type(userID_Alpha())
        function userID_Alpha() {
            var text = "";
            var possible = "1234567890";

            for (var i = 0; i < 9; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
        cy.get('#fld_bike_city').click({force:true}).type('mumbai')
        cy.get('.pac-container > :nth-child(2)').click( {force: true})
        cy.wait(10000)
        cy.get('#dealers_selection.form-control.form-select').select(1)
        cy.get('#next_button').click({force:true})
        cy.get('.mb-1 > .form-check-input').click({force:true})
        cy.get('#getofferbutton').click({force:true})
        cy.get('.mt-3 > .error-msgs > .step-danger').should('exist')
        cy.get('.resident-out.mt-4 > .error-msgs > .step-danger').should('exist')
        cy.get('.me-5 > .error-msgs > .step-danger').should('exist')
        cy.get(':nth-child(3) > :nth-child(2) > .error-msgs > .step-danger').should('exist')

        cy.get('.mt-3 > .radio-wrapper-new > :nth-child(1) > .resident').click({force:true})
        cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.mt-3 > .radio-wrapper-new > :nth-child(3) > .resident').click({force:true})
        cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(1) > .resident').click({force:true})
        cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(3) > .resident').click({force:true})
        cy.get('.me-5 > .form-control').type('sdfdf',{force:true})
        cy.get('.me-5 > .form-control').type('40000')
        // cy.xpath("//input[@type='date']").type('2002-09-12')
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('2000-11-11')
        cy.get('.back-btn').click({force:true})
        cy.get('#next_button').click({force:true})

         cy.get('#getofferbutton').click({force:true})
        cy.wait(2000)
        cy.get('#otp_block > .main-block > .col-12.mt-3 > .btn').click({force:true})
        cy.get('.step-danger').should('exist')
        
        cy.get('.opt-blocks > :nth-child(1)').type('5')
        cy.get('.opt-blocks > :nth-child(2)').type('5')
        cy.get('.opt-blocks > :nth-child(3)').type('5')
        cy.get('.opt-blocks > :nth-child(4)').type('5')
        cy.wait(1000)
        cy.get('#otp_block > .main-block > .col-12.mt-3 > .btn').click({force:true})
        cy.wait(2000)
        cy.on('window:alert',(t)=>{
                        //assertions
            expect(t).to.contains('Invalid OTP');
        })

        cy.get('.opt-blocks > :nth-child(1)').clear().type('1')
        cy.get('.opt-blocks > :nth-child(2)').clear().type('2')
        cy.get('.opt-blocks > :nth-child(3)').clear().type('3')
        cy.get('.opt-blocks > :nth-child(4)').clear().type('4')
        cy.get('#otp_block > .main-block > .col-12.mt-3 > .btn').click({force:true})



    })
    it('existingcustomer',()=>{
        cy.visit('https://stage-bajaj-chetak.cartradeexchange.com/')
        cy.get(':nth-child(1) > .img-zoom > .vehicle-img').click({force:true})
        cy.get(':nth-child(3) > .checkmark').should('exist')
        cy.wait(1000)
        cy.get('#processed_btn').click({force:true})
        cy.get('.col5 > .form-control').type('name')
        cy.get('.col6 > .form-control').type('9014293759')
        cy.get('#fld_bike_city').click({force:true}).type('kaki')
        cy.get('.pac-container > :nth-child(1)').click( {force: true})
        cy.wait(10000)
        cy.get('#dealers_selection.form-control.form-select').select(1)
        cy.get('#next_button').click({force:true})
        cy.wait(2000)
        cy.get('.opt-blocks > :nth-child(1)').click().type('1')
        cy.get('.opt-blocks > :nth-child(2)').click().type('2')
        cy.get('.opt-blocks > :nth-child(3)').click().type('3')
        cy.get('.opt-blocks > :nth-child(4)').click().type('4')
        cy.wait
        cy.get('#otp_block > .main-block > .col-12 > .btn').click({force:true})
        cy.wait(4000)
        
        
    })


})