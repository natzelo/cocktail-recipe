import { useState } from "react";
import "./App.css";
import Home from "./components/home";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Home isOpen={isOpen} toggle={toggle} />
    </>
  );
}

export default App;
