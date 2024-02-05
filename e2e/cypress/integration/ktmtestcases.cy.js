describe('ktmtestcases',()=>{
    it('models check',()=>{
        cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
        cy.wait(2000)
        if(cy.get(':nth-child(1) > #pulsar-tab').contains('RC')){
            cy.get(':nth-child(1) > .img-zoom > .blk-title').should('have.text','RC 125')
            cy.get(':nth-child(2) > .img-zoom > .blk-title').should('have.text','RC 200')
            cy.get(':nth-child(3) > .img-zoom > .blk-title').should('have.text','RC 200 GP')
            cy.get(':nth-child(4) > .img-zoom > .blk-title').should('have.text','RC 390')
            cy.get(':nth-child(5) > .img-zoom > .blk-title').should('have.text','RC 390 GP')
        }
        cy.get(':nth-child(2) > #pulsar-tab').click({force:true})
        if(cy.get(':nth-child(2) > #pulsar-tab').contains('Duke')){
            cy.get(':nth-child(1) > .img-zoom > .blk-title').should('have.text','Duke 125')
            cy.get(':nth-child(2) > .img-zoom > .blk-title').should('have.text','Duke 200')
            cy.get(':nth-child(3) > .img-zoom > .blk-title').should('have.text','Duke 250')
            cy.get(':nth-child(4) > .img-zoom > .blk-title').should('have.text','Duke 390')

        }
        cy.get(':nth-child(3) > #pulsar-tab').click({force:true})
        if(cy.get(':nth-child(3) > #pulsar-tab').contains('ADV')){
            cy.get(':nth-child(1) > .img-zoom > .blk-title').should('have.text','Adventure 250')
            cy.get(':nth-child(2) > .img-zoom > .blk-title').should('have.text','Adventure 390')
            cy.get(':nth-child(3) > .img-zoom > .blk-title').should('have.text','Adventure 390 Rally')
            cy.get(':nth-child(4) > .img-zoom > .blk-title').should('have.text','Adventure 390 X')
        }
    })
    it('Allmodelsandvariantclickable check',()=>{
        cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
        //models to visit
        const modelToVisit = [':nth-child(1) > #pulsar-tab',':nth-child(2) > #pulsar-tab',':nth-child(3) > #pulsar-tab']
        for (let j=0;j<modelToVisit.length;j++){
            const model = modelToVisit[j];
            const variantToVisit = [':nth-child(1) > .img-zoom > .blk-title',':nth-child(2) > .img-zoom > .blk-title',':nth-child(3) > .img-zoom > .blk-title',':nth-child(4) > .img-zoom > .blk-title'];
            //variant to visit
            for (let i = 0; i < variantToVisit.length; i++) {
                const url = variantToVisit[i];
                if(cy.get(url).should('exist')){
                    cy.get(url).click({force:true})
                    cy.get('.bike-title').invoke('text').then((text) => {
                        // Log the text content to the Cypress terminal
                        cy.log('Text Content:', text);
                    });
                    cy.wait(5000)
                    cy.clearAllCookies()
                    cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
                }
                cy.get(model).click({force:true});
            }
        }
    })
    it('searchbarcheck',()=>{
        cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
        //rc models 
        cy.get('#searchLisitngs').type('RC')
        const rcmodels= ['.list-group > :nth-child(1)' ,'.list-group > :nth-child(2)','.list-group > :nth-child(3)','.list-group > :nth-child(4)','.list-group > :nth-child(5)']
        const rcvariant=['\n\t\t\t\t\t\t\t\t\tRC 390\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tRC 200\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tRC 125\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tRC 390 GP\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tRC 200 GP\n\t\t\t\t\t\t\t\t']
        for (let i=0;i<rcmodels.length;i++){
            const a=rcmodels[i];
            const b=rcvariant[i]
            cy.get(a).should('have.text',b)
        }
        //duke models 
        cy.get('#searchLisitngs').clear()
        cy.get('#searchLisitngs').type('DUKE')
        const dukemodels=['.list-group > :nth-child(1)' ,'.list-group > :nth-child(2)','.list-group > :nth-child(3)','.list-group > :nth-child(4)']
        const dukevariant=['\n\t\t\t\t\t\t\t\t\tDuke 390\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tDuke 250\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tDuke 200\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tDuke 125\n\t\t\t\t\t\t\t\t']
        for(let j=0;j<dukemodels.length;j++){
            const c=dukemodels[j];
            const d=dukevariant[j];
            cy.get(c).should('have.text',d)
        }
        // adv models
        cy.get('#searchLisitngs').clear()
        cy.get('#searchLisitngs').type('ADV')
        const advmodels=['.list-group > :nth-child(1)' ,'.list-group > :nth-child(2)','.list-group > :nth-child(3)','.list-group > :nth-child(4)']
        const advvariant=['\n\t\t\t\t\t\t\t\t\tAdventure 390\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tAdventure 250\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tAdventure 390 X\n\t\t\t\t\t\t\t\t','\n\t\t\t\t\t\t\t\t\tAdventure 390 Rally\n\t\t\t\t\t\t\t\t']
        for(let k=0;k<advmodels.length;k++){
            const e=advmodels[k];
            const f=advvariant[k];
            cy.get(e).should('have.text',f)
            cy.get(e).click({force:true})
        }
    })
    it('existing user check',()=>{
        cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
        cy.get('.link').click({force:true})
        
        
    })
})