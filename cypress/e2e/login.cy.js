describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })


it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('Taraelvi@yandex.ru');
        cy.get('#restoreEmailButton').click();
        

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })


     it('Верный логин и НЕправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio12');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })


     it('НЕправильный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('Taraelvi@yandex.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

   it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})

   it('Строчные буквы в логине и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})

})

describe('Проверка авторизации', function () {
it('e2e тест на покупку нового аватара для тренера', function () {
    cy.visit('https://pokemonbattle.ru/');                          
    cy.get('#k_email').type('Taraelvi@yandex.ru');                   
    cy.get('#k_password').type('Taraelvi15.');               
    cy.get('.MuiButton-root').click();                
    cy.wait(2000);
    cy.get('.header_card_trainer').click();            
    cy.wait(2000);
    cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); 
    cy.get('.available > button').first().click();   
    cy.get('.card_number').type('4620869113632996');                     
    cy.get('.card_csv').type('125');                             
    cy.get('.card_date').type('1226');                           
    cy.get('.card_name').type('NAME');                           
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     
    cy.get('.threeds_number').type('56456');                            
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   
    cy.contains('Покупка прошла успешно').should('be.visible'); 
     });

})
