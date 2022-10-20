import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/configStore";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./shared/theme";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>
);
