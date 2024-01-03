import { shipmentsFixture } from '../fixtures/shipments';
import { trackingEvents } from '../fixtures/trackingEvents';

describe('The COMPANY CO. website', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://fe-coding-test-o6yezgstiq-km.a.run.app/graphql',
      (req) => {
        if (req.body.operationName === 'Shipments') {
          req.reply({
            statusCode: 200,
            body: {
              data: {
                shipments: shipmentsFixture,
              },
            },
          });
        }

        if (req.body.operationName === 'trEvent') {
          req.reply({
            statusCode: 200,
            body: {
              data: {
                trackingEvents: trackingEvents,
              },
            },
          });
        }
      }
    );
    cy.visit('http://localhost:3001');
  });
  it('should have the company name visible', () => {
    cy.contains('COMPANY CO.').should('be.visible');
  });
  it('Should have a shipments table', () => {
    cy.get('table').should('be.visible');
  });
  it('Shipment table should have 15 shipment entries', () => {
    cy.get('table tbody tr').should('have.length', 15);
  });
  it('First shipment entry should be SHP-12345', () => {
    cy.get('table tbody tr')
      .first()
      .contains('SHP-12345')
      .should('be.visible');
  });
  it('First shipment entry should have Updated time', () => {
    cy.get('table tbody tr')
      .first()
      .contains('Updated: 21 Oct 2023')
      .should('be.visible');
  });
  it('First shipment entry should have status Delivered with proper color', () => {
    cy.get('table tbody tr')
      .first()
      .contains('Delivered')
      .should('be.visible')
      .should('have.css', 'color', 'rgb(56, 161, 105)');
  });
  it('Should be able to sort by Shipment ID asc and desc', () => {
    cy.get('[data-cy="Sort by shipment ID').click();
    cy.get('table tbody tr').first().contains('SHP-11111');
    cy.get('[data-cy="Sort by shipment ID').click();
    cy.get('table tbody tr').first().contains('SHP-99999');
  });
  it('Should be able to sort by Status asc and desc', () => {
    cy.get('[data-cy="Sort by shipment status').click();
    cy.get('table tbody tr').first().contains('SHP-88888');
    cy.get('[data-cy="Sort by shipment status').click();
    cy.get('table tbody tr').first().contains('SHP-11111');
  });
  it('Should reveal tracking events view when clicking on shipment', () => {
    cy.get('table tbody tr').first().click().contains('SHIPMENT');
    cy.get('table tbody tr')
      .first()
      .click()
      .contains('TRACKING HISTORY');
  });
});
