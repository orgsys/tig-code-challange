import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    delivered: 'green',
    unknown: 'orange',
  },
  styles: {
    global: {
      body: {
        bg: 'lightgray',
        color: 'black',
      },
    },
  },
  components: {
    Table: {
      variants: {
        'simple-data': {
          table: {
            bg: 'white',
            borderRadius: '10px',
          },
          th: {
            color: 'gray',
            textTransform: 'capitalised',
          },
          tr: {
            borderBottom: '1px',
            borderColor: 'lightgray',
          },
        },
      },
    },
  },
});
