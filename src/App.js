import { Route, Redirect } from "react-router-dom";
import "./App.css";

import Navigation from "./components/NavBar/Navigation";
import AddNew from "./components/Pages/AddNew";
import GetAll from "./components/Pages/GetAll";
import Details from "./components/Pages/Details";

function App() {
  return (
    <div>
      <Navigation />
      <div className="container">
      <Route path="/add">
        <AddNew />
      </Route>
      <Route path="/categories">
        <GetAll />
      </Route>
      <Route path="/details/:id">
        <Details />
      </Route>
      <Route exact path="/">
        <Redirect to="/categories" />
      </Route>
      </div>
    </div>
  );
}

export default App;
