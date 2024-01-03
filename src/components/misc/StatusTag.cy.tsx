import React from 'react';
import StatusTag from './StatusTag';

describe('<StatusTag />', () => {
  it('renders status test with a label', () => {
    cy.mount(<StatusTag status='status label' />);
    cy.contains('status label');
  });
  it('renders status Delivered with right color', () => {
    cy.mount(<StatusTag status='Delivered' />);
    cy.contains('Delivered').should(
      'have.css',
      'color',
      'rgb(56, 161, 105)'
    );
  });
  it('renders status In-Transit with right color', () => {
    cy.mount(<StatusTag status='In-Transit' />);
    cy.contains('In-Transit').should(
      'have.css',
      'color',
      'rgb(49, 130, 206)'
    );
  });
  it('renders status Manifested with right color', () => {
    cy.mount(<StatusTag status='Manifested' />);
    cy.contains('Manifested').should(
      'have.css',
      'color',
      'rgb(49, 130, 206)'
    );
  });
  it('renders status Unknown with right color', () => {
    cy.mount(<StatusTag status='Unknown' />);
    cy.contains('Unknown').should(
      'have.css',
      'color',
      'rgb(229, 62, 62)'
    );
  });
});
