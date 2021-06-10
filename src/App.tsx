import { Header } from "../src/Components/Header";
import { Dashboard } from "./Components/Dashboard";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle/>
    </>
  );
}

export default App;
