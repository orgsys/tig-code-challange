import { Table, Tbody } from '@chakra-ui/react';
import { IShipment } from '../Shipments';
import StatusTag from '../misc/StatusTag';
import ShipmentDetailsTableRow from './ShipmentDetailsTableRow';

const ShipmentDetails = ({
  shipment,
}: {
  shipment: IShipment | undefined;
}) => {
  return (
    <>
      {shipment && (
        <Table variant='unstyled' width='400px'>
          <Tbody>
            <ShipmentDetailsTableRow
              label='Status'
              value={<StatusTag status={shipment.status} />}
              singleLine
            />
            {shipment.deliveredTime && (
              <ShipmentDetailsTableRow
                label='Delivered time'
                value={new Date(
                  shipment.deliveredTime
                ).toLocaleString('en-AU', {
                  timeStyle: 'short',
                  dateStyle: 'medium',
                })}
              />
            )}
            <ShipmentDetailsTableRow
              label='Delivery Address'
              value={shipment.deliveryAddress}
            />
            <ShipmentDetailsTableRow
              label='Last updated'
              value={new Date(shipment.lastUpdate).toLocaleString(
                'en-AU',
                {
                  timeStyle: 'short',
                  dateStyle: 'medium',
                }
              )}
            />
            <ShipmentDetailsTableRow
              label='Transit time'
              value={shipment.totalTransit}
            />
          </Tbody>
        </Table>
      )}
    </>
  );
};
export default ShipmentDetails;
