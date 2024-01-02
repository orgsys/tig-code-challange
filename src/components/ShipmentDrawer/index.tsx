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
  Spacer,
} from '@chakra-ui/react';
import AccordionButton from '../misc/AccordionButton';
import ShipmentDetails from './ShipmentDetails';
import ShipmentTrackingHistory from './ShipmentTrackingHistory';
import { IShipment } from '../../api/shipments';

interface ShipmentDrawerProps {
  selectedShipment: IShipment | undefined;
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
                <ShipmentDetails shipment={selectedShipment} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>Tracking History</AccordionButton>
              <AccordionPanel>
                {selectedShipment?.trackingId && (
                  <ShipmentTrackingHistory
                    trackingId={selectedShipment.trackingId}
                  />
                )}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ShipmentDrawer;
