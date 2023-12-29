import { ApolloError, ApolloQueryResult } from '@apollo/client';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { Exact, ShipmentsQuery } from '../__generated__/graphql';

interface AlertWithRefetchProps {
  error: ApolloError | undefined;
  refetch: (
    variables?: Partial<Exact<{ [key: string]: never }>> | undefined
  ) => Promise<ApolloQueryResult<ShipmentsQuery>>;
}

const AlertWithRefetch = ({
  error,
  refetch,
}: AlertWithRefetchProps) => {
  return (
    <>
      {error && (
        <Alert status='error'>
          <HStack width='100%'>
            <Box>
              <HStack>
                <AlertIcon />
                <AlertTitle>
                  Error getting data from server
                </AlertTitle>
                <AlertDescription>
                  <Text>{error.message}</Text>
                </AlertDescription>
              </HStack>
            </Box>
            <Spacer />
            <Button size='sm' onClick={() => refetch()}>
              Retry
            </Button>
          </HStack>
        </Alert>
      )}
    </>
  );
};

export default AlertWithRefetch;
