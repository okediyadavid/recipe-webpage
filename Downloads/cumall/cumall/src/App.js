import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthcontextProvider } from './context/AuthContext';
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // Retry failed queries twice before throwing an error
      refetchOnWindowFocus: false, // Prevents refetching when switching tabs
      staleTime: 5 * 60 * 1000, // Cache results for 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthcontextProvider>
        <Navbar />
        <main className="container mx-auto p-4 bg-[#F6F2FF] min-h-screen">
          <Outlet />
        </main>
      </AuthcontextProvider>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
