import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
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
            borderColor: 'blue',
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
