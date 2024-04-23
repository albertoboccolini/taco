import {v4 as uuidv4} from 'uuid';

let tools = [
    {"link": "converter", "name": "converter"},
    {"link": "qrcode", "name": "QR"},
    {"link": "drop", "name": "drop"},
    {"link": "encoder", "name": "encoder"},
    {"link": "public-ip", "name": "IP"},
    {"link": "remover", "name": "remover"},
    {"link": "tomato", "name": "tomato"},
    {"link": "passwords", "name": "passwords"},
    {"link": "json", "name": "JSON"},
    {"link": "palette", "name": "palette"},
    {"link": "calc", "name": "calc"}
]

describe("alts check", () => {
    it('header', () => {
        cy.visit('http://localhost:4000')
        cy.get('main > div:nth-child(2) > header > div:nth-child(2) > div:nth-child(2)')
            .should('exist')
            .and('have.attr', 'title', 'account | sign-in');
        cy.get('main > div:nth-child(2) > header > div:nth-child(1) > a > img')
            .should('exist')
            .and('have.attr', 'title', 'taco | homepage');
    });
    it('homepage', () => {
        cy.visit('http://localhost:4000')
        tools.forEach(tool => {
            cy.get('main > div > main').within(() => {
                const aSelector = `a[href*="tools/${tool.link}"]`;
                const selector = `a[href*="tools/${tool.link}"] img`;
                cy.get(aSelector)
                    .should('exist')
                    .and('have.attr', 'href', `/tools/${tool.link}`)
                cy.get(selector)
                    .should('exist')
                    .and('have.attr', 'title', `taco ${tool.name}`)
                    .and('have.attr', 'alt', `taco ${tool.name}`);
            });
        });
    });
});

describe('titles check', () => {
    it('homepage', () => {
        cy.visit('http://localhost:4000')
        cy.title().should('eq', `taco | homepage`)
    });
    it('account', () => {
        cy.visit('http://localhost:4000/account')
        cy.title().should('eq', `taco | sign-in`)
    });
    it('sign-up', () => {
        cy.visit('http://localhost:4000/account/sign-up')
        cy.title().should('eq', `taco | sign-up`)
    });
    it('tools', () => {
        cy.visit('http://localhost:4000')
        const userApiKey = uuidv4(); // Mocked user-api-key to access taco drop
        window.localStorage.setItem("user-api-key", userApiKey);
        tools.forEach(tool => {
            cy.get(`a[href*="tools/${tool.link}"]`).click()
            cy.title().should('eq', `taco | ${tool.link}`)
            if (tool.link != "calc") {
                cy.get('div > main > div > div > div > h1').contains(`taco ${tool.name}`)
                cy.get('div > main > div > div > div > img')
                    .should('exist')
                    .and('have.attr', 'alt', `taco ${tool.name}`);
            }
            cy.visit('http://localhost:4000')
        });
        cy.clearLocalStorage()
    });
});

