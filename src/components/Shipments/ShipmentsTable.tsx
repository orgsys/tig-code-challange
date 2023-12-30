import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import TableHeadLabelSortButton from './TableHeaderLabel';
import ShipmentCell from './ShipmentCell';
import StatusTag from '../misc/StatusTag';
import { useState } from 'react';
import ShipmentDrawer from '../ShipmentDrawer';
import { IShipment } from '.';

const tableRow = {
  cursor: 'pointer',
};

const ShipmentTable = ({
  shipments,
}: {
  shipments: IShipment[] | undefined;
}) => {
  const [selectedShipment, setSelectedShipment] =
    useState<IShipment>();

  const handleClose = () => {
    setSelectedShipment(undefined);
  };

  return (
    <>
      <TableContainer>
        <Table variant='simple-data'>
          <Thead>
            <Tr>
              <Th width={250}>
                <TableHeadLabelSortButton
                  label='Shipment'
                  sortAreaLabel='Sort by shipment ID'
                />
              </Th>
              <Th>
                <TableHeadLabelSortButton
                  label='Status'
                  sortAreaLabel='Sort by shipment status'
                />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {shipments &&
              shipments.map((shipment) => (
                <Tr
                  key={shipment.id}
                  style={tableRow}
                  onClick={() => setSelectedShipment(shipment)}
                >
                  <Td>
                    <ShipmentCell
                      trackingId={shipment.trackingId}
                      updatedAt={shipment.lastUpdate}
                    />
                  </Td>
                  <Td>
                    <StatusTag status={shipment.status} />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <ShipmentDrawer
        onClose={handleClose}
        selectedShipment={selectedShipment}
      />
    </>
  );
};

export default ShipmentTable;
