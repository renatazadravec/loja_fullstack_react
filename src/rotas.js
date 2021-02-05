import { Switch, Route } from "react-router-dom";

import * as Pages from "./pages"

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Pages.Home} />
      <Route exact path="/produtos" component={Pages.NossosProdutos} />
      <Route exact path="/contatos" component={Pages.Contatos} />
      <Route exact path="/nossas-lojas" component={Pages.NossasLojas} />
      <Route exact path="/pedidos" component={Pages.Pedidos} />
    </Switch>
  );
}
