import "./App.css";
import { CounterContext } from "./contextState/counterContext";
import LandingPage from "./Pages/LandingPage";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <CounterContext.Provider value={{ count, setCount }}>
        <LandingPage />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
