describe('bajaj',{ timeout: 5000 },()=>{
    beforeEach(() => {
        // Clear cookies before each test
        cy.clearCookies();
      });
//     it('Empty lastname',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('swathi')
//     cy.get('#lname').type(' ')
//     cy.get(':nth-child(13) > .p-1 > .error-msg > .step-danger').should('exist')
//     // cy.get('.p-1 > .btn').click({force:true})
     
// })
// it('Lastname mandatory validation check',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//     cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('swathi')
//     // cy.get('#lname').type(' ')
//     cy.get('.p-1 > .btn').click({force:true})
//     cy.get(':nth-child(13) > .p-1 > .error-msg > .step-danger').should('exist')    
// })
// it('valid lastname and firstname',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > .btn').click({force:true})
//     cy.get(':nth-child(13) > .p-1 > .error-msg > .step-danger').should('not.exist')    
// })
// it('Customermobile mandatory validation check',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > .btn').click({force:true})
//     cy.get(':nth-child(14) > .p-1 > .error-msg > .step-danger').should('exist')
// })
// it('Customer mobile with alphabets',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('sadsadas')
//     cy.get('.p-1 > .btn').click({force:true})         
// })
// it('mobileno. started with 0',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('0347874332')
//     cy.get('.step-danger').should('exist')
//     cy.get('.p-1 > .btn').click({force:true})         
// })
// it('9 digits mobile number',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('956565565')//9numbers
//     cy.get('.step-danger').should('exist')
//     cy.get('.p-1 > .btn').click({force:true})         
// })
// it('mobileno. start with 1',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('1565655650')//start with 1
//     cy.get('.step-danger').should('exist')
//     cy.get('.p-1 > .btn').click({force:true})         
// })
// it('mobileno. start with 2',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('2565655650')//start with 2
//     cy.get('.step-danger').should('exist')
//     cy.get('.p-1 > .btn').click({force:true})         
// })
// it('mobileno. start with 3',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('3565655650')//start with 3
//     cy.get('.step-danger').should('exist')
//     cy.get('.p-1 > .btn').click({force:true})         
// })
// it('mobileno. start with 4',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('465655650')//start with 4
//     cy.get('.step-danger').should('exist')
//     cy.get('.p-1 > .btn').click({force:true})         
// })
// it('mobileno. start with 5',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('5565655650')//start with 5
//     cy.get('.step-danger').should('exist')
//     cy.get('.p-1 > .btn').click({force:true})         
// })
// it('mobileno. start with 6',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('6565655650')//start with 6
//     cy.get('.step-danger').should('not.exist')
//     cy.get('.p-1 > .btn').click({force:true})         
// })
// it('mobileno. start with 7',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('7565655650')//start with 7
//     cy.get('.step-danger').should('not.exist')
//     cy.get('.p-1 > .btn').click({force:true})         
// })
// it('mobileno. start with 8',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('8565655650')//start with 8
//     cy.get('.step-danger').should('not.exist')
//     cy.get('.p-1 > .btn').click({force:true})         
// })
// it('mobileno. start with 9',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('9565655650')//start with 9
//     cy.get('.step-danger').should('not.exist')
//     cy.get('.p-1 > .btn').click({force:true})   
// })
// it('empty otpverification',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('9565655650')
//     cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type(' ')
//     cy.get('#verify_otp').click({force:true})
//     cy.get('.step-danger').should('exist')
// })
// it('otp with alphabets',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('9565655650')
//     cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type('rryy')
//     cy.get('#verify_otp').click({force:true})
//     cy.get('.step-danger').should('exist')
// })
// it('otp with less numbers(3)',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('9565655650')
//     cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type('123')   
//     cy.get('.step-danger').should('exist')
//     cy.get('#verify_otp').click({force:true})
// })
// it('otp with 1 incorrect number',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('9565655650')
//     cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type('1230')
//     cy.get('#verify_otp').click({force:true})
//     cy.get('.step-danger').should('exist')
// })
// it('valid otp(should not show any validation)',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('9565655650')
//     cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type('1234')
//     cy.get('.step-danger').should('not.exist')
//     cy.get('#verify_otp').click({force:true})
// })
// it('email verification',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//     cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('8')
//         // cy.get('#mobile').type('8')
//         cy.get('.p-1 > #mobile').type(userID_Alpha())
//         function userID_Alpha() {
//             var text = "";
//             var possible = "1234567890";

//             for (var i = 0; i < 9; i++)
//             text += possible.charAt(Math.floor(Math.random() * possible.length));

//             return text;
//         }
//     cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type('1234')
//     cy.get('.step-danger').should('not.exist')
//     cy.get('#verify_otp').click({force:true})
//     cy.get('#email').type('pavanigmailcom')
//     cy.get('.step-danger').should('exist')
//     cy.get('#email').clear()
//     cy.get('#email').type('pavani@gmailcom')
//     cy.get('.step-danger').should('exist')
//     cy.get('#email').clear()
//     cy.get('#email').type('pavanigmail.com')
//     cy.get('.step-danger').should('exist')
//     cy.get('#email').clear()
//     cy.get('#email').type('pavani@gmail.com')
// })
// it('aadhar radio buttons check(yes)',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').should('exist')
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('8')
//         // cy.get('#mobile').type('8')
//         cy.get('.p-1 > #mobile').type(userID_Alpha())
//         function userID_Alpha() {
//             var text = "";
//             var possible = "1234567890";

//             for (var i = 0; i < 9; i++)
//             text += possible.charAt(Math.floor(Math.random() * possible.length));

//             return text;
//         }
//         cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type('1234')
//     cy.get('#verify_otp').click({force:true})
//     cy.get('#email').type('pavani@gmail.com')
//     cy.get('.w-25 > #valid_aadhar').click({force:true})
// })
// it('aadhar radio buttons check(no)',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
// cy.get('.p-1 > #mobile').type('8')
//         // cy.get('#mobile').type('8')
//         cy.get('.p-1 > #mobile').type(userID_Alpha())
//         function userID_Alpha() {
//             var text = "";
//             var possible = "1234567890";

//             for (var i = 0; i < 9; i++)
//             text += possible.charAt(Math.floor(Math.random() * possible.length));

//             return text;
//         }
//         cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type('1234')
//     cy.get('#verify_otp').click({force:true})
//     cy.get('#email').type('pavani@gmail.com')
//     cy.get('.w-50 > #valid_aadhar').click({force:true})
// })
// it('aadhar mandatory validation check',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
// cy.get('.p-1 > #mobile').type('8')
//        // // cy.get('#mobile').type('8')
//         cy.get('.p-1 > #mobile').type(userID_Alpha())
//         function userID_Alpha() {
//             var text = "";
//             var possible = "1234567890";

//             for (var i = 0; i < 9; i++)
//             text += possible.charAt(Math.floor(Math.random() * possible.length));

//             return text;
//         }
//         cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type('1234')
 
//     cy.get('#verify_otp').click({force:true})
//     cy.get('#email').type('pavani@gmail.com')
//     // cy.get('.w-50 > #valid_aadhar').click({force:true})
//     cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
//     cy.get(':nth-child(8) > .p-1 > .error-msg > .step-danger').should('exist')
// })
// it('Pan radio button check(yes)',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//      cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('8')
//         cy.get('.p-1 > #mobile').type(userID_Alpha())
//         function userID_Alpha() {
//             var text = "";
//             var possible = "1234567890";

//             for (var i = 0; i < 9; i++)
//             text += possible.charAt(Math.floor(Math.random() * possible.length));

//             return text;
//         }
//         cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type('1234')
//     cy.get('#verify_otp').click({force:true})
//     cy.get('#email').type('pavani@gmail.com')
//     cy.get('.w-50 > #valid_aadhar').click({force:true})
//     cy.get('.w-25 > #valid_pan').click({force:true})
//     cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
// })
// it('Pan radio button check(no)',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//     cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Ms.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('8')
    
//   cy.get('.p-1 > #mobile').type(userID_Alpha())
//   function userID_Alpha() {
//       var text = "";
//       var possible = "1234567890";

//       for (var i = 0; i < 9; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));

//       return text;
// }
// cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type('1234')
 
//     cy.get('#verify_otp').click({force:true})
//     cy.get('#email').type('pavani@gmail.com')
//     cy.get('.w-50 > #valid_aadhar').click({force:true})
//     cy.get('.w-50 > #valid_pan').click({force:true})
//     cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
// })
// it('pan mandatory validation check',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//     cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Mr.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('8')
    
//   cy.get('.p-1 > #mobile').type(userID_Alpha())
//   function userID_Alpha() {
//       var text = "";
//       var possible = "1234567890";

//       for (var i = 0; i < 9; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));

//       return text;
// }
// cy.get('.p-1 > .btn').click({force:true})

//     cy.get('#otp').type('1234')
 
//     cy.get('#verify_otp').click({force:true})
//     cy.get('#email').type('pavani@gmail.com')
//     cy.get('.w-50 > #valid_aadhar').click({force:true})
//     // cy.get('.w-25 > #valid_pan')
//     cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
//     cy.get(':nth-child(9) > .p-1 > .error-msg > .step-danger').should('exist')
// })
// it('Valid pan',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//     cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Mr.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('8')
//     cy.get('.p-1 > #mobile').type(userID_Alpha())
//      function userID_Alpha() {
//       var text = "";
//       var possible = "1234567890";

//       for (var i = 0; i < 9; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));

//       return text;
// }
// cy.get('.p-1 > .btn').click({force:true})

//     cy.get('#otp').type('1234')
 
//     cy.get('#verify_otp').click({force:true})
//     cy.get('#email').type('pavani@gmail.com')
//     cy.get('.w-50 > #valid_aadhar').click({force:true})
//     cy.get('.w-25 > #valid_pan').click({force:true})
//     cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
//     cy.get('#pan').type('asdpf4444d')
// })
// it('Invalid pan',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//     cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000) 
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Mr.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('8')
//     cy.get('.p-1 > #mobile').type(userID_Alpha())
//      function userID_Alpha() {
//       var text = "";
//       var possible = "1234567890";

//       for (var i = 0; i < 9; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));

//       return text;
// }
//     cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type('1234')
//     cy.get('#verify_otp').click({force:true})
//     cy.get('#email').type('pavani@gmail.com')
//     cy.get('.w-50 > #valid_aadhar').click({force:true})
//     cy.get('.w-25 > #valid_pan').click({force:true})
//     cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true}) 
//     cy.get('#pan').type('asd56564444d')
//     cy.get(':nth-child(10) > .p-1 > .error-msg > .step-danger').should('exist')
// })
// it('Dob with min. age',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//     cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Mr.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
// cy.get('.p-1 > #mobile').type('8')
    
//   cy.get('.p-1 > #mobile').type(userID_Alpha())
//   function userID_Alpha() {
//       var text = "";
//       var possible = "1234567890";

//       for (var i = 0; i < 9; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));

//       return text;
// }
// cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type('1234')
//     cy.get('#verify_otp').click({force:true})
//     cy.get('#email').type('pavani@gmail.com')
//     cy.get('.w-50 > #valid_aadhar').click({force:true})
//     cy.get('.w-25 > #valid_pan').click({force:true})
//     cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    
//     cy.get('#pan').type('asdpj6666h')
//     const currentDate = new Date();

//         // Set the desired date components
//         const year = 2001;
//         const month = 8; // Months are 0-indexed, so August is 7
//         const day = 21;

//         // Set the Date object to the desired date
//         currentDate.setFullYear(year);
//         currentDate.setMonth(month);
//         currentDate.setDate(day);
//         cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
// })
// it('Dob with max.age',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//     cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Mr.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
// cy.get('.p-1 > #mobile').type('8')
    
//   cy.get('.p-1 > #mobile').type(userID_Alpha())
//   function userID_Alpha() {
//       var text = "";
//       var possible = "1234567890";

//       for (var i = 0; i < 9; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));

//       return text;
// }
// cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type('1234')
//     cy.get('#verify_otp').click({force:true})
//     cy.get('#email').type('pavani@gmail.com')
//     cy.get('.w-50 > #valid_aadhar').click({force:true})
//     cy.get('.w-25 > #valid_pan').click({force:true})
//     cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    
//     cy.get('#pan').type('asdpj6666h')
//     const currentDate = new Date();

//         // Set the desired date components
//         const year = 1966;
//         const month = 8; // Months are 0-indexed, so August is 7
//         const day = 21;

//         // Set the Date object to the desired date
//         currentDate.setFullYear(year);
//         currentDate.setMonth(month);
//         currentDate.setDate(day);
//         cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});

// })
// it('Dob mandatory validation check',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//     cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Mr.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
// cy.get('.p-1 > #mobile').type('8')
    
//   cy.get('.p-1 > #mobile').type(userID_Alpha())
//   function userID_Alpha() {
//       var text = "";
//       var possible = "1234567890";

//       for (var i = 0; i < 9; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));

//       return text;
// }
// cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type('1234')
//     cy.get('#verify_otp').click({force:true})
//     cy.get('#email').type('pavani@gmail.com')
//     cy.get('.w-50 > #valid_aadhar').click({force:true})
//     cy.get('.w-25 > #valid_pan').click({force:true})
//     cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
    
//     cy.get('#pan').type('asdpj6666h')
//     // const currentDate = new Date();

//     //     // Set the desired date components
//     //     const year = 1966;
//     //     const month = 8; // Months are 0-indexed, so August is 7
//     //     const day = 21;

//     //     // Set the Date object to the desired date
//     //     currentDate.setFullYear(year);
//     //     currentDate.setMonth(month);
//     //     currentDate.setDate(day);
//     //     cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
//     cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
//     cy.get('#dob_error').should('exist')
// })
// it('idproof (when no aadhar)mandatory validation check',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//     cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     // cy.wait(1000)
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Mr.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
// cy.get('.p-1 > #mobile').type('8')
    
//   cy.get('.p-1 > #mobile').type(userID_Alpha())
//   function userID_Alpha() {
//       var text = "";
//       var possible = "1234567890";

//       for (var i = 0; i < 9; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));

//       return text;
// }
// cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type('1234')
//     cy.get('#verify_otp').click({force:true})
//     cy.get('#email').type('pavani@gmail.com')
//    // cy.get('.w-50 > #valid_aadhar').click({force:true})
//     cy.get('.w-25 > #valid_pan').click({force:true})
//     // cy.wait(1000)
//     cy.get('#pan').type('asdpj6666h',{force:true})
//     const currentDate = new Date();

//         // Set the desired date components
//         const year = 1966;
//         const month = 8; // Months are 0-indexed, so August is 7
//         const day = 21;

//         // Set the Date object to the desired date
//         currentDate.setFullYear(year);
//         currentDate.setMonth(month);
//         currentDate.setDate(day);
//     cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
//     cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
//     cy.get('.step-danger').should('exist')
// })
// it('residential details validation check',()=>{
// //   cy.visit("https://stage_bajajloan.cartradeexchange.com/")
// cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//   cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//   cy.get('.login100-form-btn').click({force:true})
//   cy.get('#otp').type('123456')
//   cy.get('.submit_button').click({force:true})
//   cy.wait(1000)
//   cy.get('#make').select('KTM')
//   cy.get('#model').should('exist')
//   cy.get('#model').select('ADV')
//   cy.get('#variant').select('390')
//   cy.get('#title').select('Mr.')
//   cy.get('#fname').type('pav')
//   cy.get('#lname').type('ani') 
// cy.get('.p-1 > #mobile').type('8')
    
//   cy.get('.p-1 > #mobile').type(userID_Alpha())
//   function userID_Alpha() {
//       var text = "";
//       var possible = "1234567890";

//       for (var i = 0; i < 9; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));

//       return text;
// }
// cy.get('.p-1 > .btn').click({force:true})
// cy.wait(1000)
//   cy.get('#otp').type('1234')
//   cy.get('#verify_otp').click({force:true})
//   cy.get('#email').type('pavani@gmail.com')
//   cy.get('.w-25 > #valid_aadhar').click({force:true})
//   cy.get('.w-25 > #valid_pan').click({force:true})
//   cy.wait(1000)
//   cy.get('#pan').type('asdpj6666h',{force:true})
//   const currentDate = new Date();

//       // Set the desired date components
//       const year = 1966;
//       const month = 8; // Months are 0-indexed, so August is 7
//       const day = 21;

//       // Set the Date object to the desired date
//       currentDate.setFullYear(year);
//       currentDate.setMonth(month);
//       currentDate.setDate(day);
//   cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
//  cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').type('{selectall}{backspace}')
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Owned by Self/Spouse',{force:true})
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').clear(' ',{force:true})
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').clear(' ',{force:true})
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').clear(' ')
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').clear(' ',{force:true})
//  cy.get('#current_since').clear(' ',{force:true})
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
//  cy.get(':nth-child(2) > .p-1 > .error-msg > .step-danger').should('exist')
//  cy.get(':nth-child(3) > .p-1 > .error-msg > .step-danger').should('exist')
//  cy.get(':nth-child(4) > .p-1 > .error-msg > .step-danger').should('exist')
//  cy.get(':nth-child(5) > .p-1 > .error-msg > .step-danger').should('exist')
//  //cy.get('#current_since_error').should('exist')//error 
// })
// it('Valid residential details(should not show any validation )',()=>{
// //   cy.visit("https://stage_bajajloan.cartradeexchange.com/")
// cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//   cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//   cy.get('.login100-form-btn').click({force:true})
//   cy.get('#otp').type('123456')
//   cy.get('.submit_button').click({force:true})
//   cy.wait(1000)
//   cy.get('#make').select('KTM')
//   cy.get('#model').should('exist')
//   cy.get('#model').select('ADV')
//   cy.get('#variant').select('390')
//   cy.get('#title').select('Mr.')
//   cy.get('#fname').type('pav')
//   cy.get('#lname').type('ani') 
// cy.get('.p-1 > #mobile').type('8')
    
//   cy.get('.p-1 > #mobile').type(userID_Alpha())
//   function userID_Alpha() {
//       var text = "";
//       var possible = "1234567890";

//       for (var i = 0; i < 9; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));

//       return text;
// }
// cy.get('.p-1 > .btn').click({force:true})
//   cy.get('#otp').type('1234')
//   cy.get('#verify_otp').click({force:true})
//   cy.get('#email').type('pavani@gmail.com')
//   cy.get('.w-25 > #valid_aadhar').click({force:true})
//   cy.get('.w-25 > #valid_pan').click({force:true})
//   cy.wait(1000)

//   cy.get('#pan').type('asdpj6666h',{force:true})
//   const currentDate = new Date();

//       // Set the desired date components
//       const year = 1966;
//       const month = 8; // Months are 0-indexed, so August is 7
//       const day = 21;

//       // Set the Date object to the desired date
//       currentDate.setFullYear(year);
//       currentDate.setMonth(month);
//       currentDate.setDate(day);
//   cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});

//  cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Owned by Self/Spouse',{force:true})
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').type('postal colony',{force:true})
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').type('burial grounds',{force:true})
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').type('kakinada')
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').type('533001',{force:true})
//  cy.get('#res_since').type('3')
//  cy.get('#current_since').type('3',{force:true})
//  })
// it('Employment details validation check',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//     cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Mr.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//     cy.get('.p-1 > #mobile').type('8')
      
//     cy.get('.p-1 > #mobile').type(userID_Alpha())
//     function userID_Alpha() {
//         var text = "";
//         var possible = "1234567890";
  
//         for (var i = 0; i < 9; i++)
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
  
//         return text;
//   }
//   cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type('1234')
//     cy.get('#verify_otp').click({force:true})
//     cy.get('#email').type('pavani@gmail.com')
//     cy.get('.w-25 > #valid_aadhar').click({force:true})
//     cy.get('.w-25 > #valid_pan').click({force:true})
//     cy.wait(1000)
//     cy.get('#pan').type('asdpj6666h',{force:true})
//     const currentDate = new Date();
  
//         // Set the desired date components
//         const year = 1966;
//         const month = 8; // Months are 0-indexed, so August is 7
//         const day = 21;
  
//         // Set the Date object to the desired date
//         currentDate.setFullYear(year);
//         currentDate.setMonth(month);
//         currentDate.setDate(day);
//     cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
  
//    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
//    cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Owned by Parent/Children',{force:true})
//    cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').type('postal colony',{force:true})
//    cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').type('burial grounds',{force:true})
//    cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').type('kakinada')
//    cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').type('533001',{force:true})
//    cy.get('#res_since').type('3')
//    cy.get('#current_since').type('3',{force:true})
//    cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
//    cy.get('.px-3 > :nth-child(2) > .step-footer > .btn').click({force:true})
//    cy.get(':nth-child(1) > .p-1 > .error-msg > .step-danger').should('exist')
//    cy.get(':nth-child(2) > .p-1 > .error-msg > .step-danger').should('exist')
//    //cy.get(':nth-child(3) > .p-1 > .error-msg > .step-danger').should('exist')
//    cy.get(':nth-child(4) > .p-1 > .error-msg > .step-danger').should('exist')
//    cy.get('.form-check > .error-msg > .step-danger').should('exist')
// })
// it('Gross monthly income with alphabets  ',()=>{
// //   cy.visit("https://stage_bajajloan.cartradeexchange.com/")
// cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//   cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//   cy.get('.login100-form-btn').click({force:true})
//   cy.get('#otp').type('123456')
//   cy.get('.submit_button').click({force:true})
//   cy.wait(1000)
//   cy.get('#make').select('KTM')
//   cy.get('#model').should('exist')
//   cy.get('#model').select('ADV')
//   cy.get('#variant').select('390')
//   cy.get('#title').select('Mr.')
//   cy.get('#fname').type('pav')
//   cy.get('#lname').type('ani') 
// cy.get('.p-1 > #mobile').type('8')
    
//   cy.get('.p-1 > #mobile').type(userID_Alpha())
//   function userID_Alpha() {
//       var text = "";
//       var possible = "1234567890";

//       for (var i = 0; i < 9; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));

//       return text;
// }
// cy.get('.p-1 > .btn').click({force:true})
//   cy.get('#otp').type('1234')
//   cy.get('#verify_otp').click({force:true})
//   cy.get('#email').type('pavani@gmail.com')
//    cy.get('.w-25 > #valid_aadhar').click({force:true})
//   cy.get('.w-25 > #valid_pan').click({force:true})
//   cy.wait(1000)
//   cy.get('#pan').type('asdpj6666h',{force:true})
//   const currentDate = new Date();

//       // Set the desired date components
//       const year = 1966;
//       const month = 8; // Months are 0-indexed, so August is 7
//       const day = 21;

//       // Set the Date object to the desired date
//       currentDate.setFullYear(year);
//       currentDate.setMonth(month);
//       currentDate.setDate(day);
//   cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
//  cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Owned by Parent/Children',{force:true})
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').type('postal colony',{force:true})
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').type('burial grounds',{force:true})
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').type('kakinada')
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').type('533001',{force:true})
//  cy.get('#res_since').type('3')
//  cy.get('#current_since').type('3',{force:true})
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Salaried')
//  cy.get(':nth-child(2) > .p-1 > .select-bg > .form-select').select('Under Graduate')
//  cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(3) > .p-1 > .form-control').type('dfsdf')
//  cy.get('.px-3 > :nth-child(2) > .step-footer > .btn').click({force:true})
//  cy.get(':nth-child(3) > .p-1 > .error-msg > .step-danger').should('exist')
// })
// it('Emi repayment mode radio buttons check ',()=>{
//     // cy.visit("https://stage_bajajloan.cartradeexchange.com/")
//     cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
//     cy.get('[style="position: relative;"] > #mobile').type('9999999996')
//     cy.get('.login100-form-btn').click({force:true})
//     cy.get('#otp').type('123456')
//     cy.get('.submit_button').click({force:true})
//     cy.wait(1000)
//     cy.get('#make').select('KTM')
//     cy.get('#model').should('exist')
//     cy.get('#model').select('ADV')
//     cy.get('#variant').select('390')
//     cy.get('#title').select('Mr.')
//     cy.get('#fname').type('pav')
//     cy.get('#lname').type('ani') 
//   cy.get('.p-1 > #mobile').type('8')
      
//     cy.get('.p-1 > #mobile').type(userID_Alpha())
//     function userID_Alpha() {
//         var text = "";
//         var possible = "1234567890";
  
//         for (var i = 0; i < 9; i++)
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
  
//         return text;
//   }
//     cy.get('.p-1 > .btn').click({force:true})
//     cy.get('#otp').type('1234')
//     cy.get('#verify_otp').click({force:true})
//     cy.get('#email').type('pavani@gmail.com')
//     cy.get('.w-25 > #valid_aadhar').click({force:true})
//     cy.get('.w-25 > #valid_pan').click({force:true})
//     cy.wait(1000)
//     cy.get('#pan').type('asdpj6666h',{force:true})
//     const currentDate = new Date();
  
//         // Set the desired date components
//         const year = 1966;
//         const month = 8; // Months are 0-indexed, so August is 7
//         const day = 21;
  
//         // Set the Date object to the desired date
//         currentDate.setFullYear(year);
//         currentDate.setMonth(month);
//         currentDate.setDate(day);
//     cy.get('#dob').type(currentDate.toLocaleDateString(),{force:true});
   
//    cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
//    cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Owned by Parent/Children',{force:true})
//    cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').type('postal colony',{force:true})
//    cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').type('burial grounds',{force:true})
//    cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').type('kakinada')
//    cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').type('533001',{force:true})
//    cy.get('#res_since').type('3')
//    cy.get('#current_since').type('3',{force:true})
//    cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
//    cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Salaried')
//    cy.get(':nth-child(2) > .p-1 > .select-bg > .form-select').select('Under Graduate')
//    cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(3) > .p-1 > .form-control').type('Infosys')
//    cy.get('.w-25 > #payment_type').click({force:true})
//    cy.get('.w-40 > #payment_type').click({force:true})
//    cy.get('.w-55 > #payment_type').click({force:true})
//   })
it('Employment details with all valid details(should not show any validations) ',()=>{
//   cy.visit("https://stage_bajajloan.cartradeexchange.com/")
cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
  cy.get('[style="position: relative;"] > #mobile').type('9999999996')
  cy.get('.login100-form-btn').click({force:true})
  cy.get('#otp').type('123456')
  cy.get('.submit_button').click({force:true})
  cy.wait(1000)
  cy.get('#make').select('KTM')
  cy.get('#model').should('exist')
  cy.get('#model').select('ADV')
  cy.get('#variant').select('390')
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
  cy.get('#email').type('pavani@gmail.com')
   cy.get('.w-25 > #valid_aadhar').click({force:true})
  cy.get('.w-25 > #valid_pan').click({force:true})
  cy.wait(1000)
  cy.get('#pan').type('asdpj6666h',{force:true})
  cy.get('#dob').click()
  cy.get('.datepicker-days > .table-condensed > thead > :nth-child(2) > .datepicker-switch').click()
  cy.get('.datepicker-months > .table-condensed > thead > :nth-child(2) > .datepicker-switch').click()
  cy.get('.datepicker-years > .table-condensed > thead > :nth-child(2) > .prev').click()
  cy.get('.datepicker-years > .table-condensed > tbody > tr > td > :nth-child(5)').click()
  cy.get('.datepicker-months > .table-condensed > tbody > tr > td > :nth-child(8)').click()
  cy.get('[data-date="745718400000"]').click()
 cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Owned by Parent/Children',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').type('postal colony',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').type('burial grounds',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').type('kakinada')
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').type('533001',{force:true})
 cy.get('#res_since').type('3')
 cy.get('#current_since').type('3',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Salaried')
 cy.get(':nth-child(2) > .p-1 > .select-bg > .form-select').select('Under Graduate')
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(3) > .p-1 > .form-control').type('INFOSYS LIMITED','{enter}')
//  cy.get(':nth-child(2) > .list-group-item').click({force:true})
 cy.get(':nth-child(4) > .p-1 > .select-bg > .form-select').select('Accountant')
 cy.wait(1000)
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(5) > .p-1 > .form-control').type('55000')
 cy.get('#join_date').click({force:true})
 cy.get('.datepicker-months > .table-condensed > thead > :nth-child(2) > .prev').click()
 cy.get('.datepicker-months > .table-condensed > thead > :nth-child(2) > .prev').click()
 cy.get('.datepicker-months > .table-condensed > thead > :nth-child(2) > .prev').click()
 cy.get('.datepicker-months > .table-condensed > tbody > tr > td > :nth-child(5)').click()
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(7) > .p-1 > .form-control').type('60')
 cy.get(':nth-child(8) > .p-1 > .form-control').type('5500')
 cy.get(':nth-child(9) > .p-1 > .form-control').type('Address')
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(10) > .p-1 > .form-control').type('Address')
 cy.get(':nth-child(11) > .p-1 > .form-control').type('Landmark')
 cy.get(':nth-child(12) > .p-1 > .form-control').type('400001')
 cy.get('.w-25 > #payment_type').click()
 cy.get('#flexCheckDefault3').click()
 cy.get('.px-3 > :nth-child(2) > .step-footer > .btn').click()
})
it('offer screen',()=>{
//   cy.visit("https://stage_bajajloan.cartradeexchange.com/")
cy.visit("https://php8-bajaj-loan.cartradeexchange.com/")
  cy.get('[style="position: relative;"] > #mobile').type('9999999996')
  cy.get('.login100-form-btn').click({force:true})
  cy.get('#otp').type('123456')
  cy.get('.submit_button').click({force:true})
  cy.wait(1000)  
  cy.get('#make').select('KTM')
  cy.get('#model').should('exist')
  cy.get('#model').select('ADV')
  cy.get('#variant').select('390')
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
  cy.get('#email').type('pavani@gmail.com')
  cy.get('.w-25 > #valid_aadhar').click({force:true})
  cy.get('.w-25 > #valid_pan').click({force:true})
  cy.wait(1000)
  cy.get('#pan').type('asdpj6666h',{force:true})
  cy.get('#dob').click()
  cy.get('.datepicker-days > .table-condensed > thead > :nth-child(2) > .datepicker-switch').click()
  cy.get('.datepicker-months > .table-condensed > thead > :nth-child(2) > .datepicker-switch').click()
  cy.get('.datepicker-years > .table-condensed > thead > :nth-child(2) > .prev').click()
  cy.get('.datepicker-years > .table-condensed > tbody > tr > td > :nth-child(5)').click()
  cy.get('.datepicker-months > .table-condensed > tbody > tr > td > :nth-child(8)').click()
  cy.get('[data-date="745718400000"]').click()
 cy.get('.col-12.m-0 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Owned by Parent/Children',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .p-1 > .form-control').type('postal colony',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(3) > .p-1 > .form-control').type('burial grounds',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(4) > .p-1 > .form-control').type('kakinada')
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(5) > .p-1 > .form-control').type('533001',{force:true})
 cy.get('#res_since').type('3')
 cy.get('#current_since').type('3',{force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .step-footer > .btn').click({force:true})
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(1) > .p-1 > .select-bg > .form-select').select('Salaried')
 cy.get(':nth-child(2) > .p-1 > .select-bg > .form-select').select('Under Graduate')
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(3) > .p-1 > .form-control').type('INFOSYS LIMITED','{enter}')
 cy.get(':nth-child(4) > .p-1 > .select-bg > .form-select').select('Accountant')
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(5) > .p-1 > .form-control').type('55000')
 cy.get('#join_date').click({force:true})
 cy.get('.datepicker-months > .table-condensed > thead > :nth-child(2) > .prev').click()
 cy.get('.datepicker-months > .table-condensed > thead > :nth-child(2) > .prev').click()
 cy.get('.datepicker-months > .table-condensed > thead > :nth-child(2) > .prev').click()
 cy.get('.datepicker-months > .table-condensed > tbody > tr > td > :nth-child(5)').click()
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(7) > .p-1 > .form-control').type('60')
 cy.get(':nth-child(8) > .p-1 > .form-control').type('5500')
 cy.get(':nth-child(9) > .p-1 > .form-control').type('Address')
 cy.get('.active > .customer-details > :nth-child(1) > :nth-child(2) > .g-2 > :nth-child(10) > .p-1 > .form-control').type('Address')
 cy.get(':nth-child(11) > .p-1 > .form-control').type('Landmark')
 cy.get(':nth-child(12) > .p-1 > .form-control').type('400001')
 cy.get('.w-25 > #payment_type').click()
 cy.get('#flexCheckDefault3').click()
 cy.get('.px-3 > :nth-child(2) > .step-footer > .btn').click()
 cy.wait(5000)
 cy.get('.editemi-blk').click()
 cy.get('.t-months > #loan_amount').click({force:true})
 cy.get('.t-months > #loan_amount').clear().type(12)

})
})