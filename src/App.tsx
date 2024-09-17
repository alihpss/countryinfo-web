import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from './Router';
import Header from './view/components/Header';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Router />
    </QueryClientProvider>
  );
}
