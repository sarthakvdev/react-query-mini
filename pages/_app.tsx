import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

// creating client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Providing client to the provider
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />;
    </QueryClientProvider>
  );
}

export default MyApp;
