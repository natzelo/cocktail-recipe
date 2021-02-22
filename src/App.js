import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
