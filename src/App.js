import { GlobalStyle } from "./shared/GlobalStyle";
import Router from "./shared/Router";
import { ReactQueryDevtools } from "react-query/devtools";
function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
