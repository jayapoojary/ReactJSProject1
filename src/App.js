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
import Footer from "./Footer/footer";
import { useSelector } from "react-redux";
import GeneratePassword from "./PasswordGenerator/GeneratePassword";
import GenerateFormToExcel from "./GameFolder/GenerateFormToExcel/GenerateFormToExcel";
function App() {
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();
    history.push("/login");
  };
  
  return (
    <>
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/login" component={Login} />
        <Route path='/contact' component={ContactUS} />
        <Route path='/rps/1' component={RPS} />
        <Route path='/games' component={Games} />
        <Route path='/password' component={GeneratePassword} />
        <Route path='/form' component={GenerateFormToExcel} />
      </Switch>
    </div>
    <Footer />
    </>
  );
}
{/*
echo "# Project1" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/jayapoojary/Project1.git
git push -u origin main
*/}

export default App;
