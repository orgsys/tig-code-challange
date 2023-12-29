import { CloseIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Heading,
  IconButton,
  Progress,
  Spacer,
  Table,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react';
import AccordionButton from '../misc/AccordionButton';
import StatusTag from '../misc/StatusTag';

const shipmentLabelStyle = {
  width: '180px',
  verticalAlign: 'top',
  color: 'gray',
  fontWeight: '400',
  fontSize: 'small',
  padding: '0px',
  paddingBottom: '16px',
};

const shipmentValueStyle = {
  fontWeight: '500',
  fontSize: 'small',
  padding: '0px',
  paddingBottom: '16px',
};

interface ShipmentDrawerProps {
  selectedShipment:
    | {
        __typename?: 'Shipment';
        status: string;
        id: string;
        trackingId: string;
        lastUpdate: string;
        deliveredTime?: string | null;
        deliveryAddress: string;
        totalTransit: string;
      }
    | undefined;
  onClose: () => void;
}

const ShipmentDrawer = ({
  selectedShipment,
  onClose,
}: ShipmentDrawerProps) => {
  return (
    <Drawer
      isOpen={selectedShipment !== undefined}
      placement='right'
      onClose={onClose}
      size='lg'
      // finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <HStack alignItems='center'>
            <Heading size='xl' fontWeight={500}>
              {selectedShipment?.trackingId}
            </Heading>
            <Spacer />
            <IconButton
              size='md'
              variant='outline'
              width='10px'
              aria-label='Close shipment details'
              icon={<CloseIcon fontSize='x-small' />}
              colorScheme='gray'
              onClick={onClose}
            />
          </HStack>
        </DrawerHeader>
        <DrawerBody>
          <Accordion allowMultiple defaultIndex={[0, 1]}>
            <AccordionItem>
              <AccordionButton>Shipment</AccordionButton>
              <AccordionPanel>
                {selectedShipment && (
                  <Table variant='unstyled' width='400px'>
                    <Tbody>
                      <Tr>
                        <Td
                          style={{
                            ...shipmentLabelStyle,
                            verticalAlign: 'center',
                          }}
                        >
                          Status
                        </Td>
                        <Td style={shipmentValueStyle}>
                          <StatusTag
                            status={selectedShipment.status}
                          />
                        </Td>
                      </Tr>
                      {selectedShipment.deliveredTime && (
                        <Tr>
                          <Td style={shipmentLabelStyle}>
                            Delivered time
                          </Td>
                          <Td style={shipmentValueStyle}>
                            {new Date(
                              selectedShipment.deliveredTime
                            ).toLocaleString('en-AU', {
                              timeStyle: 'short',
                              dateStyle: 'medium',
                            })}
                          </Td>
                        </Tr>
                      )}
                      <Tr>
                        <Td
                          style={shipmentLabelStyle}
                          alignContent='baseline'
                        >
                          Delivery Address
                        </Td>
                        <Td
                          style={shipmentValueStyle}
                          alignItems='baseline'
                        >
                          {selectedShipment.deliveryAddress}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td
                          style={shipmentLabelStyle}
                          alignContent='baseline'
                        >
                          Last updated
                        </Td>
                        <Td
                          style={shipmentValueStyle}
                          alignItems='baseline'
                        >
                          {new Date(
                            selectedShipment.lastUpdate
                          ).toLocaleString('en-AU', {
                            timeStyle: 'short',
                            dateStyle: 'medium',
                          })}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td
                          style={shipmentLabelStyle}
                          alignContent='baseline'
                        >
                          Transit time
                        </Td>
                        <Td
                          style={shipmentValueStyle}
                          alignItems='baseline'
                        >
                          {new Date(
                            selectedShipment.totalTransit
                          ).toLocaleString('en-AU', {
                            timeStyle: 'short',
                            dateStyle: 'medium',
                          })}
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                )}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>Tracking History</AccordionButton>
              <AccordionPanel>
                <Progress size='xs' isIndeterminate />
                <br />
                Shipment details view Shipment details view Shipment
                details view Shipment details view Shipment details
                view Shipment details view
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ShipmentDrawer;
