describe('testing',()=>{
  it('editemi',()=>{
  cy.visit("https://stage_bajajloan.cartradeexchange.com/")
  cy.get('[style="position: relative;"] > #mobile').type('7730066959')
  cy.get('.login100-form-btn').click({force:true})
  cy.get('#otp').type('123456')
  cy.get('.submit_button').click({force:true})
  cy.wait(1000)
  
  cy.get('#model').select('Maxima Z')
  cy.get('#variant').select('LPG')
  cy.get('#on_road_price').type(300000)
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
   cy.get('.w-25 > #valid_aadhar').click({force:true})
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
//  cy.get('.w-50 > #m_status').click({force:true})

 cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Owned by Family',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').type('postal colony',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').type('burial grounds',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').type('kakinada')
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').type('533001',{force:true})
 cy.get('#current_since').type('3',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(1) > .p-1 > .select-bg > .form-select').select('First Time Buyer')
 cy.get(':nth-child(2) > .p-1 > .select-bg > .form-select').select('Under Graduate')
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(3) > .p-1 > .form-control').type('50000')
 cy.get('.w-25 > #payment_type').click({force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(7) > .p-1 > .form-check').click({force:true})
 cy.get('#flexCheckDefault3').click({force:true})
 cy.get('.px-3 > :nth-child(2) > .step-footer > .btn').click({force:true})
 cy.wait(6000)
 cy.get('.editemi-blk').click({force:true})
 console.log(cy.get(':nth-child(1) > .value'))
 cy.get('.t-months > #loan_amount').click({force:true})

/cy.get('.t-months > #loan_amount').clear().type(12)

 cy.get('.rupee-icon > #loan_amount').type(200000)
// { cy.get(('.line12')) // Replace with your selector
//  .invoke('val') // Invoke the 'val' method to get the value of the input field
//  .then((inputValue) => {
//    // 'inputValue' contains the value of the input field as a string
//    cy.log('Fetched Value:', inputValue);

//    // You can use 'inputValue' for further assertions or operations
//    // For example, you can assert that it contains a specific value
//    cy.wrap(inputValue).should('include', 'expected value');
//  });
 // } one code
//  var loanamount = orp - dp ;
//  cy. log(loanamount); 
//  cy.get(('.line12')).invoke('val').then((value) => {
//   // 'value' contains the value of the input field
//   cy.log('Fetched Value:', value);
// });


const loanAmount = 100000;
//  var loanAmount = a - 200000;
 var interestRate = 22.50;
 interestRate=interestRate/1200;
 const loanTenure = 12;
 // Assert the calculated EMI matches the expected result
 cy.get(':nth-child(1) > .value').should('contain',calculateExpectedEMI(loanAmount, interestRate, loanTenure));

//'₹ 26,274'
function calculateExpectedEMI(loanAmount, interestRate, loanTenure) {

var EMI = loanAmount * (interestRate/1200) * (1 + (interestRate/1200)**loanTenure)/ (((1 +( interestRate/1200))**loanTenure) - 1)
var EMI =Math.round(loanAmount*interestRate*((1+interestRate)**loanTenure )/( ((1+interestRate)**loanTenure)-1));
cy.log(EMI)

return '₹' + ' '+ EMI.toLocaleString();
}
})
})