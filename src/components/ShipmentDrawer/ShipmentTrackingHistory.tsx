import {
  Box,
  Progress,
  Step,
  StepIndicator,
  StepSeparator,
  Stepper,
} from '@chakra-ui/react';
import { gql } from '../../__generated__';
import { useQuery } from '@apollo/client';
import LoadingErrorAlertWithRefetch from '../LoadingErrorAlertWithRefetch';
import StatusSeverityIcon from './StatusSeverityIcon';
import TrackingEventDetails from './TrackingEventDetails';

export interface ITrackingEvent {
  __typename?: 'TrackingEvent' | undefined;
  id: string;
  statusSeverity: string;
  timestamp?: string | null | undefined;
  location: string;
  status: string;
}

const GET_TRACKING_EVENTS = gql(/* GraphQL */ `
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

const ShipmentTrackingHistory = ({
  trackingId,
}: {
  trackingId: string;
}) => {
  const { loading, error, data, refetch } = useQuery(
    GET_TRACKING_EVENTS,
    {
      variables: { trackingId },
    }
  );

  if (error)
    return (
      <LoadingErrorAlertWithRefetch error={error} refetch={refetch} />
    );

  return (
    <>
      {loading ? (
        <Progress size='xs' isIndeterminate />
      ) : (
        <Box
          style={{
            border: '1px solid lightgray',
            borderRadius: '5px',
            padding: '10px',
          }}
        >
          {data?.trackingEvents && (
            <Box
              overflowY='auto'
              maxHeight='300px'
              sx={{
                '&::-webkit-scrollbar': {
                  width: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'lightgray',
                  height: '60px',
                  borderRadius: '10px',
                  width: '12px',
                  paddingLeft: '4px',
                },
              }}
            >
              <Stepper
                variant='traking-history'
                index={data?.trackingEvents.length}
                orientation='vertical'
                justifyItems='center'
                height={data.trackingEvents.length * 90}
                gap='0'
              >
                {data.trackingEvents.map((trackingEvent) => (
                  <Step
                    key={trackingEvent.id}
                    style={{ width: '100%', paddingRight: 10 }}
                  >
                    <StepIndicator style={{ background: 'white' }}>
                      <StatusSeverityIcon
                        statusSeverity={trackingEvent.statusSeverity}
                      />
                    </StepIndicator>
                    <TrackingEventDetails
                      trackingEvent={trackingEvent}
                    />
                    <StepSeparator
                      style={{
                        background: 'lightgray',
                        width: '2px',
                      }}
                    />
                  </Step>
                ))}
              </Stepper>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

export default ShipmentTrackingHistory;
