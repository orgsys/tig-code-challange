import React from 'react';
import { ShipmentsQuery } from '../../__generated__/graphql';

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

const ShipmentTable = ({
  data,
}: {
  data: ShipmentsQuery | undefined;
}) => {
  return (
    <TableContainer>
      <Table variant='shipment-table'>
        <Thead>
          <Tr>
            <Th width={300}>
              <TableHeadLabelSortButton
                label='Shipment'
                sortAreaLabel='Sort by shipment ID'
              />
            </Th>
            <Th>
              <Th width={300}>
                <TableHeadLabelSortButton
                  label='Status'
                  sortAreaLabel='Sort by shipment status'
                />
              </Th>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.shipments.map((shipment) => (
              <Tr key={shipment.id}>
                <Td>{shipment.trackingId}</Td>
                <Td>{shipment.status}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ShipmentTable;
