import { Theme } from '@radix-ui/themes';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CartProvider } from '../src/providers/CartProvider';
import ReduxProvider from '../src/providers/ReduxProvider';

const AllProviders = ({ children }: PropsWithChildren) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      <CartProvider>
        <ReduxProvider>
          <Theme>{children}</Theme>
        </ReduxProvider>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default AllProviders;
