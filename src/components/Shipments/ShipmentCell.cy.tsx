import React from 'react';
import ShipmentCell from './ShipmentCell';

describe('ShipmentCell Component', () => {
  it('renders shipment ID with correct text', () => {
    const trackingId = 'SHP-12345';
    const updatedAt = '2023-10-20T14:30:00Z';

    cy.mount(
      <ShipmentCell trackingId={trackingId} updatedAt={updatedAt} />
    );
    cy.get('.chakra-text')
      .eq(0)
      .should('have.text', trackingId)
      .should('be.visible');
  });

  it('renders shipment ID with correct styles', () => {
    const trackingId = 'SHP-12345';
    const updatedAt = '2023-10-20T14:30:00Z';

    cy.mount(
      <ShipmentCell trackingId={trackingId} updatedAt={updatedAt} />
    );
    cy.get('.chakra-text')
      .eq(0)
      .should('have.css', 'fontSize', '18px');
    cy.get('.chakra-text')
      .eq(0)
      .should('have.css', 'fontWeight', '500');
  });

  it('renders Updated at with correct text', () => {
    const trackingId = 'SHP-12345';
    const updatedAt = '2023-10-20T14:30:00Z';

    cy.mount(
      <ShipmentCell trackingId={trackingId} updatedAt={updatedAt} />
    );
    cy.get('.chakra-text')
      .eq(1)
      .should('have.text', 'Updated: 21 Oct 2023')
      .should('be.visible');
  });

  it('renders Updated at with correct styles', () => {
    const trackingId = 'SHP-12345';
    const updatedAt = '2023-10-20T14:30:00Z';

    cy.mount(
      <ShipmentCell trackingId={trackingId} updatedAt={updatedAt} />
    );
    cy.get('.chakra-text')
      .eq(1)
      .should('have.css', 'fontSize', '13px');
    cy.get('.chakra-text')
      .eq(1)
      .should('have.css', 'fontWeight', '500');
  });
});
