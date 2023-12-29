import {
  AccordionIcon,
  Box,
  Text,
  AccordionButton as AccordionButtonChakra,
} from '@chakra-ui/react';

const AccordionButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <AccordionButtonChakra>
      <Box as='span' flex='1' textAlign='left'>
        <Text
          textTransform='uppercase'
          fontSize='small'
          fontWeight={600}
          color='gray'
        >
          {children}
        </Text>
      </Box>
      <AccordionIcon color='gray' />
    </AccordionButtonChakra>
  );
};

export default AccordionButton;
