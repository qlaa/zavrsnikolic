import "./App.css";
import Naslovna from "./Components/Naslovna/Naslovna";
import Prva from "./Components/Prvastranica/Prvastranica";
import Druga from "./Components/Drugastranica/Drugastranica";
import Treca from "./Components/Trecastranica/Trecastranica";
import Cetvrta from "./Components/Cetvrtastranica/Cetvrtastranica";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Naslovna/>}/>
          <Route path="/Prvastranica" element={<Prva/>}/>
          <Route path="/Drugastranica" element={<Druga/>}/>
          <Route path="/Trecastranica" element={<Treca/>}/>
          <Route path="/Cetvrtastranica" element={<Cetvrta/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
