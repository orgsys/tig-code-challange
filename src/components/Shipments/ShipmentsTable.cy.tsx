import ShipmentTable from './ShipmentsTable';
import { shipmentsFixture } from '../../../cypress/fixtures/shipments';

describe('ShipmentTable Component', () => {
  it('renders with shipments data', () => {
    const shipments = shipmentsFixture;
    const setSelectedShipment = cy.stub().as('setSelectedShipment');

    cy.mount(
      <ShipmentTable
        shipments={shipments}
        setSelectedShipment={setSelectedShipment}
      />
    );

    cy.get('.chakra-table__container').should('exist');
    cy.get('.chakra-table').should('exist');
    cy.get('th').should('exist');
    cy.get('tbody').should('exist');
    cy.get('tbody tr').should('have.length', shipments.length);
    cy.get('button').should('have.length', 2);
  });

  it('handles click events', () => {
    const shipments = shipmentsFixture;
    const setSelectedShipment = cy.stub().as('setSelectedShipment');

    cy.mount(
      <ShipmentTable
        shipments={shipments}
        setSelectedShipment={setSelectedShipment}
      />
    );

    cy.get('tbody tr').first().click();
    cy.get('@setSelectedShipment').should(
      'have.been.calledWith',
      shipmentsFixture[0]
    );
  });
});
