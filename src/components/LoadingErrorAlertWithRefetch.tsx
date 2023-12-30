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
  VStack,
} from '@chakra-ui/react';
import {
  Exact,
  ShipmentsQuery,
  TrEventQuery,
} from '../__generated__/graphql';

interface AlertWithRefetchProps {
  error: ApolloError | undefined;
  refetch: (
    variables?: Partial<Exact<{ [key: string]: never }>> | undefined
  ) =>
    | Promise<ApolloQueryResult<ShipmentsQuery>>
    | Promise<ApolloQueryResult<TrEventQuery>>;
}

const LoadingErrorAlertWithRefetch = ({
  error,
  refetch,
}: AlertWithRefetchProps) => {
  return (
    <>
      {error && (
        <Alert
          status='error'
          borderRadius='2px'
          marginBottom={5}
          width='100%'
        >
          <HStack width='100%'>
            <Box>
              <HStack>
                <AlertIcon />
                <VStack alignItems='left'>
                  <AlertTitle>
                    Error getting data from server:
                  </AlertTitle>
                  <AlertDescription>{error.message}</AlertDescription>
                </VStack>
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

export default LoadingErrorAlertWithRefetch;
