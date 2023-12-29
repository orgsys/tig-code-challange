import { Text } from '@chakra-ui/react';

const ShipmentCell = ({
  trackingId,
  updatedAt,
}: {
  trackingId: string;
  updatedAt: string;
}) => {
  return (
    <>
      <Text fontSize='large' fontWeight='500'>
        {trackingId}
      </Text>
      <Text fontSize='small' fontWeight='500' color='gray'>
        Updated:{' '}
        {new Date(updatedAt).toLocaleDateString('en-AU', {
          dateStyle: 'medium',
        })}
      </Text>
    </>
  );
};

export default ShipmentCell;
