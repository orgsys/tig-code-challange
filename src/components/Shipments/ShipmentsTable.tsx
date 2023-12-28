import React from 'react';
import { ShipmentsQuery } from '../../__generated__/graphql';

import {
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
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
      <Table variant='simple-data'>
        <Thead>
          <Tr>
            <Th width={200}>
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
          {data &&
            data.shipments.map((shipment) => (
              <Tr key={shipment.id}>
                <Td>
                  <Text fontSize='large' fontWeight="500">{shipment.trackingId}</Text>
                  <Text fontSize='small' fontWeight="500" color='gray'>
                    Updated: 123123{' '}
                  </Text>
                </Td>
                <Td>
                  <Tag variant="outline" py="8px" px="16px" colorScheme="orange">{shipment.status}</Tag>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ShipmentTable;
