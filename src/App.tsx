import "./App.css";

import { Route, Switch } from "wouter";
import Overview from "./pages/Overview.tsx";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Overview} />

      <Route path="/chocolates/:id">TO DO</Route>

      <Route path="/:rest*">
        {(params) => `404, leider exisitiert die Seite ${params.rest} nicht!`}
      </Route>
    </Switch>
  );
};

export default App;
