import { gql } from '../__generated__';

export interface ITrackingEvent {
  __typename?: 'TrackingEvent' | undefined;
  id: string;
  statusSeverity: string;
  timestamp?: string | null | undefined;
  location: string;
  status: string;
}

export const GET_TRACKING_EVENTS = gql(/* GraphQL */ `
  query trEvent($trackingId: String!) {
    trackingEvents(trackingId: $trackingId) {
      id
      statusSeverity
      timestamp
      location
      status
    }
  }
`);
