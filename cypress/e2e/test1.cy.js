
it('set temperature', () => {
    cy.visit('http://c2.link4cloud.com/')
    cy.get('#if-email').type('ayeshanadeem291@gmail.com{enter}')
    cy.get('#if-password').type('ayeshamysis12{enter}')
    cy.get('.location-box', { timeout: 10000 }).should('be.visible')
    cy.get('.location-box').click()
    cy.get('.controller-wrapper', { timeout: 10000 }).should('be.visible')
    cy.get('.controller-wrapper').click()
    cy.get('[aria-label="Inside Temperature"]').click()
    cy.get('#content-area', { timeout: 10000 }).should('be.visible')
    cy.scrollTo('bottom')
    cy.get('select').eq(0).select('Zone 1');
    cy.get('input[inputmode="decimal"]:last')
        .invoke('val')
        .then((val) => {
            const value = `${Number(val) + 5}`;
            cy.get('input[inputmode="decimal"]:last').type(`{selectall}${value}`)
            cy.get('.save-cancel-box > button').contains('Save').click()
            cy.get('.save-cancel-box > button', { timeout: 5000 }).contains('Save').should('have.attr', 'disabled')
            cy.scrollTo('top')
            cy.get('#breadcrumb-container > a').contains('Ayesha').click()
            cy.reload()
            cy.get('.sensor-grid', { timeout: 10000 }).should('be.visible')
            cy.get('[aria-label="Inside Temperature"] >> svg').should('contain', `${value}`)
        })
    cy.get('[aria-label="Inside Humidity"]').click()
    cy.get('#content-area', { timeout: 10000 }).should('be.visible')
    cy.scrollTo('bottom')
    cy.get('select').eq(0).select('Software');
    cy.get('input[inputmode="decimal"]:last')
        .invoke('val')
        .then((val) => {
            const value = `${Number(val) + 5}`;
            cy.get('input[inputmode="decimal"]:last').type(`{selectall}${value}`)
            cy.get('.save-cancel-box > button').contains('Save').click()
            cy.get('.save-cancel-box > button', { timeout: 5000 }).contains('Save').should('have.attr', 'disabled')
            cy.scrollTo('top')
            cy.get('#breadcrumb-container > a').contains('Ayesha').click()
            cy.reload()
            cy.get('.sensor-grid', { timeout: 10000 }).should('be.visible')
            cy.get('[aria-label="Inside Humidity"] >> svg').should('contain', `${value}`)
        })
})

it.only('Create equipment', () => {
    cy.visit('http://c2.link4cloud.com/')
    cy.get('#if-email').type('ayeshanadeem291@gmail.com{enter}')
    cy.get('#if-password').type('ayeshamysis12{enter}')
    cy.get('.location-box', { timeout: 10000 }).should('be.visible')
    cy.get('.location-box').click()
    cy.get('.controller-wrapper', { timeout: 12000 }).should('be.visible')
    cy.get('.controller-wrapper').click()
    cy.get('a.name:first').click()
    cy.get('select').eq(0).select('On Off');
    cy.get('label + input:first').type('{selectall}eq 1');
    cy.get('.save-cancel-box > button').contains('Save').click()
    cy.get('div.floatright img').trigger('contextmenu', { button: 2 });
    cy.get('#fuiImage').click()
    cy.get('input[type="file"]').attachFile('growinreal.png');
    cy.get('a.add:first').click()
    cy.get('textarea').type("interview question 1")
    cy.get('div.css-tlfecz-indicatorContainer:last').click()
    cy.get('#react-select-6-option-0').click()
    cy.get('button[aria-label="create"]').click()
    cy.scrollTo('top')
    cy.get('#breadcrumb-container > a').contains('Ayesha').click()
    cy.reload()
    cy.get('.sensor-grid', { timeout: 10000 }).should('be.visible')
    cy.get('a.name:first').should('contain','eq 1')



})