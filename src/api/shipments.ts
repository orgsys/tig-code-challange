import { gql } from '../__generated__';

export interface IShipment {
  __typename?: 'Shipment' | string;
  status: string;
  id: string;
  trackingId: string;
  lastUpdate: string;
  deliveredTime?: string | null;
  deliveryAddress: string;
  totalTransit: string;
}

export const GET_SHIPMENTS = gql(/* GraphQL */ `
  query Shipments {
    shipments {
      status
      id
      trackingId
      lastUpdate
      deliveredTime
      deliveryAddress
      totalTransit
    }
  }
`);
