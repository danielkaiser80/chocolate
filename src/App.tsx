import "./App.css";

import { Route, Switch } from "wouter";
import Overview from "./pages/Overview.tsx";
import ChocolateDetail from "./pages/ChocolateDetail.tsx";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Overview} />

      <Route path="/chocolates/:id">
        {(params) => <ChocolateDetail id={params.id} />}
      </Route>

      <Route path="/:rest*">
        {(params) => `404, leider exisitiert die Seite ${params.rest} nicht!`}
      </Route>
    </Switch>
  );
};

export default App;
