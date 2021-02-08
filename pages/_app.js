import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "../styles/reset.css";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <GlobalStyle /> */}
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        {/* <ReactQueryDevtools initialIsOpen /> */}
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
