describe('tests',()=>{
it('maritalstatus radiobutton check(single)',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
    cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Mr.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
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
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-50 > #valid_aadhar').click({force:true})
    cy.get('.w-25 > #valid_pan').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    
    cy.get('#pan').type('asdpj6666h')
    const currentDate = new Date();

        // Set the desired date components
        const year = 1966;
        const month = 8; // Months are 0-indexed, so August is 7
        const day = 21;

        // Set the Date object to the desired date
        currentDate.setFullYear(year);
        currentDate.setMonth(month);
        currentDate.setDate(day);
    cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
    // cy.get('.w-25 > #m_status').click({force:true})
    // cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    // cy.get(':nth-child(15) > .p-1 > .error-msg > .step-danger').should('not.exist')

})
it('maritalstatus radiobutton check(married)',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
    cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Mr.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
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
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-50 > #valid_aadhar').click({force:true})
    cy.get('.w-25 > #valid_pan').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    
    cy.get('#pan').type('asdpj6666h')
    const currentDate = new Date();

        // Set the desired date components
        const year = 1966;
        const month = 8; // Months are 0-indexed, so August is 7
        const day = 21;

        // Set the Date object to the desired date
        currentDate.setFullYear(year);
        currentDate.setMonth(month);
        currentDate.setDate(day);
    cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
    // cy.get('.w-50 > #m_status').click({force:true})
    // cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    // cy.get(':nth-child(15) > .p-1 > .error-msg > .step-danger').should('not.exist')

})
it('maritalstatus mandatory validation check',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
    cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Mr.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
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
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-50 > #valid_aadhar').click({force:true})
    cy.get('.w-25 > #valid_pan').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    
    cy.get('#pan').type('asdpj6666h')
    const currentDate = new Date();

        // Set the desired date components
        const year = 1966;
        const month = 8; // Months are 0-indexed, so August is 7
        const day = 21;

        // Set the Date object to the desired date
        currentDate.setFullYear(year);
        currentDate.setMonth(month);
        currentDate.setDate(day);
    cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
   // cy.get('.w-50 > #m_status').click({force:true})
    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    // cy.get(':nth-child(15) > .p-1 > .error-msg > .step-danger').should('exist')

})
it('idproof (when no aadhar)mandatory validation check',()=>{
    cy.visit("https://stage_bajajloan.cartradeexchange.com/")
    cy.get('[style="position: relative;"] > #mobile').type('7730066959')
    cy.get('.login100-form-btn').click({force:true})
    cy.get('#otp').type('123456')
    cy.get('.submit_button').click({force:true})
    cy.wait(1000)
    
    cy.get('#model').select('Maxima Z')
    cy.get('#variant').select('LPG')
    cy.get('#on_road_price').type('300000')
    cy.get('#title').select('Mr.')
    cy.get('#fname').type('pav')
    cy.get('#lname').type('ani') 
cy.get('.p-1 > #mobile').type('8')
    
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
 
    cy.get('#verify_otp').click({force:true})
    cy.get('.w-50 > #valid_aadhar').click({force:true})
    cy.get('.w-25 > #valid_pan').click({force:true})
    cy.wait(1000)
    
    
    cy.get('#pan').type('asdpj6666h',{force:true})
    const currentDate = new Date();

        // Set the desired date components
        const year = 1966;
        const month = 8; // Months are 0-indexed, so August is 7
        const day = 21;

        // Set the Date object to the desired date
        currentDate.setFullYear(year);
        currentDate.setMonth(month);
        currentDate.setDate(day);
    cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
//    cy.get('.w-50 > #m_status').click({force:true})

//    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
//   cy.get('.step-danger').should('exist')
})
})