import { BrowserRouter } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import  Rotas  from "./rotas";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Rotas />
      </Layout>
    </BrowserRouter>
  );
}
export default App;
