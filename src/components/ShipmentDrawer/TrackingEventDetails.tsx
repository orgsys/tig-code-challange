import { Box, Divider, HStack, Spacer, StepDescription, StepTitle } from '@chakra-ui/react';
import { ITrackingEvent } from './ShipmentTrackingHistory';

interface TrackingEventDetailsProps {
  trackingEvent: ITrackingEvent;
}

const TrackingEventDetails = ({
  trackingEvent,
}: TrackingEventDetailsProps) => {
  return (
    <Box width='100%'>
      <HStack>
        <Box flexShrink='0'>
          <StepTitle>{trackingEvent.status}</StepTitle>
          <StepDescription>{trackingEvent.location}</StepDescription>
        </Box>
        <Spacer />
        {trackingEvent.timestamp && (
          <Box flexShrink='0' textAlign='right'>
            <StepTitle>
              {new Date(trackingEvent.timestamp).toLocaleDateString(
                'en-AU',
                {
                  dateStyle: 'medium',
                }
              )}
            </StepTitle>
            <StepDescription>
              {new Date(trackingEvent.timestamp).toLocaleTimeString(
                'en-AU',
                {
                  timeStyle: 'short',
                }
              )}
            </StepDescription>
          </Box>
        )}
      </HStack>
      <br />
      <Divider variant='dashed' />
    </Box>
  );
};

export default TrackingEventDetails;
