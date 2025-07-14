import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./layout/AppLayout.tsx";
import { publicRoutes } from "./routes/publicRoutes.tsx";

const queryClientProvider = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      retry: false,
      retryOnMount: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClientProvider}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            {publicRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                index={route.index}
                element={route.component}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools
        buttonPosition={"bottom-left"}
        initialIsOpen={false}
      />
    </QueryClientProvider>
  </StrictMode>
);
