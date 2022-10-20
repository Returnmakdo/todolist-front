import { HelmetProvider } from "react-helmet-async";
import { GlobalStyle } from "./shared/GlobalStyle";
import Router from "./shared/Router";

function App() {
  return (
    <>
      <HelmetProvider>
        <Router />
        <GlobalStyle />
      </HelmetProvider>
    </>
  );
}

export default App;
