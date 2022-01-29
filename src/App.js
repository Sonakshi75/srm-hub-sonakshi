import React from "react";
import "./App.css";
import MainPage from "./MainPage";
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
import Notes from "./Notes";
import Restraunts from "./Restraunts";
function App() {
  return (
    <div>
    <Router>
    <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/Notes" component={Notes} />
    <Route path="/Restraunts" component={Restraunts}></Route>
    </Switch>
    </Router>
    </div>
  );
}
export default App;
