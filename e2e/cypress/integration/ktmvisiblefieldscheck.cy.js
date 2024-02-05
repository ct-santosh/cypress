describe('ktmtestcases',()=>{
    beforeEach(() => {
        // Clear cookies before each test
        cy.clearCookies();
      });
    // it('firstpage visible part check',()=>{
    //     // cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
    //         cy.visit('https://php8-bajaj-ktm-d2c.cartradeexchange.com/')
    //     cy.get('.logo').should('be.visible')
    //     cy.get('.process-points > :nth-child(1)').should('have.text','Enter Your Details\n\t\t\t')
    //     cy.get('.process-points > :nth-child(2)').should('have.text','Compare Between Options\n\t\t\t')
    //     cy.get('.process-points > :nth-child(3)').should('have.text','Choose The Best Option\n\t\t\t')
    //     cy.get('.sub-heading').should('have.text','Select Your Model')
    //     cy.get('#searchLisitngs').should('exist')
    //     cy.get('.login-blk > .icon').should('exist')
    //     cy.get('.login-blk').should('exist')
    // })
    // it('Allmodelsandvariantclickable check',()=>{
    //     // cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
    // cy.visit('https://php8-bajaj-ktm-d2c.cartradeexchange.com/')
    //     //models to visit
    //     const modelToVisit = [':nth-child(1) > #pulsar-tab',':nth-child(2) > #pulsar-tab',':nth-child(3) > #pulsar-tab']
    //     for (let j=0;j<modelToVisit.length;j++){
    //         const model = modelToVisit[j];
    //         const variantToVisit = [':nth-child(1) > .img-zoom > .blk-title',':nth-child(2) > .img-zoom > .blk-title',':nth-child(3) > .img-zoom > .blk-title',':nth-child(4) > .img-zoom > .blk-title'];
    //         //variant to visit
    //         for (let i = 0; i < variantToVisit.length; i++) {
    //             const url = variantToVisit[i];
    //             if(cy.get(url).should('exist')){
    //                 cy.get(url).click({force:true})
    //                 cy.get('.bike-title').invoke('text').then((text) => {
    //                     // Log the text content to the Cypress terminal
    //                     cy.log('Text Content:', text);
    //                 });
    //                 cy.wait(5000)
    //                 cy.clearAllCookies()
    //                 // cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
    //                 cy.visit('https://php8-bajaj-ktm-d2c.cartradeexchange.com/')
    //             }
    //             cy.get(model).click({force:true});
    //         }
    //     }
    // })
    // it('searchbarcheck',()=>{
    //     // cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
    //     cy.visit('https://php8-bajaj-ktm-d2c.cartradeexchange.com/')
    //     //rc models 
    //     cy.get('#searchLisitngs').type('RC')
    //     const rcmodels= ['.list-group > :nth-child(1)' ,'.list-group > :nth-child(2)','.list-group > :nth-child(3)','.list-group > :nth-child(4)','.list-group > :nth-child(5)']
    //     const rcvariant=['\n\t\t\t\t\t\t\t\t\tRC 390\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tRC 200\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tRC 125\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tRC 390 GP\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tRC 200 GP\n\t\t\t\t\t\t\t\t']
    //     for (let i=0;i<rcmodels.length;i++){
    //         const a=rcmodels[i];
    //         const b=rcvariant[i]
    //         cy.get(a).should('have.text',b)
    //     }
    //     //duke models 
    //     cy.get('#searchLisitngs').clear()
    //     cy.get('#searchLisitngs').type('DUKE')
    //     const dukemodels=['.list-group > :nth-child(1)' ,'.list-group > :nth-child(2)','.list-group > :nth-child(3)','.list-group > :nth-child(4)']
    //     const dukevariant=['\n\t\t\t\t\t\t\t\t\tDuke 390\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tDuke 250\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tDuke 200\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tDuke 125\n\t\t\t\t\t\t\t\t']
    //     for(let j=0;j<dukemodels.length;j++){
    //         const c=dukemodels[j];
    //         const d=dukevariant[j];
    //         cy.get(c).should('have.text',d)
    //     }
    //     // adv models
    //     cy.get('#searchLisitngs').clear()
    //     cy.get('#searchLisitngs').type('ADV')
    //     const advmodels=['.list-group > :nth-child(1)' ,'.list-group > :nth-child(2)','.list-group > :nth-child(3)','.list-group > :nth-child(4)']
    //     const advvariant=['\n\t\t\t\t\t\t\t\t\tAdventure 390\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tAdventure 250\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tAdventure 390 X\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tAdventure 390 Rally\n\t\t\t\t\t\t\t\t']
    //     for(let k=0;k<advmodels.length;k++){
    //         const e=advmodels[k];
    //         const f=advvariant[k];
    //         cy.get(e).should('have.text',f)
    //         cy.get(e).click({force:true})
    //     }
    // })
    // it('existing user check',()=>{
    //     // cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
    // cy.visit('https://php8-bajaj-ktm-d2c.cartradeexchange.com/')
    //     cy.get('.link').click({force:true})
        
    //     cy.get('.modal-body > .vehicle-img').should('exist')
    //     // cy.get('.mb-1').should('have.text','**Mobile Number ***')
    //     cy.get('.mb-1').should('have.text','Mobile Number *')
    //     cy.get('#mobile').should('exist')
    //     cy.get('.tc-text').should('exist')
    //     cy.get('[href="https://www.ktmindia.com/termsAndConditions"]').should('exist')
    //     cy.get('[href="https://www.ktmindia.com/privacy-policy"]').should('exist')
    //     cy.wait(1000)
    //     cy.get('#mobile').click().type('9014293759')
    //     cy.get('#login-popup > div.modal-dialog > div > div.modal-body > article > div > button').click({force:true})
    //     cy.get('.step-danger').should('have.text','This customer does not exist! Please try again')
    //     cy.get('#mobile').click().clear().type('8989889898')
    //     cy.get('#login-popup > div.modal-dialog > div > div.modal-body > article > div > button').click({force:true})
    //     cy.get('.main-block > .justify-content-between > :nth-child(1)').type(1)
    //     cy.get('.main-block > .justify-content-between > :nth-child(2)').type(2)
    //     cy.get('.main-block > .justify-content-between > :nth-child(3)').type(3)
    //     cy.get('.main-block > .justify-content-between > :nth-child(4)').type(4)
    //     cy.get('#verify').click({force:true})
    //     cy.url().should('eq', 'https://php8-bajaj-ktm-d2c.cartradeexchange.com/d2c_offer_screen?lead_id=659698d9b9fca7ecc10e9c8c&vehicle_id=8714');
    // })
    // it('secondpage visible fields check',()=>{
    //     // cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
    //     cy.visit('https://php8-bajaj-ktm-d2c.cartradeexchange.com/')
    //     cy.get(':nth-child(1) > .img-zoom > .vehicle-img').click({force:true})
    //     cy.get('.sub-heading').should('have.text','Fill details to check your eligibility')
    //     cy.get('.active > .default-step').should('exist')
    //     cy.get('[data-step-target="step2"] > .default-step').should('exist')
    //     cy.get('.active > h5').should('have.text','Personal \n\t\t\t\t\t\t\t\t\tDetails')
    //     cy.get('[data-step-target="step2"] > h5').should('have.text','Other \n\t\t\t\t\t\t\t\t\tDetails')
    //     cy.get('.col3 > .mb-1').should('have.text','Prefix *')
    //     cy.get('.col5 > .mb-1').should('have.text','Full Name * ')
    //     cy.get('.col5 > .mb-1 > .info-icon').should('exist')
    //     cy.get('.col6 > .mb-1').should('have.text','Mobile Number * ')
    //     cy.get('.col6 > .mb-1 > .info-icon').should('exist')
    //     cy.get('.col3 > .form-control').should('have.value','Mr.')
    //     cy.get('.col3 > .form-control').should('contain','Mr.').should('contain','Ms.').should('contain','Mrs.')
    //     cy.get('.col8 > .mb-1').should('exist').and('contain','Location *',{force:true})
    //     cy.get('#fld_bike_city').should('exist').and('contain','',{force:true})
    //         .invoke('attr', 'placeholder') // get the value of the placeholder attribute
    //         .then(placeholder => {
    //         expect(placeholder).to.contain('Enter Area')
    //         });
    //     cy.get(':nth-child(3) > .col-12 > .mb-1').should('exist').and('contain','Preferred Dealer *',{force:true})
    //     cy.get('.close-btn').should('exist')
    //     cy.get('.detect-btn').should('exist')
    //     cy.get('#dealers_selection').should('be.disabled')
    //     cy.get('.form-in.mt-5 > .justify-content-end > .step-footer').should('exist').and('contain','Next',{force:true})
    //     cy.get('.editemi-sliders > .text-center > img').should('exist')
    //     cy.get('.bike-title').should('exist')
    //     cy.get('#edit_vehicle').should('exist')
    //     cy.get('em').should('have.text','Variant:')
    //     cy.get('strong').should('have.text','Standard')
    // })
    // it('second page edit vehicle button check',()=>{
    //     // cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
    //     cy.visit('https://php8-bajaj-ktm-d2c.cartradeexchange.com/')
    //     cy.get(':nth-child(1) > .img-zoom > .vehicle-img').click({force:true})
    //     cy.get('#edit_vehicle').click({force:true})
    //     cy.get('#vehicle-popup > .modal-dialog > .modal-content > .modal-body').should('exist')
    //     cy.get('.modal-footer').should('exist')
    //     cy.get('#back_popup').contains('NO')
    //     cy.get("div[role='dialog'] div div div a button[type='button']").contains('YES')
    //     cy.get("div[role='dialog'] div div div a button[type='button']").click({force:true})
    //     cy.url().should('eq','https://php8-bajaj-ktm-d2c.cartradeexchange.com/d2c_listing')
    //     cy.get(':nth-child(1) > .img-zoom > .vehicle-img').click({force:true})
    //     cy.get('#back_popup').click({force:true})
    //     cy.url().should('eq','https://php8-bajaj-ktm-d2c.cartradeexchange.com/d2c_form')    
    // })
    //     it('third page visible fields check',()=>{
    //         // cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
    //         cy.visit('https://php8-bajaj-ktm-d2c.cartradeexchange.com/')
    //         cy.get(':nth-child(1) > .img-zoom > .vehicle-img').click({force:true})
    //         cy.get('.col5 > .form-control').type('test')
    //         cy.get('.col6 > .form-control').type('7')
    //         cy.get('.col6 > .form-control').type(userID_Alpha())
    //         function userID_Alpha() {
    //             var text = "";
    //             var possible = "1234567890";
    
    //             for (var i = 0; i < 9; i++)
    //             text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    //             return text;
    //         }
    //         cy.get('.detect-btn').click({force:true})
    //         cy.get('.detect-btn').click({force:true})
    //         cy.get('#fld_bike_city').type('kakinada')
    //         cy.get('.pac-container > :nth-child(1)').click( {force: true})
    //         cy.wait(8000)
    //         cy.get('#dealers_selection.form-control.form-select').select(1)
    //         cy.get('#next_button').click({force:true})
    //         cy.get('.mt-3 > h6').should('have.text','Select Residence Type * ')
    //         cy.get('.mt-3 > h6 > .info-icon').should('exist')
    //         cy.get('.resident-out.mt-4 > h6').should('have.text','Select Employment Type * ')
    //         cy.get('.resident-out.mt-4 > h6 > .info-icon').should('exist')



    //     })
    it('second page validation check',()=>{
        // cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
        cy.visit('https://php8-bajaj-ktm-d2c.cartradeexchange.com/')
        cy.get(':nth-child(1) > .img-zoom > .vehicle-img').click({force:true})
       cy.get('.col5 > .form-control').type('5656')
        cy.get('.step-danger').should('have.text','Name Not in proper format')
        cy.get('.col5 > .form-control').clear()
        cy.get('.col5 > .form-control').type('sdf5656')
        cy.get('.step-danger').should('have.text','Name Not in proper format')
        cy.get('.col5 > .form-control').clear()
        cy.get('.col5 > .form-control').type('a')
        cy.get('.step-danger').should('not.exist')
        cy.get('.col5 > .form-control').type('pavani')
        cy.get('.col6 > .form-control').type('dfsfd')
        cy.get('.col6 > .form-control').should('be.empty')
        const num= ['1','2','3','4','5','6','7','8','9','0']
        for (let i=0;i<num.length;i++){
        const a = num[i];
        cy.get('.col6 > .form-control').type(a)
        cy.get('.step-danger').should('exist')
        cy.get('.col6 > .form-control').clear()
        }
        
        
    })
})