describe('bafl ktm',()=>{
    it('agechecksalaried',()=>{
        cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
        cy.wait(1000)
        cy.get(':nth-child(2) > .img-zoom > .vehicle-img').click({force:true})
        cy.wait(1000)
        // cy.get('.btn.btn-fill.proceed-btn.show').click({force:true})
        cy.wait(1000)
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
        cy.get('#fld_bike_city').type('kakinada')
        cy.get('.pac-container > :nth-child(1)').click( {force: true})
        cy.wait(5000)
        cy.get('#dealers_selection.form-control.form-select').select(1)
        cy.get('#next_button').click({force:true})
        cy.wait(2000)
        cy.get('.mt-3 > .radio-wrapper-new > :nth-child(1) > .resident').click({force:true})
        cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.me-5 > .form-control').type('50000')
        // cy.xpath("//input[@type='date']").type('2002-10-13')
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('2002-10-13')
        cy.get('.mb-1 > .form-check-input').click({force:true})
        cy.get('#getofferbutton').click({force:true})
        cy.wait(2000)
        cy.get('.opt-blocks > :nth-child(1)').type('1')
        cy.get('.opt-blocks > :nth-child(2)').type('2')
        cy.get('.opt-blocks > :nth-child(3)').type('3')
        cy.get('.opt-blocks > :nth-child(4)').type('4')
        //cy.xpath('div[id='otp_block'] button[class='btn btn-main w-100']')
        cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
        cy.wait(3000)
    
        //cy.xpath('//*[@id="back_popup"]').click({force:true})
        cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
        cy.url().should('contain','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_offer_screen?')
    })
    it('agecheckbusiness',()=>{
        cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_form')
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
        cy.get('#fld_bike_city').type('kakinada')
        cy.get('.pac-container > :nth-child(1)').click( {force: true})
        cy.wait(5000)
        cy.get('#dealers_selection.form-control.form-select').select(1)
        cy.get('#next_button').click({force:true})
        cy.wait(2000)
        cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.me-5 > .form-control').type('50000')
        // cy.xpath("//input[@type='date']").type('2002-10-13')
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('2002-10-13')
        cy.get('.mb-1 > .form-check-input').click({force:true})
        cy.get('#getofferbutton').click({force:true})
        cy.wait(2000)
        cy.get('.opt-blocks > :nth-child(1)').type('1')
        cy.get('.opt-blocks > :nth-child(2)').type('2')
        cy.get('.opt-blocks > :nth-child(3)').type('3')
        cy.get('.opt-blocks > :nth-child(4)').type('4')
        //cy.xpath('div[id='otp_block'] button[class='btn btn-main w-100']')
        cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
        cy.wait(3000)
    
        //cy.xpath('//*[@id="back_popup"]').click({force:true})
        cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
        cy.url().should('contain','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_offer_screen?')
    })
    it('agecheckstudent',()=>{
        cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_form')
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
        cy.get('#fld_bike_city').type('kakinada')
        cy.get('.pac-container > :nth-child(1)').click( {force: true})
        cy.wait(5000)
        cy.get('#dealers_selection.form-control.form-select').select(1)
        cy.get('#next_button').click({force:true})
        cy.wait(2000)
        cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(3) > .resident').click({force:true})
        cy.get('.me-5 > .form-control').type('50000')
        // cy.xpath("//input[@type='date']").type('2002-10-13')
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('2002-10-13')
        cy.get('.mb-1 > .form-check-input').click({force:true})
        cy.get('#getofferbutton').click({force:true})
        cy.wait(2000)
        cy.get('.opt-blocks > :nth-child(1)').type('1')
        cy.get('.opt-blocks > :nth-child(2)').type('2')
        cy.get('.opt-blocks > :nth-child(3)').type('3')
        cy.get('.opt-blocks > :nth-child(4)').type('4')
        //cy.xpath('div[id='otp_block'] button[class='btn btn-main w-100']')
        cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
        cy.wait(3000)
    
        //cy.xpath('//*[@id="back_popup"]').click({force:true})
        cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
        cy.url().should('contain','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_offer_screen?')
    })
    it('maxagechecksalaried ',()=>{
        cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_form')
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
        cy.get('#fld_bike_city').type('kakinada')
        cy.get('.pac-container > :nth-child(1)').click( {force: true})
        cy.wait(5000)
        cy.get('#dealers_selection.form-control.form-select').select(1)
        cy.get('#next_button').click({force:true})
        cy.wait(2000)
        cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(1) > .resident').click({force:true})
        cy.get('.me-5 > .form-control').type('50000')
        // cy.xpath("//input[@type='date']").type('1958-10-13')
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('1958-10-13')
        cy.get('.mb-1 > .form-check-input').click({force:true})
        cy.get('#getofferbutton').click({force:true})
        cy.wait(2000)
        cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
        cy.get('.opt-blocks > :nth-child(2)').type('2')
        cy.get('.opt-blocks > :nth-child(3)').type('3')
        cy.get('.opt-blocks > :nth-child(4)').type('4')
       
        cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
        cy.wait(3000)
    
      
        cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
        cy.url().should('contain','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_offer_screen?')
        cy.get('img[src="http://stage_bajajloan.cartradeexchange.com/images/banklogo/bajaj.png"]').should('not.exist')
        
    })
    it('maxagecheckbusiness ',()=>{
        cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_form')
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
        cy.get('#fld_bike_city').type('kakinada')
        cy.get('.pac-container > :nth-child(1)').click( {force: true})
        cy.wait(5000)
        cy.get('#dealers_selection.form-control.form-select').select(1)
        cy.get('#next_button').click({force:true})
        cy.wait(2000)
        cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.me-5 > .form-control').type('50000')
        // cy.xpath("//input[@type='date']").type('1958-10-13')
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('1958-10-13')
        cy.get('.mb-1 > .form-check-input').click({force:true})
        cy.get('#getofferbutton').click({force:true})
        cy.wait(2000)
        cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
        cy.get('.opt-blocks > :nth-child(2)').type('2',{force:true})
        cy.get('.opt-blocks > :nth-child(3)').type('3',{force:true})
        cy.get('.opt-blocks > :nth-child(4)').type('4',{force:true})
       
        cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
        cy.wait(3000)
    
      
        cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
        cy.url().should('contain','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_offer_screen?')
        cy.get('img[src="http://stage_bajajloan.cartradeexchange.com/images/banklogo/bajaj.png"]').should('not.exist')
        
    })
    it('maxagecheckstudent ',()=>{
        cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_form')
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
        cy.get('#fld_bike_city').type('kakinada')
        cy.get('.pac-container > :nth-child(1)').click( {force: true})
        cy.wait(5000)
        cy.get('#dealers_selection.form-control.form-select').select(1)
        cy.get('#next_button').click({force:true})
        cy.wait(2000)
        cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(3) > .resident').click({force:true})
        cy.get('.me-5 > .form-control').type('50000')
        // cy.xpath("//input[@type='date']").type('1958-10-13')
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('1958-10-13')
        cy.get('.mb-1 > .form-check-input').click({force:true})
        cy.get('#getofferbutton').click({force:true})
        cy.url().should('include','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_offer_screen?')
        // cy.get('img[src="http://stage_bajajloan.cartradeexchange.com/images/banklogo/bajaj.png"]').should('not.exist')
        
    })
     it('maxagecheckbusiness+ve ',()=>{
        cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_form')
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
        cy.get('#fld_bike_city').type('kakinada')
        cy.get('.pac-container > :nth-child(1)').click( {force: true})
        cy.wait(5000)
        cy.get('#dealers_selection.form-control.form-select').select(1)
        cy.get('#next_button').click({force:true})
        cy.wait(2000)
        cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.me-5 > .form-control').type('50000')
        // cy.xpath("//input[@type='date']").type('1959-10-13')
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('1959-10-13')
        cy.get('.mb-1 > .form-check-input').click({force:true})
        cy.get('#getofferbutton').click({force:true})
        cy.wait(2000)
        cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
        cy.get('.opt-blocks > :nth-child(2)').type('2')
        cy.get('.opt-blocks > :nth-child(3)').type('3')
        cy.get('.opt-blocks > :nth-child(4)').type('4')
       
        cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
        cy.wait(3000)
        
      
        cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
        cy.url().should('include','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_offer_screen?')
        // cy.get('img[src="http://stage_bajajloan.cartradeexchange.com/images/banklogo/bajaj.png"]').should('exist')
        
    })
    it(' min gross monthly salary check salaried -ve',()=>{
        cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_form')
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
        cy.get('#fld_bike_city').type('kakinada')
        cy.get('.pac-container > :nth-child(1)').click( {force: true})
        cy.wait(5000)
        cy.get('#dealers_selection.form-control.form-select').select(1)
        cy.get('#next_button').click({force:true})
        cy.wait(2000)
        cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(1) > .resident').click({force:true})
        cy.get('.me-5 > .form-control').type('17999')
        // cy.xpath("//input[@type='date']").type('1959-10-13')
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('1959-10-13')
        cy.get('.mb-1 > .form-check-input').click({force:true})
        cy.get('#getofferbutton').click({force:true})
        cy.wait(2000)
        // cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
        // cy.get('.opt-blocks > :nth-child(2)').type('2')
        // cy.get('.opt-blocks > :nth-child(3)').type('3')
        // cy.get('.opt-blocks > :nth-child(4)').type('4')
       
        // cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
        // cy.wait(3000)
        
      
        //cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
        cy.url().should('include','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_offer_screen?')
       // cy.get('img[src="http://stage_bajajloan.cartradeexchange.com/images/banklogo/bajaj.png"]').should('exist')  
    // cy.get('#edit_details_mobile > .fa').click()
    // cy.contains('YES').click({force:true})

})
it(' min gross monthly salary check salaried +ve',()=>{
    cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_form')
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
    cy.get('#fld_bike_city').type('kakinada')
    cy.get('.pac-container > :nth-child(1)').click( {force: true})
    cy.wait(5000)
    cy.get('#dealers_selection.form-control.form-select').select(1)
    cy.get('#next_button').click({force:true})
    cy.wait(2000)
    cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
    cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(1) > .resident').click({force:true})
    cy.get('.me-5 > .form-control').type('18000')
    // cy.xpath("//input[@type='date']").type('1959-10-13')
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('1959-10-13')
    cy.get('.mb-1 > .form-check-input').click({force:true})
    cy.get('#getofferbutton').click({force:true})
    cy.wait(2000)
    cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
    cy.get('.opt-blocks > :nth-child(2)').type('2')
    cy.get('.opt-blocks > :nth-child(3)').type('3')
    cy.get('.opt-blocks > :nth-child(4)').type('4')
   
    cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
    cy.wait(3000)
    
  
    cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
 cy.url().should('include','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_offer_screen?')
 cy.wait(2000)
//  cy.get('img[src="http://stage_bajajloan.cartradeexchange.com/images/banklogo/hdfc.png"]').should('exist')  


})
it(' min gross monthly salary check business +ve',()=>{
    cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_form')
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
    cy.get('#fld_bike_city').type('kakinada')
    cy.get('.pac-container > :nth-child(1)').click( {force: true})
    cy.wait(5000)
    cy.get('#dealers_selection.form-control.form-select').select(1)
    cy.get('#next_button').click({force:true})
    cy.wait(2000)
    cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
    cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
    cy.get('.me-5 > .form-control').type('20833')
    // cy.xpath("//input[@type='date']").type('1959-10-13')
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('1959-10-13')
    cy.get('.mb-1 > .form-check-input').click({force:true})
    cy.get('#getofferbutton').click({force:true})
    cy.wait(2000)
    cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
    cy.get('.opt-blocks > :nth-child(2)').type('2',{force:true})
    cy.get('.opt-blocks > :nth-child(3)').type('3',{force:true})
    cy.get('.opt-blocks > :nth-child(4)').type('4',{force:true})
   cy.wait(1000)
    cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
    cy.wait(3000)
    
  
    cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
 cy.url().should('include','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_offer_screen?')
//  cy.get('img[src="http://stage_bajajloan.cartradeexchange.com/images/banklogo/bajaj.png"]').should('exist')  


})
it(' min gross monthly salary check business -ve',()=>{
            cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_form')
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
            cy.get('#fld_bike_city').type('kakinada')
            cy.get('.pac-container > :nth-child(1)').click( {force: true})
            cy.wait(5000)
            cy.get('#dealers_selection.form-control.form-select').select(1)
            cy.get('#next_button').click({force:true})
            cy.wait(2000)
            cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
            cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
            cy.get('.me-5 > .form-control').type('20832')
            // cy.xpath("//input[@type='date']").type('1959-10-13')
            cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('1959-10-13')
            cy.get('.mb-1 > .form-check-input').click({force:true})
            cy.get('#getofferbutton').click({force:true})
            cy.wait(2000)
             cy.url().should('include','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_offer_screen?')
             cy.get('img[src="http://stage_bajajloan.cartradeexchange.com/images/banklogo/bajaj.png"]').should('not.exist')
            
         
 })
    it(' min gross monthly salary check student -ve',()=>{
        cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_form')
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
        cy.get('#fld_bike_city').type('kakinada')
        cy.get('.pac-container > :nth-child(1)').click( {force: true})
        cy.wait(5000)
        cy.get('#dealers_selection.form-control.form-select').select(1)
        cy.get('#next_button').click({force:true})
        cy.wait(2000)
        cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(3) > .resident').click({force:true})
        cy.get('.me-5 > .form-control').type('17999')
        // cy.xpath("//input[@type='date']").type('1959-10-13')
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('1959-10-13')
        cy.get('.mb-1 > .form-check-input').click({force:true})
        cy.get('#getofferbutton').click({force:true})
        cy.wait(2000)
        cy.url().should('include','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_offer_screen?')
     
})
it(' min gross monthly salary check student +ve',()=>{
    cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_form')
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
    cy.get('#fld_bike_city').type('kakinada')
    cy.get('.pac-container > :nth-child(1)').click( {force: true})
    cy.wait(5000)
    cy.get('#dealers_selection.form-control.form-select').select(1)
    cy.get('#next_button').click({force:true})
    cy.wait(2000)
    cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
    cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(3) > .resident').click({force:true})
    cy.get('.me-5 > .form-control').type('18000')
    // cy.xpath("//input[@type='date']").type('1959-10-13')
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('1959-10-13')
    cy.get('.mb-1 > .form-check-input').click({force:true})
    cy.get('#getofferbutton').click({force:true})
    cy.wait(2000)
    cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
    cy.get('.opt-blocks > :nth-child(2)').type('2',{force:true})
    cy.get('.opt-blocks > :nth-child(3)').type('3',{force:true})
    cy.get('.opt-blocks > :nth-child(4)').type('4',{force:true})
   cy.wait(1000)
    cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
    cy.wait(3000)
    
  
    cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
 cy.url().should('include','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_offer_screen?')
//  cy.get('img[src="http://stage_bajajloan.cartradeexchange.com/images/banklogo/bajaj.png"]').should('exist')  


})
it(' aadhar No salaried',()=>{
    cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_form')
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
    cy.get('#fld_bike_city').type('kakinada')
    cy.get('.pac-container > :nth-child(1)').click( {force: true})
    cy.wait(5000)
    cy.get('#dealers_selection.form-control.form-select').select(1)
    cy.get('#next_button').click({force:true})
    cy.wait(2000)
    cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
    cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(1) > .resident').click({force:true})
    cy.get('.me-5 > .form-control').type('50000')
    // cy.xpath("//input[@type='date']").type('1959-10-13')
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('1959-10-13')
    cy.get('#flexRadioDefault2').click({force:true})
    cy.get('#flexRadioDefault4').click({force:true})

    cy.get('.mb-1 > .form-check-input').click({force:true})
    cy.get('#getofferbutton').click({force:true})
    cy.wait(5000)
//     cy.wait(2000)
//     cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
//     cy.get('.opt-blocks > :nth-child(2)').type('2')
//     cy.get('.opt-blocks > :nth-child(3)').type('3')
//     cy.get('.opt-blocks > :nth-child(4)').type('4')
   
//     cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
//     cy.wait(3000)
    
  
//     cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
  cy.url().should('include','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_reject_screen?')
//  cy.get('img[src="http://stage_bajajloan.cartradeexchange.com/images/banklogo/bajaj.png"]').should('exist')  


})
it(' aadhar No business',()=>{
    cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_form')
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
    cy.get('#fld_bike_city').type('kakinada')
    cy.get('.pac-container > :nth-child(1)').click( {force: true})
    cy.wait(5000)
    cy.get('#dealers_selection.form-control.form-select').select(1)
    cy.get('#next_button').click({force:true})
    cy.wait(2000)
    cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
    cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
    cy.get('.me-5 > .form-control').type('50000')
    // cy.xpath("//input[@type='date']").type('1959-10-13')
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('1959-10-13')
    cy.get('#flexRadioDefault2').click({force:true})
    cy.get('#flexRadioDefault4').click({force:true})

    cy.get('.mb-1 > .form-check-input').click({force:true})
    cy.get('#getofferbutton').click({force:true})
    cy.wait(5000)
//     cy.wait(2000)
//     cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
//     cy.get('.opt-blocks > :nth-child(2)').type('2')
//     cy.get('.opt-blocks > :nth-child(3)').type('3')
//     cy.get('.opt-blocks > :nth-child(4)').type('4')
   
//     cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
//     cy.wait(3000)
    
  
//     cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
  cy.url().should('include','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_reject_screen?')
//  cy.get('img[src="http://stage_bajajloan.cartradeexchange.com/images/banklogo/bajaj.png"]').should('exist')  


})
it(' aadhar No student',()=>{
    cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_form')
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
    cy.get('#fld_bike_city').type('kakinada')
    cy.get('.pac-container > :nth-child(1)').click( {force: true})
    cy.wait(5000)
    cy.get('#dealers_selection.form-control.form-select').select(1)
    cy.get('#next_button').click({force:true})
    cy.wait(2000)
    cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
    cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(3) > .resident').click({force:true})
    cy.get('.me-5 > .form-control').type('50000')
    // cy.xpath("//input[@type='date']").type('1959-10-13')
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('1959-10-13')
    cy.get('#flexRadioDefault2').click({force:true})
    cy.get('#flexRadioDefault4').click({force:true})

    cy.get('.mb-1 > .form-check-input').click({force:true})
    cy.get('#getofferbutton').click({force:true})
    cy.wait(5000)
//     cy.wait(2000)
//     cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
//     cy.get('.opt-blocks > :nth-child(2)').type('2')
//     cy.get('.opt-blocks > :nth-child(3)').type('3')
//     cy.get('.opt-blocks > :nth-child(4)').type('4')
   
//     cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
//     cy.wait(3000)
    
  
//     cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
  cy.url().should('include','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_reject_screen?')
//  cy.get('img[src="http://stage_bajajloan.cartradeexchange.com/images/banklogo/bajaj.png"]').should('exist')  


})

// it(' min tenure and max tenure',()=>{
//     cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_form')
//     cy.get(':nth-child(2) > .img-zoom > .vehicle-img').click({force:true})
//     cy.get('.btn.btn-fill.proceed-btn.show').click({force:true})
//     cy.get('.col5 > .form-control').type('test')
//     cy.get('.col6 > .form-control').type('7')
//     cy.get('.col6 > .form-control').type(userID_Alpha())
//     function userID_Alpha() {
//         var text = "";
//         var possible = "1234567890";

//         for (var i = 0; i < 9; i++)
//         text += possible.charAt(Math.floor(Math.random() * possible.length));

//         return text;
//     }
//     cy.get('.detect-btn').click({force:true})
//     cy.get('#fld_bike_city').type('kakinada')
//     cy.get('.pac-container > :nth-child(1)').click( {force: true})
//     cy.wait(5000)
//     cy.get('#dealers_selection.form-control.form-select').select(1)
//     cy.get('#next_button').click({force:true})
//     cy.wait(2000)
//     cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
//     cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(3) > .resident').click({force:true})
//     cy.get('.me-5 > .form-control').type('50000')
//     cy.xpath("//input[@type='date']").type('2000-10-13')
//     cy.get('.mb-1 > .form-check-input').click({force:true})
//     cy.get('#getofferbutton').click({force:true})
//     cy.wait(2000)
//     cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
//     cy.get('.opt-blocks > :nth-child(2)').type('2')
//     cy.get('.opt-blocks > :nth-child(3)').type('3')
//     cy.get('.opt-blocks > :nth-child(4)').type('4')
   
//     cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
//     cy.wait(3000)
    
  
//     cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
//  cy.url().should('include','https://stage-bajaj-ktmd2c.cartradeexchange.com/d2c_offer_screen?')
//  cy.get('img[src="http://stage_bajajloan.cartradeexchange.com/images/banklogo/bajaj.png"]').should('exist')  
//  cy.get('.accordion-button').click({force:true})
//  cy.get('.t-months > #loan_amount').click({force:true}).type('12')
//  cy.get(':nth-child(2) > .card-body > .emi-price').should('not.exist','N/A')
// })
})