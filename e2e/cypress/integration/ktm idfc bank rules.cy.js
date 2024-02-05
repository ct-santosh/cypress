

describe('my test',()=>{
    it('income 12 ten 19',()=>{
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
        cy.clearCookies();
        cy.get('.detect-btn').click({force:true})
        cy.wait(3000)
        //cy.get('.detect-btn').click({force:true})
        cy.get('.detect-btn').click({force:true})
        cy.get('#fld_bike_city').type('kakinada')
        cy.get('.pac-container > :nth-child(1)').click( {force: true})
        cy.wait(5000)
        cy.get('#dealers_selection.form-control.form-select').select(1)
        cy.get('#next_button').click({force:true})
          
        cy.wait(6000)
        cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
        cy.get('.me-5 > .form-control').type('20835',{force:true})
        // cy.xpath("//input[@type='date']").type('2001-12-13',{force:true})
        cy.xpath("//input[@type='date']").type('2001-12-13',{force:true})
        cy.get('.mb-1 > .form-check-input').click({force:true})
        cy.get('#getofferbutton').click({force:true})
        
        cy.wait(2000)
        cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
        cy.get('.opt-blocks > :nth-child(2)').type('2',{force:true})
        cy.get('.opt-blocks > :nth-child(3)').type('3',{force:true})
        cy.get('.opt-blocks > :nth-child(4)').type('4',{force:true})
        //cy.xpath('div[id='otp_block'] button[class='btn btn-main w-100']')
        cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
        cy.wait(8000)
        cy.get('.accordion-button').click({force:true})
        cy.wait(2000)
        cy.get('.rupee-icon > #loan_amount').clear().type(143000,{force:true})
        cy.get('.t-months > #loan_amount').clear({force:true}).type(12,{force:true})
        cy.get(':nth-child(2) > .card-body > .emi-price').should('contain',"9,804")
        cy.get(':nth-child(2) > .card-body > .fee-price').should('contain',"4,980")
        cy.get(':nth-child(2) > .card-body > .inte-price').should('contain',"1,09,963")
        


    })




  it('test1',()=>{
      cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
      cy.get(':nth-child(2) > .img-zoom > .vehicle-img').click({force:true})
    //   cy.get('.btn.btn-fill.proceed-btn.show').click({force:true})
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
      cy.get('.me-5 > .form-control').type('20835',{force:true})
    //   cy.xpath("//input[@type='date']").type('2001-12-13',{force:true})
    cy.xpath("//input[@type='date']").type('2001-12-13',{force:true})
      cy.get('.mb-1 > .form-check-input').click({force:true})
      cy.get('#getofferbutton').click({force:true})
      cy.wait(4000)
      cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
      cy.get('.opt-blocks > :nth-child(2)').type('2',{force:true})
      cy.get('.opt-blocks > :nth-child(3)').type('3',{force:true})
      cy.get('.opt-blocks > :nth-child(4)').type('4',{force:true})
      //cy.xpath('div[id='otp_block'] button[class='btn btn-main w-100']')
      cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
      cy.wait(8000)
      cy.get('.accordion-button').click({force:true})
      cy.wait(2000)
      cy.get('.rupee-icon > #loan_amount').clear().type(143000,{force:true})
      cy.get('.t-months > #loan_amount').clear({force:true}).type(19,{force:true})
      cy.get(':nth-child(2) > .card-body > .emi-price').should('contain',"6,429")
      cy.get(':nth-child(2) > .card-body > .fee-price').should('contain',"4,980")
      cy.get(':nth-child(2) > .card-body > .inte-price').should('contain',"1,09,963")
      


  })




  it('test1',()=>{
      cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
      cy.get(':nth-child(2) > .img-zoom > .vehicle-img').click({force:true})
      cy.get('.btn.btn-fill.proceed-btn.show').click({force:true})
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
          cy.clearCookies();
          cy.wait(5000)
          cy.get('#dealers_selection.form-control.form-select').select(1)
          cy.get('#next_button').click({force:true})
          cy.wait(2000)
      cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
      cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
      cy.get('.me-5 > .form-control').type('20835',{force:true})
    //   cy.xpath("//input[@type='date']").type('2001-12-13',{force:true})
    cy.xpath("//input[@type='date']").type('2001-12-13',{force:true})
      cy.get('.mb-1 > .form-check-input').click({force:true})
      cy.get('#getofferbutton').click({force:true})
      cy.wait(2000)
      cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
      cy.get('.opt-blocks > :nth-child(2)').type('2',{force:true})
      cy.get('.opt-blocks > :nth-child(3)').type('3',{force:true})
      cy.get('.opt-blocks > :nth-child(4)').type('4',{force:true})
      //cy.xpath('div[id='otp_block'] button[class='btn btn-main w-100']')
      cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
      cy.wait(8000)
      cy.get('.accordion-button').click({force:true})
      cy.wait(2000)
      cy.get('.rupee-icon > #loan_amount').clear().type(143000,{force:true})
      cy.get('.t-months > #loan_amount').clear({force:true}).type(31,{force:true})
      cy.get(':nth-child(2) > .card-body > .emi-price').should('contain',"4,185")
      cy.get(':nth-child(2) > .card-body > .fee-price').should('contain',"4,980")
      cy.get(':nth-child(2) > .card-body > .inte-price').should('contain',"1,09,963")
      


  })




  it('test1',()=>{
      cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
      cy.get(':nth-child(2) > .img-zoom > .vehicle-img').click({force:true})
      cy.get('.btn.btn-fill.proceed-btn.show').click({force:true})
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
          cy.clearCookies();
          cy.wait(5000)
          cy.get('#dealers_selection.form-control.form-select').select(1)
          cy.get('#next_button').click({force:true})
          cy.wait(2000)
      cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
      cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
      cy.get('.me-5 > .form-control').type('20835',{force:true})
    //   cy.xpath("//input[@type='date']").type('2001-12-13',{force:true})
    cy.xpath("//input[@type='date']").type('2001-12-13',{force:true})
      cy.get('.mb-1 > .form-check-input').click({force:true})
      cy.get('#getofferbutton').click({force:true})
      cy.wait(2000)
      cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
      cy.get('.opt-blocks > :nth-child(2)').type('2',{force:true})
      cy.get('.opt-blocks > :nth-child(3)').type('3',{force:true})
      cy.get('.opt-blocks > :nth-child(4)').type('4',{force:true})
      //cy.xpath('div[id='otp_block'] button[class='btn btn-main w-100']')
      cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
      cy.wait(8000)
      cy.get('.accordion-button').click({force:true})
      cy.wait(2000)
      cy.get('.rupee-icon > #loan_amount').clear().type(143000,{force:true})
      cy.get('.t-months > #loan_amount').clear({force:true}).type(43,{force:true})
      cy.get(':nth-child(2) > .card-body > .emi-price').should('contain',"3,194")
      cy.get(':nth-child(2) > .card-body > .fee-price').should('contain',"4,980")
      cy.get(':nth-child(2) > .card-body > .inte-price').should('contain',"1,09,963")
      

    })

  it('income 50 ten 12',()=>{
    cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
    cy.get(':nth-child(2) > .img-zoom > .vehicle-img').click({force:true})
    cy.get('.btn.btn-fill.proceed-btn.show').click({force:true})
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
        cy.clearCookies();
        cy.wait(5000)
        cy.get('#dealers_selection.form-control.form-select').select(1)
        cy.get('#next_button').click({force:true})
        cy.wait(2000)
    cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
    cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
    cy.get('.me-5 > .form-control').type('41668',{force:true})
    // cy.xpath("//input[@type='date']").type('2001-12-13',{force:true})
    cy.xpath("//input[@type='date']").type('2001-12-13',{force:true})
    cy.get('.mb-1 > .form-check-input').click({force:true})
    cy.get('#getofferbutton').click({force:true})
    cy.wait(2000)
    cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
    cy.get('.opt-blocks > :nth-child(2)').type('2',{force:true})
    cy.get('.opt-blocks > :nth-child(3)').type('3',{force:true})
    cy.get('.opt-blocks > :nth-child(4)').type('4',{force:true})
    //cy.xpath('div[id='otp_block'] button[class='btn btn-main w-100']')
    cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
    cy.wait(8000)
    cy.get('.accordion-button').click({force:true})
    cy.wait(2000)
    cy.get('.rupee-icon > #loan_amount').clear().type(143000,{force:true})
    cy.get('.t-months > #loan_amount').clear({force:true}).type(12,{force:true})
    cy.get(':nth-child(2) > .card-body > .emi-price').should('contain',"9,804")
    cy.get(':nth-child(2) > .card-body > .fee-price').should('contain',"4,980")
    cy.get(':nth-child(2) > .card-body > .inte-price').should('contain',"1,09,963")
    


})



it('test1',()=>{
  cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
  cy.get(':nth-child(2) > .img-zoom > .vehicle-img').click({force:true})
  cy.get('.btn.btn-fill.proceed-btn.show').click({force:true})
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
      cy.clearCookies();
      cy.wait(5000)
      cy.get('#dealers_selection.form-control.form-select').select(1)
      cy.get('#next_button').click({force:true})
      cy.wait(2000)
  cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
  cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
  cy.get('.me-5 > .form-control').type('41668',{force:true})
//   cy.xpath("//input[@type='date']").type('2001-12-13',{force:true})
  cy.xpath("//input[@type='date']").type('2001-12-13',{force:true})
  cy.get('.mb-1 > .form-check-input').click({force:true})
  cy.get('#getofferbutton').click({force:true})
  cy.wait(2000)
  cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
  cy.get('.opt-blocks > :nth-child(2)').type('2',{force:true})
  cy.get('.opt-blocks > :nth-child(3)').type('3',{force:true})
  cy.get('.opt-blocks > :nth-child(4)').type('4',{force:true})
  //cy.xpath('div[id='otp_block'] button[class='btn btn-main w-100']')
  cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
  cy.wait(8000)
  cy.get('.accordion-button').click({force:true})
  cy.wait(2000)
  cy.get('.rupee-icon > #loan_amount').clear().type(143000,{force:true})
  cy.get('.t-months > #loan_amount').clear({force:true}).type(19,{force:true})
  cy.get(':nth-child(2) > .card-body > .emi-price').should('contain',"6,429")
  cy.get(':nth-child(2) > .card-body > .fee-price').should('contain',"4,980")
  cy.get(':nth-child(2) > .card-body > .inte-price').should('contain',"1,09,963")
  


})



it('test1',()=>{
  cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
  cy.get(':nth-child(2) > .img-zoom > .vehicle-img').click({force:true})
  cy.get('.btn.btn-fill.proceed-btn.show').click({force:true})
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
      cy.clearCookies();
      cy.wait(5000)
      cy.get('#dealers_selection.form-control.form-select').select(1)
      cy.get('#next_button').click({force:true})
      cy.wait(2000)
  cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
  cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
  cy.get('.me-5 > .form-control').type('41668',{force:true})
//   cy.xpath("//input[@type='date']").type('2001-12-13',{force:true})
  cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('2001-12-13',{force:true})
  cy.get('.mb-1 > .form-check-input').click({force:true})
  cy.get('#getofferbutton').click({force:true})
  cy.wait(2000)
  cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
  cy.get('.opt-blocks > :nth-child(2)').type('2',{force:true})
  cy.get('.opt-blocks > :nth-child(3)').type('3',{force:true})
  cy.get('.opt-blocks > :nth-child(4)').type('4',{force:true})
  //cy.xpath('div[id='otp_block'] button[class='btn btn-main w-100']')
  cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
  cy.wait(8000)
  cy.get('.accordion-button').click({force:true})
  cy.wait(2000)
  cy.get('.rupee-icon > #loan_amount').clear().type(143000,{force:true})
  cy.get('.t-months > #loan_amount').clear({force:true}).type(31,{force:true})
  cy.get(':nth-child(2) > .card-body > .emi-price').should('contain',"4,185")
  cy.get(':nth-child(2) > .card-body > .fee-price').should('contain',"4,980")
  cy.get(':nth-child(2) > .card-body > .inte-price').should('contain',"1,09,963")
  


})



it('test1',()=>{
  cy.visit('https://stage-bajaj-ktmd2c.cartradeexchange.com/')
  cy.get(':nth-child(2) > .img-zoom > .vehicle-img').click({force:true})
  cy.get('.btn.btn-fill.proceed-btn.show').click({force:true})
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
      cy.clearCookies();
      cy.wait(5000)
      cy.get('#dealers_selection.form-control.form-select').select(1)
      cy.get('#next_button').click({force:true})
      cy.wait(2000)
  cy.get('.mt-3 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
  cy.get('.resident-out.mt-4 > .radio-wrapper-new > :nth-child(2) > .resident').click({force:true})
  cy.get('.me-5 > .form-control').type('41668',{force:true})
//   cy.xpath("//input[@type='date']").type('2001-12-13',{force:true})
cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('2001-12-13',{force:true})
  cy.get('.mb-1 > .form-check-input').click({force:true})
  cy.get('#getofferbutton').click({force:true})
  cy.wait(2000)
  cy.get('.opt-blocks > :nth-child(1)').type('1',{force:true})
  cy.get('.opt-blocks > :nth-child(2)').type('2',{force:true})
  cy.get('.opt-blocks > :nth-child(3)').type('3',{force:true})
  cy.get('.opt-blocks > :nth-child(4)').type('4',{force:true})
  //cy.xpath('div[id='otp_block'] button[class='btn btn-main w-100']')
  cy.get('#otp_block > div > div.col-12.mt-3 > button').click({force:true})
  cy.wait(8000)
  cy.get('.accordion-button').click({force:true})
  cy.wait(2000)
  cy.get('.rupee-icon > #loan_amount').clear().type(143000,{force:true})
  cy.get('.t-months > #loan_amount').clear({force:true}).type(43,{force:true})
  cy.get(':nth-child(2) > .card-body > .emi-price').should('contain',"3,194")
  cy.get(':nth-child(2) > .card-body > .fee-price').should('contain',"4,980")
  cy.get(':nth-child(2) > .card-body > .inte-price').should('contain',"1,09,963")
  


})


})








