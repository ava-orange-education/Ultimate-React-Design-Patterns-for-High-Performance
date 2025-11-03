import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InfiniteScrollQuotes from "./components/InfiniteScrollQuotes";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <InfiniteScrollQuotes />
      </QueryClientProvider>
    </>
  );
}

export default App;
