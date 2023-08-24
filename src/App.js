import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Login from "./Login";
import { Link } from "react-router-dom";
import ContactUS from "./ContactUS";
import { useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import Home from "./Home/Home";
import RPS from "./GameFolder/RPS";
import Games from "./GameFolder/Games";
function App() {
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();
    history.push("/login");
  };
  
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/login" component={Login} />
        <Route path='/contact' component={ContactUS} />
        <Route path='/rps' component={RPS} />
        <Route path='/games' component={Games} />
      </Switch>
    </div>
  );
}

export default App;
