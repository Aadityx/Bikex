import { useState } from "react";
import Home from "./components/Home";
import Admin from "./components/Admin";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>Mini E-Commerce</h1>
        <button onClick={() => setIsAdmin(false)}>Home</button>
        <button onClick={() => setIsAdmin(true)}>Admin Panel</button>
      </header>

      {isAdmin ? <Admin /> : <Home />}
    </div>
  );
}

export default App;
