import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Login from "./components/Login";
import MyNetwork from "./components/MyNetwork";
import Messanger from "./components/Messanger"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item">
                <Link to="/mynetwork" className="navbar-link">
                  My Network
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/chats" className="navbar-link">
                  Chats
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/" className="navbar-link">
                  Home
                </Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Login} />
          <Route path="/mynetwork" component={MyNetwork} />
          <Route path="/chats" component={Messanger}/>
        </Router>
      </div>
    );
  }
}
export default App;

